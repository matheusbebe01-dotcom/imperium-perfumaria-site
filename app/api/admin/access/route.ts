import {api,owner,db,json,body,audit,ApiError} from '../../../../lib/catalog-service';
import {invite,ownerEmails} from '../../../../lib/admin-auth';
export const dynamic='force-dynamic';
export function GET(){return api(async()=>{await owner();const {results}=await db().prepare('SELECT email,active,created_at FROM admin_accounts UNION SELECT email,1 AS active,NULL AS created_at FROM admin_invitations WHERE expires_at>? AND email NOT IN (SELECT email FROM admin_accounts) ORDER BY email').bind(Date.now()).all<{email:string;active:number;created_at:string|null}>();return json({members:results.filter(member=>!ownerEmails().includes(member.email))})})}
export function POST(request:Request){return api(async()=>{
  const user=await owner(request),input=await body(request);
  const email=typeof input.email==='string'?input.email.trim().toLowerCase():'';
  if(email.length>254||! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))throw new ApiError(400,'Informe um e-mail válido.');
  if(!['grant','revoke'].includes(input.action))throw new ApiError(400,'Ação inválida.');
  if(ownerEmails().includes(email))throw new ApiError(400,'Para trocar sua própria senha, use Alterar minha senha.');
  let activationPath:string|undefined;
  if(input.action==='grant')activationPath=await invite(email);
  else await db().batch([
    db().prepare('UPDATE admin_accounts SET active=0 WHERE email=?').bind(email),
    db().prepare('DELETE FROM admin_sessions WHERE account_id IN (SELECT id FROM admin_accounts WHERE email=?)').bind(email),
    db().prepare('DELETE FROM admin_invitations WHERE email=?').bind(email),
  ]);
  await audit(user.userId,'access-'+input.action,null);return json({ok:true,activationPath});
})}
