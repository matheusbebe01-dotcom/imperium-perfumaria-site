const fs=require('node:fs');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const path=require('node:path');
const root=__dirname;
;(async()=>{
const elements=new Map();
function el(){return {innerHTML:'',textContent:'',style:{},dataset:{},children:[],open:false,hidden:true,append(...items){this.children.push(...items)},showModal(){this.open=true},close(){this.open=false},addEventListener(){},setAttribute(){},focus(){},get firstElementChild(){return {remove(){}}}}}
const document={querySelector(s){if(!elements.has(s))elements.set(s,el());return elements.get(s)},querySelectorAll(){return []},createElement:el,createTreeWalker(){return {nextNode(){return false}}},addEventListener(){},body:el()};
const context=vm.createContext({document,NodeFilter:{SHOW_TEXT:4,FILTER_ACCEPT:1,FILTER_REJECT:2},MutationObserver:class{observe(){}},sessionStorage:{getItem(){return null},setItem(){},removeItem(){}},setTimeout(){},clearTimeout(){},fetch:async()=>({ok:true,json:async()=>({products:JSON.parse(fs.readFileSync(__dirname+'/catalog.json','utf8'))})}),window:{},location:{},FormData:class{}});
vm.runInContext(fs.readFileSync(path.join(root,'app.js'),'utf8'),context);
await vm.runInContext('catalogReady',context);
const catalog=JSON.parse(fs.readFileSync(path.join(root,'catalog.json'),'utf8'));
assert.equal(catalog.length,12);
assert.equal(new Set(catalog.map(p=>p.id)).size,12);
assert.equal((elements.get('#products').innerHTML.match(/<article /g)||[]).length,12);
const images=new Set(catalog.flatMap(p=>p.images.map(im=>im.src)));
assert.equal([...images].filter(s=>s.includes('cliente-')).length,19);
for(const src of images){assert.ok(fs.statSync(path.join(root,src)).size>1000,src);assert.ok(fs.existsSync(path.join(root,'public',src)),src)}
for(const p of catalog){vm.runInContext(`detail(${p.id})`,context);assert.ok(elements.get('#modalBody').innerHTML.includes(p.name));assert.ok(elements.get('#modalBody').innerHTML.includes('gallery-thumbs'));assert.ok(elements.get('#modalBody').innerHTML.includes(p.notes))}
vm.runInContext("renderProducts('A confirmar')",context);
assert.equal((elements.get('#products').innerHTML.match(/<article /g)||[]).length,catalog.filter(p=>p.family==='A confirmar').length);
vm.runInContext('add(101);showCart()',context);
assert.ok(elements.get('#modalBody').innerHTML.includes('Sob consulta'));
assert.ok(!elements.get('#modalBody').innerHTML.includes('R$'));
vm.runInContext("recommend('Quero um perfume para noite')",context);
const reply=elements.get('#assistantMessages').children.at(-1);
assert.ok(reply.children.some(c=>c.textContent?.includes('Khamraha')));
assert.ok(reply.children.every(c=>!c.textContent?.includes('Phantasm')));
for(const f of ['app.js','style.css']) assert.equal(fs.readFileSync(path.join(root,f),'utf8'),fs.readFileSync(path.join(root,'public',f),'utf8'));
console.log(`OK: ${catalog.length} produtos, 19 fotos do cliente, ${[...images].length-19} fotos externas. Detalhes, filtros, sacola sem preços inventados e recomendações verificados.`);

})().catch(error=>{console.error(error);process.exitCode=1});
