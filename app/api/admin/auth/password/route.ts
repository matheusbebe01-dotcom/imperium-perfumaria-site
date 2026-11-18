import {api,admin,body,db,json,ApiError} from '../../../../../lib/catalog-service';
import {pepper,passwordHash,equal,randomToken,throttle,issueSession,sessionCookie} from '../../../../../lib/admin-auth';
export function POST(request:Request){return api(async()=>{
  const user=await admin(request),input=await body(request);
  if(typeof input.currentPassword!=='string'||input.currentPassword.length>128||typeof input.password!=='string'||input.password.length<12||input.password.length>128)throw new ApiError(400,'A nova senha deve ter de 12 a 128 caracteres.');
  if(!await throttle(request,user.email))throw new ApiError(429,'Muitas tentativas. Aguarde 15 minutos.');
  const account=await db().prepare('SELECT password_hash,salt FROM admin_accounts WHERE id=?').bind(user.userId).first<{password_hash:string;salt:string}>();
  if(!account||!equal(await passwordHash(input.currentPassword,account.salt,pepper()),account.password_hash))throw new ApiError(400,'Senha atual incorreta.');
  const salt=randomToken(),hash=await passwordHash(input.password,salt,pepper());
  await db().batch([db().prepare('UPDATE admin_accounts SET salt=?,password_hash=? WHERE id=?').bind(salt,hash,user.userId),db().prepare('DELETE FROM admin_sessions WHERE account_id=?').bind(user.userId)]);
  const response=json({ok:true});response.headers.set('Set-Cookie',sessionCookie(await issueSession(user.userId),request));return response;
})}
