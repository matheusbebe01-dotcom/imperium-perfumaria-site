const encoder = new TextEncoder();
export const randomToken = () => Array.from(crypto.getRandomValues(new Uint8Array(32)), n => n.toString(16).padStart(2,'0')).join('');
export async function digest(value:string){return Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',encoder.encode(value))),n=>n.toString(16).padStart(2,'0')).join('')}
export function equal(a:string,b:string){let difference=a.length^b.length;for(let i=0;i<Math.max(a.length,b.length);i++)difference|=(a.charCodeAt(i)||0)^(b.charCodeAt(i)||0);return difference===0}
// The separate server-side pepper protects stored hashes if only D1 is exposed.
// Workers WebCrypto supports at most 100,000 PBKDF2 iterations per derivation.
export async function passwordHash(password:string,salt:string,pepper:string){
  const secret=await crypto.subtle.importKey('raw',encoder.encode(pepper),{name:'HMAC',hash:'SHA-256'},false,['sign']);
  const prehash=await crypto.subtle.sign('HMAC',secret,encoder.encode(password));
  const key=await crypto.subtle.importKey('raw',prehash,'PBKDF2',false,['deriveBits']);
  const result=await crypto.subtle.deriveBits({name:'PBKDF2',salt:encoder.encode(salt),iterations:100000,hash:'SHA-256'},key,256);
  return Array.from(new Uint8Array(result),n=>n.toString(16).padStart(2,'0')).join('');
}
