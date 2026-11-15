const fs=require('node:fs');
const path=require('node:path');
const root=__dirname;
const perfumes=JSON.parse(fs.readFileSync(path.join(root,'catalog.json'),'utf8'));
for(const file of ['app.js','style.css','imperium-theme.css','admin-panel.js','admin.css','assets/brand/imperium-logo-correta.jpg','assets/fonts/kings-regular.ttf','assets/fonts/kings-OFL.txt',...new Set(perfumes.flatMap(p=>[p.thumbnail,...p.images.map(im=>im.src)]))]){const dest=path.join(root,'public',file);fs.mkdirSync(path.dirname(dest),{recursive:true});fs.copyFileSync(path.join(root,file),dest)}
console.log('Arquivos públicos preparados. O catálogo é servido pelo banco de dados.');
