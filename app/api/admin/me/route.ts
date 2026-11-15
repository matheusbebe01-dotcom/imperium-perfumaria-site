import {api,admin,json} from '../../../../lib/catalog-service';
export const dynamic='force-dynamic';
export function GET(){return api(async()=>{const u=await admin();return json({name:u.displayName,email:u.email,isOwner:u.isOwner})})}
