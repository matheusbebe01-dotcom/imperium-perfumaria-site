// WhatsApp da loja em formato internacional; confirme alterações com o proprietário.
const STORE = { whatsapp: '556292063634' };
const perfumes = [
  {
    "id": 101,
    "name": "Fakhar — dourado",
    "brand": "Clive Dorris (inscrição na tampa)",
    "volume": "50 ml",
    "family": "A confirmar",
    "notes": "Composição desta versão ainda não confirmada.",
    "intensity": "A confirmar",
    "sweet": "A confirmar",
    "occasion": "Consulte a loja para experimentar e escolher a ocasião.",
    "desc": "Frasco dourado com caixa Fakhar Lattafa. A tampa traz Clive Dorris; fabricante e versão precisam de confirmação.",
    "verification": "Nome e volume lidos na embalagem. Não atribuímos as notas do Fakhar Gold de outra marca.",
    "color": "#6a5630",
    "price": null,
    "tag": "CONHEÇA A VERSÃO",
    "images": [
      {
        "src": "assets/perfumes/cliente-03.jpg",
        "caption": "Foto do cliente · produto e embalagem."
      },
      {
        "src": "assets/perfumes/cliente-01.jpg",
        "caption": "Foto do cliente · outra composição com o produto."
      }
    ],
    "thumbnail": "assets/perfumes/thumb-101.jpg"
  },
  {
    "id": 102,
    "name": "Fakhar — preto e prata",
    "brand": "Marca a confirmar",
    "volume": "50 ml",
    "family": "A confirmar",
    "notes": "Composição desta versão ainda não confirmada.",
    "intensity": "A confirmar",
    "sweet": "A confirmar",
    "occasion": "Consulte a loja para experimentar e escolher a ocasião.",
    "desc": "Frasco preto com detalhes prateados e caixa Fakhar Lattafa. Identificação pelo rótulo da foto.",
    "verification": "Confirmar fabricante com o fornecedor antes de associar a uma versão de catálogo.",
    "color": "#6a5630",
    "price": null,
    "tag": "CONHEÇA A VERSÃO",
    "images": [
      {
        "src": "assets/perfumes/cliente-08.jpg",
        "caption": "Foto do cliente · produto e embalagem."
      },
      {
        "src": "assets/perfumes/cliente-01.jpg",
        "caption": "Foto do cliente · outra composição com o produto."
      }
    ],
    "thumbnail": "assets/perfumes/thumb-102.jpg"
  },
  {
    "id": 103,
    "name": "Now Intense",
    "brand": "Rave",
    "volume": "Volume a confirmar",
    "family": "Fresco",
    "notes": "Pepino · Melancia · Tangerina · Sálvia · Manjericão · Sândalo · Cedro · Couro",
    "intensity": "Moderada",
    "sweet": "Moderada",
    "occasion": "Passeios e uso diurno, especialmente em clima ameno.",
    "desc": "Frescor aquático e verde, com frutas e um fundo amadeirado.",
    "verification": "Perfil pesquisado para Rave Now Intense. Volume da unidade enviada não legível na foto.",
    "source": "https://muscorient.com/gb/lattafa/876-now-intense-rave-lattafa.html",
    "color": "#6a5630",
    "price": null,
    "tag": "RAVE",
    "images": [
      {
        "src": "assets/perfumes/cliente-04.jpg",
        "caption": "Foto do cliente · produto e embalagem."
      },
      {
        "src": "assets/perfumes/cliente-02.jpg",
        "caption": "Foto do cliente · outra composição com o produto."
      },
      {
        "src": "assets/perfumes/now-intense-web.png",
        "credit": "Royals Perfume",
        "url": "https://royalsperfume.de/ru/products/rave-now-intense-perfumed-water-for-men-100ml",
        "caption": "Foto de referência da internet · apresentação de 100 ml; confirme o volume disponível."
      }
    ],
    "thumbnail": "assets/perfumes/thumb-103.jpg"
  },
  {
    "id": 104,
    "name": "Now — preto",
    "brand": "Rave",
    "volume": "Volume a confirmar",
    "family": "Amadeirado",
    "notes": "Abacaxi · Groselha-preta · Bergamota · Maçã · Bétula · Patchouli · Almíscar",
    "intensity": "Intensa",
    "sweet": "Moderada",
    "occasion": "Passeios, encontros e uso diário com presença.",
    "desc": "Frutado com destaque para o abacaxi, evoluindo para madeiras e almíscar.",
    "verification": "Perfil da página oficial Rave Now. Volume da unidade enviada ainda a confirmar.",
    "source": "https://lattafa.com/product/rave-now/",
    "color": "#6a5630",
    "price": null,
    "tag": "RAVE",
    "images": [
      {
        "src": "assets/perfumes/cliente-11.jpg",
        "caption": "Foto do cliente · produto e embalagem."
      },
      {
        "src": "assets/perfumes/cliente-02.jpg",
        "caption": "Foto do cliente · outra composição com o produto."
      }
    ],
    "thumbnail": "assets/perfumes/thumb-104.jpg"
  },
  {
    "id": 105,
    "name": "Khamraha",
    "brand": "Mystical",
    "volume": "Volume a confirmar",
    "family": "Doce",
    "notes": "Canela · Acordes pralinados · Baunilha · Âmbar · Almíscar",
    "intensity": "Intensa",
    "sweet": "Alta",
    "occasion": "Encontros e noites mais frescas.",
    "desc": "Perfil gourmand: doce, quente e envolvente, com especiarias e baunilha.",
    "verification": "Perfil publicado por revendedor para Khamraha Mystical. Não equivale a uma confirmação da fórmula do fabricante.",
    "source": "https://orientalbeautyf.com/brand/27-mystical",
    "color": "#6a5630",
    "price": null,
    "tag": "MYSTICAL",
    "images": [
      {
        "src": "assets/perfumes/cliente-07.jpg",
        "caption": "Foto do cliente · produto e embalagem."
      },
      {
        "src": "assets/perfumes/cliente-05.jpg",
        "caption": "Foto do cliente · outra composição com o produto."
      },
      {
        "src": "assets/perfumes/cliente-09.jpg",
        "caption": "Foto do cliente · outra composição com o produto."
      }
    ],
    "thumbnail": "assets/perfumes/thumb-105.jpg"
  },
  {
    "id": 106,
    "name": "Khamraha Qahwaa",
    "brand": "Mystical",
    "volume": "50 ml",
    "family": "A confirmar",
    "notes": "Pirâmide olfativa desta apresentação ainda a confirmar.",
    "intensity": "A confirmar",
    "sweet": "A confirmar",
    "occasion": "Consulte a loja para experimentar esta versão.",
    "desc": "Versão Qahwaa da linha Khamraha Mystical, identificada no frasco e na caixa.",
    "verification": "Nome e volume legíveis. As notas de Khamrah Qahwa Lattafa não foram transferidas para este produto.",
    "color": "#6a5630",
    "price": null,
    "tag": "CONHEÇA A VERSÃO",
    "images": [
      {
        "src": "assets/perfumes/cliente-10.jpg",
        "caption": "Foto do cliente · produto e embalagem."
      },
      {
        "src": "assets/perfumes/cliente-05.jpg",
        "caption": "Foto do cliente · outra composição com o produto."
      },
      {
        "src": "assets/perfumes/cliente-09.jpg",
        "caption": "Foto do cliente · outra composição com o produto."
      },
      {
        "src": "assets/perfumes/khamraha-qahwaa-web.jpg",
        "credit": "Tienda La Fe",
        "url": "https://www.tiendalafe.com/products/khamrah-qahwa-mystical-edp-50ml-h-aroma-similar-lattafa-khamrah-qahwa",
        "caption": "Foto adicional da internet · Khamraha Qahwaa Mystical 50 ml."
      }
    ],
    "thumbnail": "assets/perfumes/thumb-106.jpg"
  },
  {
    "id": 107,
    "name": "Phantasm Silver",
    "brand": "Linha Phantasm",
    "volume": "50 ml",
    "family": "A confirmar",
    "notes": "Composição desta versão ainda não confirmada.",
    "intensity": "A confirmar",
    "sweet": "A confirmar",
    "occasion": "Consulte a loja para experimentar e escolher a ocasião.",
    "desc": "Eau de Parfum em frasco robô prateado. Nome comercial Silver conferido em catálogo de revendedor.",
    "verification": "Não é o Phantom de Rabanne. Aroma e fabricante desta versão precisam de confirmação.",
    "source": "https://www.farmaciaamorpy.com/item/onlyou-perfume-colletion-50ml-refb2341-phantasm-silver-051389",
    "color": "#6a5630",
    "price": null,
    "tag": "CONHEÇA A VERSÃO",
    "images": [
      {
        "src": "assets/perfumes/cliente-15.jpg",
        "caption": "Foto do cliente · produto e embalagem."
      },
      {
        "src": "assets/perfumes/cliente-16.jpg",
        "caption": "Foto do cliente · outra composição com o produto."
      },
      {
        "src": "assets/perfumes/phantasm-silver-web.png",
        "credit": "Farmácia Amor",
        "url": "https://www.farmaciaamorpy.com/item/onlyou-perfume-colletion-50ml-refb2341-phantasm-silver-051389",
        "caption": "Foto adicional da internet · Phantasm Silver 50 ml."
      }
    ],
    "thumbnail": "assets/perfumes/thumb-107.jpg"
  },
  {
    "id": 108,
    "name": "Phantasm — dourado",
    "brand": "Linha Phantasm",
    "volume": "50 ml",
    "family": "A confirmar",
    "notes": "Composição desta versão ainda não confirmada.",
    "intensity": "A confirmar",
    "sweet": "A confirmar",
    "occasion": "Consulte a loja para experimentar e escolher a ocasião.",
    "desc": "Eau de Parfum em frasco robô dourado, com embalagem individual.",
    "verification": "Dourado descreve a cor do frasco. Não confirma composição ou nome de uma edição.",
    "color": "#6a5630",
    "price": null,
    "tag": "CONHEÇA A VERSÃO",
    "images": [
      {
        "src": "assets/perfumes/cliente-12.jpg",
        "caption": "Foto do cliente · produto e embalagem."
      },
      {
        "src": "assets/perfumes/cliente-16.jpg",
        "caption": "Foto do cliente · outra composição com o produto."
      }
    ],
    "thumbnail": "assets/perfumes/thumb-108.jpg"
  },
  {
    "id": 109,
    "name": "Phantasm — bronze",
    "brand": "Linha Phantasm",
    "volume": "50 ml",
    "family": "A confirmar",
    "notes": "Composição desta versão ainda não confirmada.",
    "intensity": "A confirmar",
    "sweet": "A confirmar",
    "occasion": "Consulte a loja para experimentar e escolher a ocasião.",
    "desc": "Eau de Parfum em frasco robô bronze, fotografado com sua caixa.",
    "verification": "Bronze descreve a cor do frasco. Não confirma composição ou nome de uma edição.",
    "color": "#6a5630",
    "price": null,
    "tag": "CONHEÇA A VERSÃO",
    "images": [
      {
        "src": "assets/perfumes/cliente-13.jpg",
        "caption": "Foto do cliente · produto e embalagem."
      },
      {
        "src": "assets/perfumes/cliente-06.jpg",
        "caption": "Foto do cliente · outra composição com o produto."
      },
      {
        "src": "assets/perfumes/cliente-16.jpg",
        "caption": "Foto do cliente · outra composição com o produto."
      }
    ],
    "thumbnail": "assets/perfumes/thumb-109.jpg"
  },
  {
    "id": 110,
    "name": "Asad Zanzibar",
    "brand": "Lattafa (conforme rótulo)",
    "volume": "30 ml",
    "family": "Oriental",
    "notes": "Lavanda · Pimenta-preta · Água de coco salgada · Íris · Baunilha · Incenso",
    "intensity": "Moderada",
    "sweet": "Moderada",
    "occasion": "Passeios e encontros em clima ameno.",
    "desc": "Perfil cremoso e tropical, com coco salgado, especiarias e baunilha.",
    "verification": "Perfil da página oficial Asad Zanzibar. A foto identifica a apresentação de 30 ml; procedência deve ser confirmada com o fornecedor.",
    "source": "https://lattafa.com/product/asad-zanzibar/",
    "color": "#6a5630",
    "price": null,
    "tag": "LATTAFA (CONFORME RÓTULO)",
    "images": [
      {
        "src": "assets/perfumes/cliente-17.jpg",
        "caption": "Foto do cliente · produto e embalagem."
      },
      {
        "src": "assets/perfumes/cliente-14.jpg",
        "caption": "Foto do cliente · outra composição com o produto."
      }
    ],
    "thumbnail": "assets/perfumes/thumb-110.jpg"
  },
  {
    "id": 111,
    "name": "Asad — frasco avermelhado",
    "brand": "Lattafa (conforme rótulo)",
    "volume": "Volume a confirmar",
    "family": "A confirmar",
    "notes": "Composição desta versão ainda não confirmada.",
    "intensity": "A confirmar",
    "sweet": "A confirmar",
    "occasion": "Consulte a loja para experimentar e escolher a ocasião.",
    "desc": "A embalagem mostra Asad, sem subtítulo legível. A cor sozinha não permite confirmar a edição.",
    "verification": "Não classificamos como Bourbon nem aplicamos a fórmula do Asad preto. Solicitar foto do verso e da base para confirmar a versão.",
    "color": "#6a5630",
    "price": null,
    "tag": "CONHEÇA A VERSÃO",
    "images": [
      {
        "src": "assets/perfumes/cliente-18.jpg",
        "caption": "Foto do cliente · produto e embalagem."
      },
      {
        "src": "assets/perfumes/cliente-14.jpg",
        "caption": "Foto do cliente · outra composição com o produto."
      }
    ],
    "thumbnail": "assets/perfumes/thumb-111.jpg"
  },
  {
    "id": 112,
    "name": "Asada",
    "brand": "Mystical",
    "volume": "30 ml",
    "family": "Oriental",
    "notes": "Acordes especiados · Madeiras · Baunilha · Âmbar",
    "intensity": "Intensa",
    "sweet": "Moderada",
    "occasion": "Noites, encontros e eventos em dias mais frios.",
    "desc": "Perfil quente e especiado, com madeiras e um fundo abaunilhado.",
    "verification": "Nome e volume lidos na caixa; perfil descrito por revendedores de Asada Mystical 30 ml.",
    "source": "https://www.eclat.sn/produit/asada-mystical-parfum-homme-30ml/",
    "color": "#6a5630",
    "price": null,
    "tag": "MYSTICAL",
    "images": [
      {
        "src": "assets/perfumes/cliente-19.jpg",
        "caption": "Foto do cliente · produto e embalagem."
      },
      {
        "src": "assets/perfumes/cliente-14.jpg",
        "caption": "Foto do cliente · outra composição com o produto."
      }
    ],
    "thumbnail": "assets/perfumes/thumb-112.jpg"
  }
];
const money=n=>n==null?'Sob consulta':n.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const $=s=>document.querySelector(s);
const modal=$('#modal'), body=$('#modalBody');
let cart=[],customer=null,toastTimer;
try{cart=JSON.parse(sessionStorage.getItem('mn-cart')||'[]').filter(x=>perfumes.some(p=>p.id===x.id)&&Number.isInteger(x.qty)&&x.qty>0&&x.qty<=20)}catch{}
try{const saved=JSON.parse(localStorage.getItem('imperium-customer')||sessionStorage.getItem('imperium-customer')||'null');if(saved&&typeof saved.name==='string'){const parts=saved.name.trim().split(/\s+/);const firstName=typeof saved.firstName==='string'?saved.firstName.trim():parts.shift()||'';const lastName=typeof saved.lastName==='string'?saved.lastName.trim():parts.join(' ');if(firstName.length>=2&&lastName.length>=2)customer={firstName,lastName,name:firstName+' '+lastName}}}catch{}
function bottle(p,suffix='card'){return '<img class="perfume-photo" src="'+p.images[0].src+'" alt="'+p.name+' — '+p.brand+'" '+(suffix==='hero'?'fetchpriority="high"':'loading="lazy"')+' decoding="async" width="960" height="1280">'}
function gallery(p){return '<div class="gallery"><div class="product-art">'+bottle(p,'detail')+'</div><div class="gallery-thumbs" role="group" aria-label="Fotos de '+p.name+'">'+p.images.map((im,i)=>'<button class="'+(!i?'active':'')+'" data-photo="'+i+'" data-product="'+p.id+'" aria-label="Ver foto '+(i+1)+' de '+p.name+'" aria-pressed="'+(!i)+'"><img src="'+im.src+'" alt="" loading="lazy" width="72" height="96"></button>').join('')+'</div><p class="photo-caption">'+p.images[0].caption+'</p><div class="photo-credit"></div></div>'}

// Two equal groups make a continuous CSS loop; only the first is in keyboard navigation.
function renderPerfumeStrip(){
  const group=duplicate=>`<div class="strip-group"${duplicate?' aria-hidden="true"':''}>${perfumes.map((p,i)=>`<button type="button" class="strip-item" data-detail="${p.id}" aria-label="Ver ${p.name}"${duplicate?' tabindex="-1"':''}><span class="strip-photo"><img src="${p.thumbnail}" alt="" width="240" height="240" decoding="async" ${!duplicate&&i<6?'loading="eager"':'loading="lazy"'}></span><span class="strip-name">${p.name}</span></button>`).join('')}</div>`;
  $('#perfumeTrack').innerHTML=group(false)+group(true);
}
renderPerfumeStrip();
$('#stripPause').addEventListener('click',()=>{
  const strip=$('.perfume-strip'),button=$('#stripPause');
  const paused=strip.dataset.paused!=='true';
  strip.dataset.paused=String(paused);
  button.setAttribute('aria-pressed',String(paused));
  button.textContent=paused?'Continuar faixa':'Pausar faixa';
});
function renderProducts(filter='Todos'){$('#products').innerHTML=perfumes.filter(p=>filter==='Todos'||p.family===filter).map(p=>`<article class="card"><button class="product-art" style="--shade:${p.color}" data-detail="${p.id}" aria-label="Ver ${p.name}"><span class="tag">${p.tag}</span>${bottle(p)}<span class="arrow">↗</span></button><div class="product-summary"><div class="meta">${p.family.toUpperCase()} · ${p.volume}</div><h3><button data-detail="${p.id}">${p.name}</button></h3><p>${p.desc}</p><button class="more-link" data-detail="${p.id}" aria-label="Mais sobre ${p.name}">Mais ↗</button><div class="price-row"><strong>${money(p.price)}</strong><button data-add="${p.id}">Adicionar à sacola +</button></div></div></article>`).join('')}
function show(html){body.innerHTML=html;if(!modal.open)modal.showModal()}
function toast(message){$('#toast').textContent=message;$('#toast').style.display='block';clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').style.display='none',3500)}
function saveCart(){try{sessionStorage.setItem('mn-cart',JSON.stringify(cart))}catch{}$('#count').textContent=cart.reduce((n,x)=>n+x.qty,0)}
function add(id){let item=cart.find(x=>x.id===id);if(item&&item.qty>=20)return toast('Limite de 20 unidades por perfume.');if(item)item.qty++;else cart.push({id,qty:1});saveCart();toast('Perfume adicionado à sacola.')}
function detail(id){const p=perfumes.find(x=>x.id===id);if(!p)return;show(`<div class="detail">${gallery(p)}<div><p class="eyebrow">${p.brand} · EAU DE PARFUM</p><h2>${p.name}</h2><p>${p.desc}</p><div class="notes">Aroma: ${p.family}<br>Notas / acordes: ${p.notes}<br>Intensidade sugerida: ${p.intensity}<br>Doçura: ${p.sweet}<br>Sugestão de ocasião: ${p.occasion}<br>Volume: ${p.volume}</div><h3>Sob consulta</h3><button class="primary" data-add="${p.id}">Adicionar à sacola +</button><p class="notice">${p.verification}</p>${p.source?'<a class="source-link" href="'+p.source+'" target="_blank" rel="noopener noreferrer">Consultar referência da descrição ↗</a>':''}</div></div><p class="notice">Ocasiões são sugestões editoriais. Intensidade e percepção do aroma variam com a pele e a aplicação. Consulte preço e disponibilidade com a loja.</p>`)}
function cartMessage(reason='prices'){
  if(!cart.length||!customer)return '';
  const items=cart.map(x=>{const p=perfumes.find(p=>p.id===x.id);return x.qty+'x '+p.name+(!/confirmar/i.test(p.volume)?' — '+p.volume:'')});
  return 'Olá, Barbearia Imperium! Meu nome é '+customer.name+'.\n\nEscolhi estes perfumes no site:\n'+items.map(item=>'• '+item).join('\n')+'\n\n'+(reason==='products'?'Gostaria de conversar sobre esses produtos, conhecer os aromas e confirmar os valores e a disponibilidade.':'Gostaria de combinar os preços e confirmar a disponibilidade desses perfumes.')+'\n\nAguardo seu atendimento. Obrigado!';
}
function whatsappUrl(message){return 'https://wa.me/'+STORE.whatsapp+'?text='+encodeURIComponent(message)}
function openWhatsApp(message){window.open(whatsappUrl(message),'_blank','noopener,noreferrer')}
function quote(reason='prices'){
  if(!cart.length){toast('Adicione um perfume à sacola para conversar sobre sua seleção.');showCart();return}
  if(!customer){account(reason);return}
  openWhatsApp(cartMessage(reason));
}
function showCart(){
  const rows=cart.map(x=>{const p=perfumes.find(p=>p.id===x.id);return '<div class="cart-row"><div><h3>'+p.name+'</h3><p>'+money(p.price)+' · '+p.volume+'</p></div><div class="qty"><button data-qty="'+p.id+'" data-delta="-1" aria-label="Diminuir '+p.name+'">−</button><span>'+x.qty+'</span><button data-qty="'+p.id+'" data-delta="1" aria-label="Aumentar '+p.name+'">+</button></div></div>'}).join('');
  show('<p class="eyebrow">SEUS ESCOLHIDOS</p><h2>Minha sacola</h2>'+(cart.length?rows+'<section class="cart-conversation"><h3>Vamos conversar?</h3><p>Combine os preços ou tire suas dúvidas diretamente com a barbearia.</p><div class="quote-actions"><button class="primary" data-quote="prices">Combinar preços pelo WhatsApp ↗</button><button class="quote-secondary" data-quote="products">Conversar sobre os produtos ↗</button></div><p class="quote-note">A mensagem incluirá seu nome, os perfumes e as quantidades da sacola. Você poderá revisar e enviar no WhatsApp.</p><details class="quote-preview"><summary>Ver mensagem de negociação</summary><pre id="quotePreview"></pre></details></section>':'<p class="empty">Sua sacola está esperando sua próxima assinatura.</p><button class="primary" id="browse">Explorar coleção ↗</button>'));
  if(cart.length)$('#quotePreview').textContent=customer?cartMessage('prices'):'Informe seu nome e sobrenome ao continuar para personalizar a apresentação. Os perfumes e as quantidades serão incluídos automaticamente.';
}
function account(next=''){
  const pendingQuote=next==='prices'||next==='products';
  show('<div class="form-wrap customer-entry"><p class="eyebrow">BARBEARIA IMPERIUM · PERFUMARIA</p><h2>'+ (customer?'Seu atendimento.':'Seja bem-vindo.')+'</h2><p>Como podemos chamar você? Seu nome e sobrenome acompanharão os perfumes escolhidos quando conversar com a loja.</p><form id="customerForm"><label for="customerName">Nome<input id="customerName" name="firstName" type="text" required minlength="2" maxlength="50" autocomplete="given-name" placeholder="Digite seu nome"></label><label for="customerSurname">Sobrenome<input id="customerSurname" name="lastName" type="text" required minlength="2" maxlength="70" autocomplete="family-name" placeholder="Digite seu sobrenome"></label><label class="check"><input id="rememberCustomer" type="checkbox" checked> Lembrar meu nome e sobrenome neste dispositivo.</label><p class="entry-note">Esta entrada identifica seu atendimento, sem senha. Seu nome e sobrenome ficam salvos somente neste navegador; não há autenticação de conta.</p><button class="primary" type="submit">'+(pendingQuote?'Continuar para o WhatsApp ↗':'Entrar e ver perfumes ↗')+'</button></form><button class="entry-browse" id="browseGuest" type="button">Conhecer os perfumes primeiro</button>'+(customer?'<button class="entry-browse" id="logout" type="button">Remover meu nome deste dispositivo</button>':'')+'</div>');
  if(customer){$('#customerName').value=customer.firstName;$('#customerSurname').value=customer.lastName}
  $('#customerForm').onsubmit=e=>{
    e.preventDefault();
    const firstName=$('#customerName').value.trim().replace(/\s+/g,' ').slice(0,50);
    const lastName=$('#customerSurname').value.trim().replace(/\s+/g,' ').slice(0,70);
    if(firstName.length<2){$('#customerName').setCustomValidity('Informe seu nome com pelo menos dois caracteres.');$('#customerName').reportValidity();return}
    if(lastName.length<2){$('#customerSurname').setCustomValidity('Informe seu sobrenome com pelo menos dois caracteres.');$('#customerSurname').reportValidity();return}
    customer={firstName,lastName,name:firstName+' '+lastName};
    try{localStorage.removeItem('imperium-customer');sessionStorage.removeItem('imperium-customer');sessionStorage.removeItem('mn-demo-user');const storage=$('#rememberCustomer').checked?localStorage:sessionStorage;storage.setItem('imperium-customer',JSON.stringify(customer))}catch{}
    $('#account').textContent='Meu perfil';
    modal.close();
    if(pendingQuote){showCart();quote(next)}else{toast('Bem-vindo! Escolha seus perfumes.');location.hash='colecao'}
  };
  $('#customerName').addEventListener('input',()=>$('#customerName').setCustomValidity(''));
  $('#customerSurname').addEventListener('input',()=>$('#customerSurname').setCustomValidity(''));
  $('#customerName').focus();
}
function clearCustomer(){customer=null;try{localStorage.removeItem('imperium-customer');sessionStorage.removeItem('imperium-customer');sessionStorage.removeItem('mn-demo-user')}catch{}$('#account').textContent='Entrar';account()}
function contact(){openWhatsApp(customer?'Olá, Barbearia Imperium! Meu nome é '+customer.name+'. Gostaria de saber mais sobre os perfumes.':'Olá, Barbearia Imperium! Gostaria de saber mais sobre os perfumes.')}
document.addEventListener('click',e=>{const el=e.target.closest('button');if(!el)return;if(el.hasAttribute('data-photo')){const p=perfumes.find(x=>x.id===Number(el.dataset.product));const im=p.images[Number(el.dataset.photo)];const g=el.closest('.gallery');g.querySelector('.perfume-photo').src=im.src;g.querySelector('.photo-caption').textContent=im.caption;g.querySelectorAll('[data-photo]').forEach(b=>{b.classList.toggle('active',b===el);b.setAttribute('aria-pressed',String(b===el))});const c=g.querySelector('.photo-credit');c.replaceChildren();if(im.url){const a=document.createElement('a');a.href=im.url;a.target='_blank';a.rel='noopener noreferrer';a.textContent='Fonte: '+im.credit+' ↗';c.append(a)}return;}if(el.hasAttribute('data-detail'))detail(Number(el.dataset.detail));if(el.hasAttribute('data-add'))add(Number(el.dataset.add));if(el.hasAttribute('data-contact'))contact();if(el.hasAttribute('data-filter')){document.querySelectorAll('[data-filter]').forEach(x=>x.classList.toggle('active',x===el));renderProducts(el.dataset.filter)}if(el.hasAttribute('data-qty')){const item=cart.find(x=>x.id===Number(el.dataset.qty));item.qty=Math.min(20,item.qty+Number(el.dataset.delta));cart=cart.filter(x=>x.qty>0);saveCart();showCart()}if(el.id==='account'||el.id==='join')account();if(el.id==='bag')showCart();if(el.id==='browse'){modal.close();location.hash='colecao'}if(el.id==='logout')clearCustomer();if(el.id==='browseGuest'){modal.close();location.hash='colecao'}if(el.hasAttribute('data-quote'))quote(el.dataset.quote)});
$('.close').onclick=()=>modal.close();modal.addEventListener('click',e=>{if(e.target===modal){const r=modal.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)modal.close()}});renderProducts();saveCart();

const assistantPanel=$('#assistantPanel'),messages=$('#assistantMessages');
$('#assistantLaunch').onclick=()=>{assistantPanel.hidden=!assistantPanel.hidden;if(!assistantPanel.hidden)$('#assistantInput').focus()};
$('#assistantClose').onclick=()=>assistantPanel.hidden=true;
function recommend(request){const msg=document.createElement('div');msg.className='assistant-message user';msg.textContent=request;messages.append(msg);const text=request.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');const avoidSweet=/nao.*doc|sem.*doc|pouco.*doc/.test(text);let criteria=[];if(/doc|baunilha|adocic/.test(text))criteria.push(p=>avoidSweet?p.sweet==='Baixa':p.family==='Doce');if(/leve|fresc|calor|verao|trabalh|dia a dia|citr/.test(text))criteria.push(p=>p.family==='Fresco');if(/forte|intens|marcante/.test(text))criteria.push(p=>p.intensity==='Intensa');if(/noite|noturn|sair|festa|encontro/.test(text))criteria.push(p=>/noite|encontro|evento/i.test(p.occasion)&&p.family!=='A confirmar');if(/madeir|cedro|vetiver/.test(text))criteria.push(p=>p.family==='Amadeirado');if(/orient|especiar|oud/.test(text))criteria.push(p=>p.family==='Oriental');if(/barat|econom|preco|acessivel/.test(text))criteria.push(p=>p.price!=null&&p.price<210);const budget=text.match(/(?:ate|menos de|maximo(?: de)?)\s*(?:r\$\s*)?(\d+(?:[.,]\d{1,2})?)/);if(budget)criteria.push(p=>p.price!=null&&p.price<=Number(budget[1].replace(',','.')));const response=document.createElement('div');response.className='assistant-message';if(!criteria.length){response.textContent=/ola|oi|bom dia|ajuda/.test(text)?'Olá! Você prefere um perfume doce, fresco, amadeirado ou intenso? É para o dia ou para a noite?':'Posso ajudar com a escolha de perfumes. Conte se prefere doce, fresco, amadeirado, intenso ou diga a ocasião e o orçamento.'}else{let chosen=perfumes.filter(p=>criteria.every(fn=>fn(p)));if(!chosen.length){response.textContent='Não encontrei um perfume que combine com todas essas preferências. Quer tentar uma fragrância mais leve, mudar o orçamento ou conversar com a loja?';const contactBtn=document.createElement('button');contactBtn.className='assistant-result';contactBtn.textContent='Conversar com a loja ↗';contactBtn.onclick=contact;response.append(contactBtn)}else{response.textContent='Estas opções combinam com o que você pediu:';chosen.slice(0,3).forEach(p=>{const btn=document.createElement('button');btn.className='assistant-result';btn.dataset.detail=p.id;btn.textContent=p.name+' · '+money(p.price)+' — Mais ↗';const small=document.createElement('small');small.textContent=p.desc;btn.append(small);response.append(btn)});const note=document.createElement('small');note.textContent='Sugestões baseadas nos perfis pesquisados. Versões com aroma a confirmar não recebem recomendações olfativas.';response.append(note)}}messages.append(response);while(messages.children.length>25)messages.firstElementChild.remove();messages.scrollTop=messages.scrollHeight}
$('#assistantForm').onsubmit=e=>{e.preventDefault();const input=$('#assistantInput');const value=input.value.trim();if(value){recommend(value);input.value=''}};
document.querySelectorAll('[data-suggest]').forEach(btn=>btn.onclick=()=>recommend(btn.dataset.suggest));

// Use vector icons instead of platform-dependent arrow emoji, including dynamic content.
function replaceArrowGlyphs(root){
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode(node){return node.parentElement&&!node.parentElement.closest('svg,script,style,textarea')&&/[\u2197\u2192]\uFE0F?/.test(node.nodeValue)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});
  const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
  for(const node of nodes){const fragment=document.createDocumentFragment();const parts=node.nodeValue.split(/([\u2197\u2192]\uFE0F?)/);for(const part of parts){if(/^[\u2197\u2192]/.test(part)){const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('class','icon-arrow');svg.setAttribute('aria-hidden','true');svg.setAttribute('focusable','false');const path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('d',part[0]==='\u2192'?'M4 12h16M13 5l7 7-7 7':'M5 19 19 5M5 5h14v14');svg.append(path);fragment.append(svg)}else if(part)fragment.append(document.createTextNode(part))}node.replaceWith(fragment)}
}
replaceArrowGlyphs(document.body);
new MutationObserver(records=>{for(const record of records){for(const node of record.addedNodes){if(node.nodeType===Node.ELEMENT_NODE&&!node.closest('svg'))replaceArrowGlyphs(node);else if(node.nodeType===Node.TEXT_NODE&&/[\u2197\u2192]/.test(node.nodeValue)&&node.parentElement)replaceArrowGlyphs(node.parentElement)}}}).observe(document.body,{childList:true,subtree:true});

// New visitors see the name entry screen before browsing the collection.
$('#account').textContent=customer?'Meu perfil':'Entrar';
if(!customer)account();
