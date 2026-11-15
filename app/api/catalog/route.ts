import {api,ensureSeed,db,json} from '../../../lib/catalog-service';
export const dynamic='force-dynamic';
export function GET(){return api(async()=>{
  await ensureSeed();
  const {results}=await db().prepare('SELECT id,published FROM catalog_products WHERE archived = 0 AND published IS NOT NULL ORDER BY id LIMIT 1000').all<{id:number;published:string}>();
  return json({products:results.map(row=>({...JSON.parse(row.published),id:row.id}))});
})}
