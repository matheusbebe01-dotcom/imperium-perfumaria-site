import {api,body,json,db,ApiError,sameOrigin} from '../../../../../lib/catalog-service';
import {pepper,passwordHash,equal,throttle,issueSession,sessionCookie} from '../../../../../lib/admin-auth';
export const dynamic='force-dynamic';
export function POST(request:Request){return api(async()=>{
  sameOrigin(request);const input=await body(request);
  const email=typeof input.email==='string'?input.email.trim().toLowerCase():'';
  if(!email||email.length>254||typeof input.password!=='string'||input.password.length>128)throw new ApiError(400,'Informe seu e-mail e sua senha.');
  if(!await throttle(request,email))throw new ApiError(429,'Muitas tentativas. Aguarde 15 minutos antes de tentar novamente.');
  const account=await db().prepare('SELECT id,password_hash,salt,active FROM admin_accounts WHERE email=?').bind(email).first<{id:string;password_hash:string;salt:string;active:number}>();
  const candidate=await passwordHash(input.password,account?.salt||'00000000000000000000000000000000',pepper());
  if(!account||!account.active||!equal(candidate,account.password_hash))throw new ApiError(401,'E-mail ou senha incorretos.');
  const response=json({ok:true});response.headers.set('Set-Cookie',sessionCookie(await issueSession(account.id),request));return response;
})}
