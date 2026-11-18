import {env} from 'cloudflare:workers';
import {headers} from 'next/headers';
import {randomToken,digest,equal,passwordHash} from './password-crypto';

const COOKIE='imperium_admin';
const TTL=8*60*60;
export const ownerEmails=()=> [env.OWNER_EMAILS||'',env.ADMIN_OWNER_EMAIL||''].join(',').split(',').map(s=>s.trim().toLowerCase()).filter(Boolean);
function database(){if(!env.DB)throw Error('Database unavailable');return env.DB}
export function pepper(){if(!env.ADMIN_PASSWORD_PEPPER)throw Error('Password access not configured');return env.ADMIN_PASSWORD_PEPPER}
export function cookieToken(cookie:string|null){return cookie?.split(';').map(s=>s.trim()).find(s=>s.startsWith(COOKIE+'='))?.slice(COOKIE.length+1)||''}
export function sessionCookie(token:string,request:Request,clear=false){return `${COOKIE}=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${clear?0:TTL}${new URL(request.url).protocol==='https:'?'; Secure':''}`}
export async function currentAdmin(){
  const token=cookieToken((await headers()).get('cookie'));
  if(!/^[a-f0-9]{64}$/.test(token))return null;
  const row=await database().prepare('SELECT a.email,a.id FROM admin_sessions s JOIN admin_accounts a ON a.id=s.account_id WHERE s.token_hash=? AND s.expires_at>? AND a.active=1').bind(await digest(token),Date.now()).first<{email:string;id:string}>();
  return row?{userId:row.id,email:row.email,displayName:row.email,isOwner:ownerEmails().includes(row.email)}:null;
}
export async function issueSession(accountId:string){
  const token=randomToken();
  await database().batch([
    database().prepare('DELETE FROM admin_sessions WHERE expires_at<=?').bind(Date.now()),
    database().prepare('INSERT INTO admin_sessions (token_hash,account_id,expires_at) VALUES (?,?,?)').bind(await digest(token),accountId,Date.now()+TTL*1000),
  ]);
  return token;
}
export async function throttle(request:Request,email:string){
  const window=Math.floor(Date.now()/900000);
  const ip=request.headers.get('cf-connecting-ip')||'local';
  const keys=await Promise.all(['ip:'+ip,'email:'+email].map(digest));
  for(let i=0;i<keys.length;i++){
    const result=await database().prepare('INSERT INTO admin_login_limits (key,window,attempts) VALUES (?,?,1) ON CONFLICT(key,window) DO UPDATE SET attempts=attempts+1 RETURNING attempts').bind(keys[i],window).first<{attempts:number}>();
    if((result?.attempts||0)>(i===0?40:12))return false;
  }
  await database().prepare('DELETE FROM admin_login_limits WHERE window<?').bind(window-1).run();
  return true;
}
export async function invite(email:string){
  const token=randomToken();
  await database().prepare('INSERT INTO admin_invitations (email,token_hash,expires_at) VALUES (?,?,?) ON CONFLICT(email) DO UPDATE SET token_hash=excluded.token_hash,expires_at=excluded.expires_at').bind(email,await digest(token),Date.now()+48*3600000).run();
  return '/admin#ativar='+token;
}
export {randomToken,digest,equal,passwordHash};
