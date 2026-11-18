import {api,json,db,sameOrigin} from '../../../../../lib/catalog-service';
import {cookieToken,digest,sessionCookie} from '../../../../../lib/admin-auth';
export function POST(request:Request){return api(async()=>{sameOrigin(request);const token=cookieToken(request.headers.get('cookie'));if(token)await db().prepare('DELETE FROM admin_sessions WHERE token_hash=?').bind(await digest(token)).run();const response=json({ok:true});response.headers.set('Set-Cookie',sessionCookie('',request,true));return response})}
