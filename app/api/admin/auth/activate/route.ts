import {env} from 'cloudflare:workers';
import {api,body,json,db,ApiError,sameOrigin,audit} from '../../../../../lib/catalog-service';
import {pepper,passwordHash,digest,equal,randomToken,ownerEmails,throttle,issueSession,sessionCookie} from '../../../../../lib/admin-auth';
export function POST(request:Request){return api(async()=>{
  sameOrigin(request);const input=await body(request);
  const email=typeof input.email==='string'?input.email.trim().toLowerCase():'';
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||email.length>254||typeof input.password!=='string'||input.password.length<12||input.password.length>128)throw new ApiError(400,'Use um e-mail válido e uma senha de 12 a 128 caracteres.');
  if(!await throttle(request,email))throw new ApiError(429,'Muitas tentativas. Aguarde 15 minutos.');
  if(typeof input.token!=='string'||!/^[a-f0-9]{64}$/.test(input.token))throw new ApiError(400,'Link de ativação inválido ou expirado. Solicite outro ao responsável.');
  const hash=await digest(input.token),now=Date.now(),setupKey='password-owner-activated:'+await digest(input.token);
  const initial=!!env.ADMIN_SETUP_TOKEN_HASH&&equal(hash,env.ADMIN_SETUP_TOKEN_HASH)&&ownerEmails().includes(email)&&Number(env.ADMIN_SETUP_EXPIRES_AT)>now;
  if(initial){
    if(await db().prepare('SELECT value FROM catalog_metadata WHERE key=?').bind(setupKey).first())throw new ApiError(400,'Este link já foi utilizado.');
  }else{
    const invitation=await db().prepare('SELECT email FROM admin_invitations WHERE token_hash=? AND email=? AND expires_at>?').bind(hash,email,now).first();
    if(!invitation)throw new ApiError(400,'Link de ativação inválido ou expirado. Solicite outro ao responsável.');
  }
  const salt=randomToken(),encoded=await passwordHash(input.password,salt,pepper()),accountId=crypto.randomUUID();
  // Conditional INSERT/UPDATE and token deletion run together in one D1 transaction.
  const condition=initial?'NOT EXISTS (SELECT 1 FROM catalog_metadata WHERE key=?)':'EXISTS (SELECT 1 FROM admin_invitations WHERE token_hash=? AND email=? AND expires_at>?)';
  const params=initial?[setupKey]:[hash,email,now];
  const write=db().prepare(`INSERT INTO admin_accounts (id,email,password_hash,salt,active,created_at) SELECT ?,?,?,?,1,? WHERE ${condition} ON CONFLICT(email) DO UPDATE SET password_hash=excluded.password_hash,salt=excluded.salt,active=1`).bind(accountId,email,encoded,salt,new Date().toISOString(),...params);
  const consume=initial?db().prepare('INSERT OR IGNORE INTO catalog_metadata (key,value) VALUES (?,?)').bind(setupKey,new Date().toISOString()):db().prepare('DELETE FROM admin_invitations WHERE token_hash=? AND email=?').bind(hash,email);
  const result=await db().batch([write,consume,db().prepare('DELETE FROM admin_sessions WHERE account_id IN (SELECT id FROM admin_accounts WHERE email=? AND password_hash=?)').bind(email,encoded)]);
  if(!result[0].meta.changes)throw new ApiError(400,'Este link já foi utilizado. Solicite outro ao responsável.');
  const account=await db().prepare('SELECT id FROM admin_accounts WHERE email=?').bind(email).first<{id:string}>();
  await audit(account!.id,'password-activated',null);
  const response=json({ok:true});response.headers.set('Set-Cookie',sessionCookie(await issueSession(account!.id),request));return response;
})}
