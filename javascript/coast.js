/* =========================================================
   NUSANTARA SHOP — script.js
   Data produk multi-kategori + layanan digital + cart
   ========================================================= */
'use strict';

/* ---------- KONFIG ---------- */
const STORE = {
  name: 'NUSANTARA SHOP',
  waNumber: '6282340608190'
};

/* ---------- KATEGORI ---------- */
const CATEGORIES = [
  { id: 'Elektronik', icon: '📱', label: 'Elektronik' },
  { id: 'Fashion',    icon: '👕', label: 'Fashion' },
  { id: 'Kecantikan', icon: '💄', label: 'Kecantikan' },
  { id: 'Rumah',      icon: '🏠', label: 'Rumah Tangga' },
  { id: 'Olahraga',   icon: '⚽', label: 'Olahraga' },
  { id: 'Makanan',    icon: '🍔', label: 'Makanan' },
  { id: 'Hobi',       icon: '🎮', label: 'Hobi' }
];

/* ---------- PRODUK ---------- */
const PRODUCTS = [
  { id:1,  name:'TWS Earbuds Pro X Bluetooth 5.3', category:'Elektronik', price:289000, oldPrice:399000, rating:4.8, sold:1240, glyph:'🎧', bg1:'#E7F0FC', bg2:'#2E86DE', badge:'TERLARIS', flash:true,
    image:'Logo_branding/TWS.jpg',
    short:'TWS earbuds dengan ANC, Bluetooth 5.3, baterai 30 jam.',
    desc:'TWS Earbuds Pro X hadir dengan teknologi Active Noise Cancelling yang meredam suara bising hingga 28dB. Bluetooth 5.3 untuk koneksi stabil dan latensi rendah, cocok untuk musik maupun gaming. Total baterai 30 jam dengan case charging.',
    specs:{'Tipe':'True Wireless','Bluetooth':'5.3','Baterai':'6 jam + 24 jam case','Fitur':'ANC, Touch Control, IPX5','Warna':'Putih, Hitam'},
    variants:{'Warna':['Putih','Hitam']} },

  { id:2,  name:'Smartwatch Fit S2 AMOLED Sport', category:'Elektronik', price:459000, oldPrice:599000, rating:4.7, sold:890, glyph:'⌚', bg1:'#FFF7E1', bg2:'#F7B731',
    image:'Logo_branding/SMARTWACH.jpg',
    short:'Smartwatch AMOLED dengan monitor detak jantung & SpO2.',
    desc:'Smartwatch Fit S2 hadir dengan layar AMOLED 1.43 inci yang tajam. Dilengkapi monitor detak jantung, SpO2, sleep tracking, dan 100+ mode olahraga. Tahan air IP68 dan baterai tahan 7 hari.',
    specs:{'Layar':'AMOLED 1.43"','Baterai':'7 hari pemakaian normal','Fitur':'HR, SpO2, Sleep, 100+ sport mode','Ketahanan':'IP68','Koneksi':'Bluetooth 5.0'},
    variants:{'Warna':['Hitam','Perak','Rose Gold']} },

  { id:3,  name:'Powerbank 20000mAh Fast Charging 22.5W', category:'Elektronik', price:199000, rating:4.9, sold:2100, glyph:'🔋', bg1:'#E5F6F4', bg2:'#1CA39A', badge:'BEST', flash:true,
    image:'Logo_branding/poweerbank.jpg',
    short:'Powerbank 20.000mAh output 22.5W, 3 port, LED display.',
    desc:'Powerbank kapasitas besar dengan output fast charging 22.5W. Bisa mengisi 3 device sekaligus, dilengkapi LED display untuk melihat persentase baterai. Support PD & QC 3.0.',
    specs:{'Kapasitas':'20.000 mAh','Output':'22.5W max','Port':'2x USB-A + 1x USB-C','Fitur':'LED display, PD & QC 3.0','Berat':'±380g'},
    variants:{'Warna':['Hitam','Putih']} },

  { id:4,  name:'Charger GaN 65W 3 Port Fast Charging', category:'Elektronik', price:149000, oldPrice:199000, rating:4.8, sold:1100, glyph:'🔌', bg1:'#FFF0EC', bg2:'#EE4D2D',
    image:'Logo_branding/caharger.jpg',
    short:'Charger GaN 65W 3 port untuk HP, tablet, laptop.',
    desc:'Charger GaN 65W compact dengan 3 port (2 USB-C + 1 USB-A). Bisa charge laptop, tablet, dan HP sekaligus. Teknologi GaN III membuat ukuran lebih kecil dan suhu lebih dingin.',
    specs:{'Output':'65W total','Port':'2x USB-C + 1x USB-A','Protokol':'PD 3.0, QC 4+','Fitur':'GaN III, lipat','Warna':'Putih'},
    variants:{'Warna':['Putih','Hitam']} },

  { id:5,  name:'Kaos Oversize Premium Cotton 24s', category:'Fashion', price:89000, rating:4.7, sold:3400, glyph:'👕', bg1:'#ECEDF1', bg2:'#3D4451', badge:'FAVORIT',
    image:'Logo_branding/KAOS.jpg',
    short:'Kaos oversize katun 24s, jahitan rantai, unisex.',
    desc:'Kaos oversize dengan bahan katun combed 24s yang adem dan jatuh. Jahitan rantai di bagian bawah, unisex cocok untuk pria maupun wanita. Tersedia 6 warna.',
    specs:{'Bahan':'Cotton Combed 24s','Ukuran':'M, L, XL, XXL','Fit':'Oversize','Jahitan':'Rantai bawah','Perawatan':'Cuci mesin suhu normal'},
    variants:{'Ukuran':['M','L','XL','XXL'],'Warna':['Hitam','Putih','Cream','Navy','Abu']} },

  { id:6,  name:'Sneakers Canvas Classic Unisex', category:'Fashion', price:289000, oldPrice:389000, rating:4.6, sold:750, glyph:'👟', bg1:'#F4F5F7', bg2:'#7A8394',
    image:'Logo_branding/snekers.jpg',
    short:'Sneakers kanvas klasik dengan sol karet anti-slip.',
    desc:'Sneakers kanvas dengan desain klasik yang mudah dipadukan. Sol karet anti-slip, insole empuk, cocok untuk daily use. Unisex.',
    specs:{'Bahan':'Canvas + karet','Ukuran':'36-44','Sol':'Karet anti-slip','Insole':'EVA foam','Perawatan':'Cuci tangan disarankan'},
    variants:{'Ukuran':['37','38','39','40','41','42','43'],'Warna':['Putih','Hitam']} },

  { id:7,  name:'Kemeja Linen Casual Premium', category:'Fashion', price:179000, rating:4.8, sold:620, glyph:'👔', bg1:'#FFF7E1', bg2:'#B58400',
    image:'Logo_branding/kemeja.jpg',
    short:'Kemeja linen adem untuk kerja maupun santai.',
    desc:'Kemeja linen premium dengan potongan casual fit. Bahan breathable, cocok untuk iklim tropis. Bisa dipakai kerja maupun santai.',
    specs:{'Bahan':'Linen premium','Ukuran':'M, L, XL','Fit':'Casual','Kancing':'Kancing mutiara','Warna':'Cream, Sage, Navy, Hitam'},
    variants:{'Ukuran':['M','L','XL'],'Warna':['Cream','Sage','Navy','Hitam']} },

  { id:8,  name:'Hijab Voal Premium Motif Bordir', category:'Fashion', price:65000, rating:4.9, sold:4800, glyph:'🧕', bg1:'#FCE7F0', bg2:'#E056A0', badge:'TERLARIS', flash:true,
    image:'Logo_branding/jilbab.jpg',
    short:'Hijab voal adem dengan bordir cantik di tepi.',
    desc:'Hijab voal premium dengan bahan yang jatuh dan tidak menerawang. Dilengkapi bordir cantik di bagian tepi. Ukuran 115x115 cm.',
    specs:{'Bahan':'Voal premium','Ukuran':'115 x 115 cm','Fitur':'Bordir tepi, jahit rapi','Warna':'15+ pilihan','Perawatan':'Cuci tangan, keringkan di tempat teduh'},
    variants:{'Warna':['Dusty Pink','Sage','Cream','Navy','Dusty Blue']} },

  { id:9,  name:'Serum Vitamin C Brightening 20ml', category:'Kecantikan', price:129000, oldPrice:169000, rating:4.9, sold:3100, glyph:'💧', bg1:'#FFF7E1', bg2:'#F7B731', badge:'BEST', flash:true,
    image:'Logo_branding/serum.jpg',
    short:'Serum Vitamin C 15% mencerahkan & menyamarkan flek.',
    desc:'Serum dengan Vitamin C 15% + Niacinamide 5% untuk mencerahkan wajah dan menyamarkan flek hitam. Tekstur ringan, cepat meresap, cocok untuk semua jenis kulit.',
    specs:{'Volume':'20 ml','Kandungan':'Vitamin C 15%, Niacinamide 5%','Tekstur':'Ringan, cepat meresap','BPOM':'Terdaftar BPOM','Cocok untuk':'Semua jenis kulit'},
    variants:{} },

  { id:10, name:'Sunscreen SPF50 PA++++ Watery Essence', category:'Kecantikan', price:79000, rating:4.8, sold:5400, glyph:'☀️', bg1:'#FFF0EC', bg2:'#EE4D2D', flash:true,
    image:'Logo_branding/susnceen_c.jpg',
    short:'Sunscreen watery essence SPF50, no white cast.',
    desc:'Sunscreen dengan tekstur watery essence yang ringan, tidak lengket, dan tidak meninggalkan white cast. SPF50 PA++++, tahan hingga 8 jam.',
    specs:{'Volume':'50 ml','SPF':'50 PA++++','Tekstur':'Watery essence','Fitur':'No white cast, waterproof','BPOM':'Terdaftar BPOM'},
    variants:{} },

  { id:11, name:'Lip Tint Velvet Matte Tahan 8 Jam', category:'Kecantikan', price:65000, rating:4.7, sold:6200, glyph:'💄', bg1:'#FCE7F0', bg2:'#E056A0', badge:'BEST',
    image:'Logo_branding/LIPTIN.jpg',
    short:'Lip tint velvet matte dengan 6 shade viral.',
    desc:'Lip tint dengan hasil velvet matte yang lembut. Tahan hingga 8 jam tanpa membuat bibir kering. Tersedia 6 shade yang viral di TikTok.',
    specs:{'Volume':'3 gram','Finish':'Velvet Matte','Shade':'6 warna','Ketahanan':'8 jam','BPOM':'Terdaftar BPOM'},
    variants:{'Shade':['#01 Nude','#02 Peach','#03 Rose','#04 Brick','#05 Wine','#06 Berry']} },

  { id:12, name:'Blender Portable 400ml USB Rechargeable', category:'Rumah', price:159000, oldPrice:219000, rating:4.7, sold:890, glyph:'🥤', bg1:'#E5F6F4', bg2:'#1CA39A',
    image:'Logo_branding/blender.jpg',
    short:'Blender portable 400ml, bisa dibawa ke mana-mana.',
    desc:'Blender portable dengan kapasitas 400ml. Bisa di-charge via USB, cocok untuk bikin jus/smoothie di mana saja. 6 mata pisau stainless.',
    specs:{'Kapasitas':'400 ml','Baterai':'1500 mAh, USB-C','Pisau':'6 mata stainless steel','Fitur':'Auto-clean, safety lock','Warna':'Putih, Mint'},
    variants:{'Warna':['Putih','Mint']} },

  { id:13, name:'Set Wadah Makan 5 pcs BPA Free', category:'Rumah', price:89000, rating:4.8, sold:1500, glyph:'🥡', bg1:'#FFF7E1', bg2:'#B58400',
    image:'Logo_branding/wadah.jpg',
    short:'Set 5 wadah makan BPA-free, microwave-safe.',
    desc:'Set 5 wadah makan dengan berbagai ukuran. Bahan PP food grade BPA-free, aman untuk microwave dan freezer. Bisa ditumpuk untuk menghemat ruang.',
    specs:{'Isi':'5 pcs (3 kotak + 2 kecil)','Bahan':'PP food grade BPA-free','Fitur':'Microwave safe, bisa ditumpuk','Warna':'Clear, Pastel'},
    variants:{'Warna':['Clear','Pastel']} },

  { id:14, name:'Matras Yoga Anti Slip 6mm TPE', category:'Olahraga', price:129000, rating:4.8, sold:760, glyph:'🧘', bg1:'#F2ECFF', bg2:'#7C5CFF',
    image:'Logo_branding/matras.jpg',
    short:'Matras yoga 6mm TPE anti slip, ringan dibawa.',
    desc:'Matras yoga TPE 6mm dengan permukaan anti-slip. Ringan dan dilengkapi tali untuk dibawa. Cocok untuk yoga, pilates, dan workout.',
    specs:{'Tebal':'6 mm','Bahan':'TPE eco-friendly','Ukuran':'183 x 61 cm','Fitur':'Anti-slip, tali bawa','Warna':'Ungu, Abu, Biru'},
    variants:{'Warna':['Ungu','Abu','Biru']} },

  { id:15, name:'Dumbbell Set 10kg Adjustable', category:'Olahraga', price:219000, rating:4.7, sold:340, glyph:'🏋️', bg1:'#ECEDF1', bg2:'#3D4451',
    image:'Logo_branding/barbel.jpg',
    short:'Dumbbell adjustable 10kg, cocok untuk home gym.',
    desc:'Dumbbell adjustable 10kg dengan plat besi berlapis. Bisa diatur sesuai kebutuhan latihan. Cocok untuk home gym.',
    specs:{'Berat':'10 kg (adjustable)','Bahan':'Besi berlapis karet','Fitur':'Adjustable plate','Warna':'Hitam'},
    variants:{} },

  { id:16, name:'Kopi Arabika Gayo Premium 500g', category:'Makanan', price:89000, oldPrice:119000, rating:4.9, sold:1200, glyph:'☕', bg1:'#FFF7E1', bg2:'#B58400', badge:'BEST',
    image:'Logo_branding/kopi.jpg',
    short:'Kopi Arabika Gayo single origin, 500g.',
    desc:'Kopi Arabika Gayo single origin dengan profil rasa cokelat, rempah, dan keasaman rendah. Dikemas dalam 500g dengan zipper lock.',
    specs:{'Berat':'500 g','Asal':'Gayo, Aceh','Roast':'Medium','Profil':'Cokelat, rempah, low acidity','Kemasan':'Zipper lock, valve'},
    variants:{'Gilingan':['Biji Utuh','Halus','Sedang']} },

  { id:17, name:'Mechanical Keyboard 68 Keys RGB Hotswap', category:'Hobi', price:349000, oldPrice:449000, rating:4.8, sold:530, glyph:'⌨️', bg1:'#F2ECFF', bg2:'#7C5CFF', flash:true,
    image:'Logo_branding/keyboard.jpg',
    short:'Mech keyboard 65% hotswap RGB, brown switch.',
    desc:'Mechanical keyboard 68 tombol dengan layout 65%. Support hotswap, RGB backlight, dan 3 mode koneksi (wired, BT, 2.4G). Brown switch.',
    specs:{'Layout':'65% (68 keys)','Switch':'Brown, hotswap','Koneksi':'USB-C, BT 5.0, 2.4G','Backlight':'RGB','Baterai':'4000 mAh'},
    variants:{'Warna':['Putih','Hitam'],'Switch':['Brown','Red','Blue']} },

  { id:18, name:'Action Figure Anime Collector 30cm', category:'Hobi', price:159000, rating:4.6, sold:410, glyph:'🗿', bg1:'#E7F0FC', bg2:'#2E86DE',
    image:'Logo_branding/goku.jpg',
    short:'Action figure anime 30cm, PVC premium.',
    desc:'Action figure 30cm dari PVC premium. Detail rapi dan tahan lama. Cocok untuk koleksi pribadi atau hadiah.',
    specs:{'Tinggi':'30 cm','Bahan':'PVC premium','Fitur':'Articulated, box display','Karakter':'Random (bisa request)'},
    variants:{'Karakter':['Naruto','Luffy','Goku','Tanjiro','Random']} }
];

/* ---------- LAYANAN DIGITAL ---------- */
const DIGITAL = {
  pulsa: {
    title:'Pulsa All Operator', icon:'📱', type:'pulsa',
    desc:'Isi pulsa semua operator, proses instan 24 jam.',
    fieldLabel:'Nomor HP tujuan', fieldType:'tel', fieldPlaceholder:'0812xxxxxxx',
    operators:['Telkomsel','Indosat','XL','Axis','Tri','Smartfren'],
    nominals:[
      { label:'5.000', value:5000, price:6500 },
      { label:'10.000', value:10000, price:11500 },
      { label:'20.000', value:20000, price:21500 },
      { label:'25.000', value:25000, price:26000 },
      { label:'50.000', value:50000, price:50500 },
      { label:'100.000', value:100000, price:100500 }
    ]
  },
  kuota: {
    title:'Paket Data Internet', icon:'📶', type:'kuota',
    desc:'Kuota internet semua operator, aktif otomatis.',
    fieldLabel:'Nomor HP tujuan', fieldType:'tel', fieldPlaceholder:'0812xxxxxxx',
    operators:['Telkomsel','Indosat','XL','Tri','Smartfren'],
    nominals:[
      { label:'1 GB / 7 hari', value:'1GB7D', price:15000 },
      { label:'3 GB / 30 hari', value:'3GB30D', price:35000 },
      { label:'5 GB / 30 hari', value:'5GB30D', price:55000 },
      { label:'10 GB / 30 hari', value:'10GB30D', price:95000 },
      { label:'20 GB / 30 hari', value:'20GB30D', price:165000 },
      { label:'50 GB / 30 hari', value:'50GB30D', price:325000 }
    ]
  },
  token: {
    title:'Token Listrik PLN', icon:'⚡', type:'token',
    desc:'Token listrik prabayar instan, langsung masuk.',
    fieldLabel:'Nomor Meter / ID Pelanggan', fieldType:'text', fieldPlaceholder:'14xxxxxxxx',
    operators:['PLN Prabayar'],
    nominals:[
      { label:'20.000', value:20000, price:20500 },
      { label:'50.000', value:50000, price:50500 },
      { label:'100.000', value:100000, price:100500 },
      { label:'200.000', value:200000, price:200500 },
      { label:'500.000', value:500000, price:500500 },
      { label:'1.000.000', value:1000000, price:1000500 }
    ]
  },
  voucher: {
    title:'Voucher Game', icon:'🎮', type:'voucher',
    desc:'Diamond & UC game favorit harga bersaing.',
    fieldLabel:'User ID game', fieldType:'text', fieldPlaceholder:'12345678 (Zone ID)',
    operators:['Mobile Legends','Free Fire','PUBG Mobile','Genshin Impact','Valorant'],
    nominals:[
      { label:'ML 86 Diamond', value:'ML86', price:22000 },
      { label:'ML 172 Diamond', value:'ML172', price:43000 },
      { label:'FF 70 Diamond', value:'FF70', price:10000 },
      { label:'FF 355 Diamond', value:'FF355', price:49000 },
      { label:'PUBG 60 UC', value:'PUBG60', price:15000 },
      { label:'Valorant 420 VP', value:'VALO420', price:49000 }
    ]
  },
  ewallet: {
    title:'Top Up E-Wallet', icon:'💳', type:'ewallet',
    desc:'Isi saldo GoPay, OVO, DANA, ShopeePay, LinkAja.',
    fieldLabel:'Nomor HP terdaftar', fieldType:'tel', fieldPlaceholder:'0812xxxxxxx',
    operators:['GoPay','OVO','DANA','ShopeePay','LinkAja'],
    nominals:[
      { label:'10.000', value:10000, price:10500 },
      { label:'25.000', value:25000, price:25500 },
      { label:'50.000', value:50000, price:50500 },
      { label:'100.000', value:100000, price:100500 },
      { label:'200.000', value:200000, price:200500 },
      { label:'500.000', value:500000, price:500500 }
    ]
  }
};

/* ---------- UTIL ---------- */
function rupiah(n){ return 'Rp ' + Number(n).toLocaleString('id-ID'); }

function art(p, v = 0){
  if (p.image){
    if (Array.isArray(p.image)){
      return p.image[v] || p.image[0];
    }
    return p.image;
  }

  const conf = [
    { fs:200, cx:300, cy:300, rot:0 },
    { fs:150, cx:400, cy:400, rot:15 },
    { fs:220, cx:300, cy:300, rot:-12 }
  ][v] || { fs:200, cx:300, cy:300, rot:0 };

  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">' +
      '<defs>' +
        '<linearGradient id="g' + p.id + v + '" x1="0" y1="0" x2="1" y2="1">' +
          '<stop offset="0" stop-color="' + p.bg1 + '"/>' +
          '<stop offset="1" stop-color="' + p.bg2 + '"/>' +
        '</linearGradient>' +
      '</defs>' +
      '<rect width="600" height="600" fill="url(#g' + p.id + v + ')"/>' +
      '<circle cx="' + conf.cx + '" cy="' + conf.cy + '" r="190" fill="#ffffff" opacity=".14"/>' +
      '<g transform="rotate(' + conf.rot + ' 300 300)">' +
        '<text x="' + conf.cx + '" y="' + conf.cy + '" font-size="' + conf.fs + '" ' +
          'text-anchor="middle" dominant-baseline="central">' + p.glyph + '</text>' +
      '</g>' +
    '</svg>';
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

function galleryCount(p){
  if (Array.isArray(p.image)) return p.image.length;
  if (p.image) return 1;     
  return 3;                  
}

function waLink(text){ return 'https://wa.me/' + STORE.waNumber + '?text=' + encodeURIComponent(text); }

/* ---------- TOAST ---------- */
let toastTimer;
function showToast(msg, type = ''){
  let el = document.getElementById('toast');
  if (!el){ el = document.createElement('div'); el.id = 'toast'; el.className = 'toast'; document.body.appendChild(el); }
  el.textContent = msg;
  el.className = 'toast' + (type ? ' toast-' + type : '');
  requestAnimationFrame(() => el.classList.add('is-visible'));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('is-visible'), 2400);
}

/* ---------- CART ---------- */
const CART_KEY = 'nusamart_cart_v1';
function getCart(){ try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch { return []; } }
function saveCart(cart){ try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch(e){} updateCartUI(); }
function cartCount(){ return getCart().reduce((s, i) => s + i.qty, 0); }
function cartTotal(){
  return getCart().reduce((sum, it) => {
    const p = PRODUCTS.find(x => x.id === it.id);
    return sum + (p ? p.price * it.qty : 0);
  }, 0);
}
function addToCart(id, qty = 1, variant = {}){
  const p = PRODUCTS.find(x => x.id === id);
  if (!p){ return; }
  const cart = getCart();
  const key = id + '|' + JSON.stringify(variant);
  const existing = cart.find(it => it.key === key);
  if (existing){ existing.qty += qty; }
  else { cart.push({ key, id, qty, variant }); }
  saveCart(cart);
  showToast('Ditambahkan ke keranjang ✓', 'success');
}
function removeFromCart(key){
  const cart = getCart().filter(it => it.key !== key);
  saveCart(cart);
}
function updateCartUI(){
  document.querySelectorAll('.cart-count').forEach(el => el.textContent = cartCount());
  const body = document.getElementById('cartBody');
  const foot = document.getElementById('cartFoot');
  if (!body) return;
  const cart = getCart();
  const drawerCount = document.getElementById('cartDrawerCount');
  if (drawerCount) drawerCount.textContent = cartCount();

  if (!cart.length){
    body.innerHTML = '<div class="cart-empty"><div class="cart-empty-icon">🛒</div><p>Keranjang masih kosong.<br>Yuk mulai belanja!</p></div>';
    foot.innerHTML = '';
    return;
  }
  body.innerHTML = cart.map(it => {
    const p = PRODUCTS.find(x => x.id === it.id);
    if (!p) return '';
    const variantStr = Object.entries(it.variant || {}).map(([k, v]) => k + ': ' + v).join(', ');
    return '<div class="cart-item">' +
      '<img src="' + art(p, 0) + '" alt="" width="60" height="60">' +
      '<div class="cart-item-info">' +
        '<h4>' + p.name + '</h4>' +
        '<div class="cart-item-price">' + rupiah(p.price * it.qty) + '</div>' +
        '<div class="cart-item-meta">' + it.qty + 'x · ' + rupiah(p.price) + (variantStr ? ' · ' + variantStr : '') + '</div>' +
      '</div>' +
      '<button class="cart-remove" data-key="' + it.key + '" aria-label="Hapus">Hapus</button>' +
    '</div>';
  }).join('');
  foot.innerHTML =
    '<div class="cart-total"><span>Total</span><strong>' + rupiah(cartTotal()) + '</strong></div>' +
    '<button class="btn btn-primary btn-block" id="checkoutBtn">Checkout via WhatsApp</button>';
  const cb = foot.querySelector('#checkoutBtn');
  if (cb) cb.addEventListener('click', checkout);
  body.querySelectorAll('.cart-remove').forEach(btn => {
    btn.addEventListener('click', () => removeFromCart(btn.dataset.key));
  });
}
function checkout(){
  const cart = getCart();
  if (!cart.length) return;
  let msg = 'Halo ' + STORE.name + ', saya ingin memesan:\n\n';
  cart.forEach((it, i) => {
    const p = PRODUCTS.find(x => x.id === it.id);
    if (!p) return;
    const v = Object.entries(it.variant || {}).map(([k, val]) => k + ': ' + val).join(', ');
    msg += (i + 1) + '. ' + p.name + '\n';
    if (v) msg += '   ' + v + '\n';
    msg += '   ' + it.qty + ' x ' + rupiah(p.price) + ' = ' + rupiah(p.price * it.qty) + '\n\n';
  });
  msg += 'Total: ' + rupiah(cartTotal()) + '\n\nMohon info ketersediaan & ongkir. Terima kasih!';
  window.open(waLink(msg), '_blank');
}

/* ---------- PRODUCT CARD ---------- */
function productCard(p){
  const diskon = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
  return '<article class="p-card reveal">' +
    '<a class="p-media" href="produk.html?id=' + p.id + '" aria-label="' + p.name + '">' +
      '<img src="' + art(p, 0) + '" alt="' + p.name + '" width="600" height="600" loading="lazy">' +
      (p.badge ? '<span class="p-badge' + (p.badge === 'BEST' ? ' p-badge-teal' : p.badge === 'FAVORIT' ? ' p-badge-gold' : '') + '">' + p.badge + '</span>' : '') +
    '</a>' +
    '<div class="p-body">' +
      '<h3 class="p-title"><a href="produk.html?id=' + p.id + '">' + p.name + '</a></h3>' +
      '<div class="p-meta"><span class="star">★</span><span>' + p.rating.toFixed(1) + '</span><span>·</span><span>' + p.sold + ' terjual</span></div>' +
      '<div class="p-price">' +
        '<strong>' + rupiah(p.price) + '</strong>' +
        (p.oldPrice ? '<s>' + rupiah(p.oldPrice) + '</s><span class="discount">-' + diskon + '%</span>' : '') +
      '</div>' +
      '<div class="p-actions">' +
        '<button class="p-add" data-id="' + p.id + '">+ Keranjang</button>' +
      '</div>' +
    '</div>' +
  '</article>';
}

function bindProductButtons(root = document){
  root.querySelectorAll('.p-add').forEach(btn => {
    if (btn.dataset.bound) return;
    btn.dataset.bound = '1';
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      addToCart(Number(btn.dataset.id));
    });
  });
}

/* ---------- HEADER / NAV ---------- */
function initHeader(){
  const toggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');
  const closeBtn = document.getElementById('mobileNavClose');

  if (toggle && mobileNav){
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      mobileNav.classList.toggle('is-open', !open);
      mobileNav.setAttribute('aria-hidden', String(open));
    });
    const close = () => {
      mobileNav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('aria-hidden', 'true');
    };
    if (closeBtn) closeBtn.addEventListener('click', close);
    mobileNav.addEventListener('click', e => { if (e.target === mobileNav) close(); });
  }

  // Cart drawer
  const cartBtn = document.getElementById('cartBtn');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartClose = document.getElementById('cartClose');
  if (cartBtn && cartDrawer){
    cartBtn.addEventListener('click', () => {
      cartDrawer.classList.add('is-open');
      cartDrawer.setAttribute('aria-hidden', 'false');
      updateCartUI();
    });
    const closeDrawer = () => {
      cartDrawer.classList.remove('is-open');
      cartDrawer.setAttribute('aria-hidden', 'true');
    };
    if (cartClose) cartClose.addEventListener('click', closeDrawer);
    cartDrawer.addEventListener('click', e => { if (e.target === cartDrawer) closeDrawer(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });
  }

  // Search header → katalog
  const searchForm = document.getElementById('headerSearchForm');
  const searchInput = document.getElementById('headerSearch');
  if (searchForm && searchInput){
    searchForm.addEventListener('submit', e => {
      e.preventDefault();
      const q = searchInput.value.trim();
      window.location.href = 'katalog.html' + (q ? '?q=' + encodeURIComponent(q) : '');
    });
  }
}

/* ---------- REVEAL ---------- */
function initReveal(){
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)){
    items.forEach(el => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting){
        en.target.classList.add('is-visible');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  items.forEach(el => io.observe(el));
}

/* ---------- HOME ---------- */
function initHome(){
  const flashGrid = document.getElementById('flashGrid');
  if (flashGrid){
    const flashList = PRODUCTS.filter(p => p.flash).slice(0, 6);
    flashGrid.innerHTML = flashList.map(productCard).join('');
    bindProductButtons(flashGrid);
  }

  const trendGrid = document.getElementById('trendGrid');
  if (trendGrid){
    const trend = PRODUCTS.slice().sort((a, b) => b.sold - a.sold).slice(0, 8);
    trendGrid.innerHTML = trend.map(productCard).join('');
    bindProductButtons(trendGrid);
  }

  const digitalGrid = document.getElementById('digitalGrid');
  if (digitalGrid){
    digitalGrid.innerHTML = Object.entries(DIGITAL).map(([key, d]) => digitalCardHTML(key, d)).join('');
    digitalGrid.querySelectorAll('.digital-card').forEach(bindDigitalCard);
  }

  document.querySelectorAll('[data-cat-count]').forEach(el => {
    const cat = el.getAttribute('data-cat-count');
    el.textContent = PRODUCTS.filter(p => p.category === cat).length;
  });

  startCountdown();
}

function startCountdown(){
  const el = document.getElementById('flashCountdown');
  if (!el) return;
  function tick(){
    const now = new Date();
    const end = new Date();
    end.setHours(23, 59, 59, 999);
    const diff = end - now;
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    el.innerHTML = '<small>Berakhir dalam</small>' +
      '<span class="cd-box">' + String(h).padStart(2, '0') + '</span>' +
      '<span class="cd-sep">:</span>' +
      '<span class="cd-box">' + String(m).padStart(2, '0') + '</span>' +
      '<span class="cd-sep">:</span>' +
      '<span class="cd-box">' + String(s).padStart(2, '0') + '</span>';
  }
  tick();
  setInterval(tick, 1000);
}

/* ---------- DIGITAL CARDS ---------- */
function digitalCardHTML(key, d){
  const opts = d.operators.map(o => '<option>' + o + '</option>').join('');
  const nominals = d.nominals.map((n, i) =>
    '<button type="button" class="digital-nominal' + (i === 0 ? ' is-active' : '') + '" data-price="' + n.price + '" data-value="' + n.value + '" data-label="' + n.label + '">' + n.label + '</button>'
  ).join('');
  return '<article class="digital-card" data-type="' + d.type + '" data-key="' + key + '">' +
    '<div class="digital-header">' +
      '<div class="digital-icon">' + d.icon + '</div>' +
      '<div><h3>' + d.title + '</h3><small>' + d.desc + '</small></div>' +
    '</div>' +
    '<div class="digital-body">' +
      '<select class="digital-select" data-role="operator">' + opts + '</select>' +
      '<div class="digital-nominal-grid">' + nominals + '</div>' +
      '<input class="digital-input" type="' + d.fieldType + '" data-role="dest" placeholder="' + d.fieldPlaceholder + '" aria-label="' + d.fieldLabel + '">' +
      '<div class="digital-price"><span>Total bayar</span><strong data-role="price">' + rupiah(d.nominals[0].price) + '</strong></div>' +
      '<button class="btn btn-primary btn-block" data-role="buy">Beli Sekarang</button>' +
    '</div>' +
  '</article>';
}

function bindDigitalCard(card){
  const key = card.dataset.key;
  const d = DIGITAL[key];
  if (!d) return;
  let selected = Object.assign({}, d.nominals[0]);
  const priceEl = card.querySelector('[data-role="price"]');
  const operatorEl = card.querySelector('[data-role="operator"]');
  const destEl = card.querySelector('[data-role="dest"]');

  card.querySelectorAll('.digital-nominal').forEach(btn => {
    btn.addEventListener('click', () => {
      card.querySelectorAll('.digital-nominal').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      selected = { price: Number(btn.dataset.price), value: btn.dataset.value, label: btn.dataset.label };
      if (priceEl) priceEl.textContent = rupiah(selected.price);
    });
  });

  const buyBtn = card.querySelector('[data-role="buy"]');
  if (buyBtn) {
    buyBtn.addEventListener('click', () => {
      const dest = destEl ? destEl.value.trim() : '';
      if (!dest){
        showToast('Isi ' + d.fieldLabel.toLowerCase() + ' dulu ya', 'error');
        if (destEl) destEl.focus();
        return;
      }
      let msg = 'Halo ' + STORE.name + ', saya ingin beli:\n\n';
      msg += 'Layanan: ' + d.title + '\n';
      msg += 'Operator/Produk: ' + (operatorEl ? operatorEl.value : '-') + '\n';
      msg += 'Nominal: ' + selected.label + '\n';
      msg += d.fieldLabel + ': ' + dest + '\n';
      msg += 'Total: ' + rupiah(selected.price) + '\n\nMohon diproses. Terima kasih!';
      window.open(waLink(msg), '_blank');
    });
  }
}

/* ---------- DIGITAL PAGE ---------- */
function initDigitalPage(){
  const grid = document.getElementById('digitalPageGrid');
  if (!grid) return;
  grid.innerHTML = Object.entries(DIGITAL).map(([key, d]) => digitalCardHTML(key, d)).join('');
  grid.querySelectorAll('.digital-card').forEach(bindDigitalCard);
}

/* ---------- KATALOG ---------- */
function initKatalog(){
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  const params = new URLSearchParams(location.search);
  const state = {
    q: params.get('q') || '',
    cat: params.get('kategori') || 'Semua',
    sort: 'populer'
  };

  const searchInput = document.getElementById('searchInput');
  const sortSelect = document.getElementById('sortSelect');
  const chips = Array.from(document.querySelectorAll('.chip'));
  const countEl = document.getElementById('resultCount');
  const emptyEl = document.getElementById('emptyState');

  if (searchInput) searchInput.value = state.q;

  chips.forEach(c => {
    const active = c.dataset.cat === state.cat;
    c.classList.toggle('is-active', active);
    c.setAttribute('aria-pressed', String(active));
  });

  function render(){
    let list = PRODUCTS.slice();

    if (state.cat !== 'Semua'){
      list = list.filter(p => p.category === state.cat);
    }
    if (state.q.trim()){
      const q = state.q.toLowerCase();
      list = list.filter(p =>
        (p.name + ' ' + p.category + ' ' + p.short).toLowerCase().includes(q)
      );
    }

    switch (state.sort){
      case 'murah': list.sort((a,b) => a.price - b.price); break;
      case 'mahal': list.sort((a,b) => b.price - a.price); break;
      case 'rating': list.sort((a,b) => b.rating - a.rating); break;
      case 'baru': list.sort((a,b) => b.id - a.id); break;
      case 'populer': default: list.sort((a,b) => b.sold - a.sold); break;
    }

    grid.innerHTML = list.map(productCard).join('');
    bindProductButtons(grid);
    if (countEl) countEl.textContent = 'Menampilkan ' + list.length + ' dari ' + PRODUCTS.length + ' produk';
    if (emptyEl) emptyEl.hidden = list.length > 0;
    initReveal();
  }

  if (searchInput) searchInput.addEventListener('input', e => { state.q = e.target.value; render(); });
  if (sortSelect) sortSelect.addEventListener('change', e => { state.sort = e.target.value; render(); });
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      state.cat = chip.dataset.cat;
      chips.forEach(c => {
        const active = c === chip;
        c.classList.toggle('is-active', active);
        c.setAttribute('aria-pressed', String(active));
      });
      render();
    });
  });

  const resetBtn = document.getElementById('resetFilter');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      state.q = ''; state.cat = 'Semua'; state.sort = 'populer';
      if (searchInput) searchInput.value = '';
      if (sortSelect) sortSelect.value = 'populer';
      chips.forEach(c => {
        const active = c.dataset.cat === 'Semua';
        c.classList.toggle('is-active', active);
        c.setAttribute('aria-pressed', String(active));
      });
      render();
    });
  }

  render();
}

/* ---------- PRODUK DETAIL ---------- */
function initProduk(){
  const nameEl = document.getElementById('pName');
  if (!nameEl) return;

  const params = new URLSearchParams(location.search);
  const id = Number(params.get('id')) || 1;
  const p = PRODUCTS.find(x => x.id === id) || PRODUCTS[0];

  document.title = p.name + ' — ' + STORE.name;

  const $ = (id) => document.getElementById(id);
  const setText = (id, txt) => { const el = $(id); if (el) el.textContent = txt; };
  const setHTML = (id, html) => { const el = $(id); if (el) el.innerHTML = html; };

  setText('crumbProduct', p.name);
  setText('pCategory', p.category);
  setText('pName', p.name);
  setText('pRating', p.rating.toFixed(1));
  setText('pSold', p.sold + ' terjual');
  setText('pPrice', rupiah(p.price));
  setText('pDesc', p.desc);

  const oldEl = $('pOldPrice');
  const discEl = $('pDiscount');
  if (p.oldPrice && oldEl && discEl){
    oldEl.hidden = false;
    oldEl.textContent = rupiah(p.oldPrice);
    discEl.hidden = false;
    discEl.textContent = 'Hemat ' + Math.round((1 - p.price / p.oldPrice) * 100) + '%';
  }

  // Galeri
  const mainImg = $('mainImage');
  const thumbsBox = $('galleryThumbs');
  if (mainImg && thumbsBox){
    mainImg.src = art(p, 0);
    mainImg.alt = p.name;
    const totalThumbs = galleryCount(p);
    thumbsBox.innerHTML = Array.from({ length: totalThumbs }, (_, i) =>
      '<button type="button" class="pd-thumb' + (i === 0 ? ' is-active' : '') + '" data-index="' + i + '">' +
        '<img src="' + art(p, i) + '" alt="" width="600" height="600" loading="lazy">' +
      '</button>'
    ).join('');
    thumbsBox.addEventListener('click', e => {
      const btn = e.target.closest('.pd-thumb');
      if (!btn) return;
      const idx = Number(btn.dataset.index);
      mainImg.src = art(p, idx);
      thumbsBox.querySelectorAll('.pd-thumb').forEach(t => t.classList.remove('is-active'));
      btn.classList.add('is-active');
    });
  }

  // Spesifikasi
  setHTML('specBody', Object.entries(p.specs).map(([k, v]) =>
    '<tr><th scope="row">' + k + '</th><td>' + v + '</td></tr>'
  ).join(''));

  // Varian
  const variantArea = $('variantArea');
  const chosen = {};
  if (variantArea && p.variants && Object.keys(p.variants).length){
    variantArea.innerHTML = Object.entries(p.variants).map(([group, options]) =>
      '<div class="pd-variant" data-group="' + group + '">' +
        '<span class="pd-variant-label">' + group + '</span>' +
        '<div class="pd-variant-options">' +
          options.map((opt, i) =>
            '<button type="button" class="pd-variant-btn' + (i === 0 ? ' is-active' : '') + '" data-value="' + opt + '">' + opt + '</button>'
          ).join('') +
        '</div>' +
      '</div>'
    ).join('');
    Object.entries(p.variants).forEach(([g, opts]) => chosen[g] = opts[0]);

    variantArea.addEventListener('click', e => {
      const btn = e.target.closest('.pd-variant-btn');
      if (!btn) return;
      const group = btn.closest('.pd-variant').dataset.group;
      chosen[group] = btn.dataset.value;
      btn.closest('.pd-variant-options').querySelectorAll('.pd-variant-btn').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      updateSummary();
    });
  }

  // Qty
  const qtyInput = $('qtyInput');
  const qtyMinus = $('qtyMinus');
  const qtyPlus = $('qtyPlus');
  const MAX = 10;

  function clampQty(v){
    v = Math.max(1, Math.min(MAX, isNaN(v) ? 1 : v));
    if (qtyInput) qtyInput.value = v;
    updateSummary();
  }

  if (qtyMinus && qtyInput) qtyMinus.addEventListener('click', () => clampQty(Number(qtyInput.value) - 1));
  if (qtyPlus && qtyInput) qtyPlus.addEventListener('click', () => clampQty(Number(qtyInput.value) + 1));
  if (qtyInput) qtyInput.addEventListener('change', () => clampQty(Number(qtyInput.value)));

  function updateSummary(){
    const qty = qtyInput ? Number(qtyInput.value) : 1;
    setText('sumPrice', rupiah(p.price * qty));
    setText('sumTotal', rupiah(p.price * qty));
  }
  updateSummary();

  // Buttons
  const addBtn = $('addCartBtn');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const qty = qtyInput ? Number(qtyInput.value) : 1;
      addToCart(p.id, qty, chosen);
    });
  }

  const buyBtn = $('buyNowBtn');
  if (buyBtn) {
    buyBtn.addEventListener('click', () => {
      const qty = qtyInput ? Number(qtyInput.value) : 1;
      let msg = 'Halo ' + STORE.name + ', saya ingin membeli:\n\n';
      msg += '• Produk: ' + p.name + '\n';
      Object.entries(chosen).forEach(([g, v]) => msg += '• ' + g + ': ' + v + '\n');
      msg += '• Jumlah: ' + qty + ' pcs\n';
      msg += '• Total: ' + rupiah(p.price * qty) + '\n\nMohon info ketersediaan. Terima kasih!';
      window.open(waLink(msg), '_blank');
    });
  }

  // Related
  const related = $('relatedGrid');
  if (related){
    const list = PRODUCTS
      .filter(x => x.category === p.category && x.id !== p.id)
      .concat(PRODUCTS.filter(x => x.category !== p.category && x.id !== p.id))
      .slice(0, 4);
    related.innerHTML = list.map(productCard).join('');
    bindProductButtons(related);
    initReveal();
  }
}

/* ---------- KONTAK ---------- */
function initKontak(){
  const form = document.getElementById('contactForm');
  if (!form) return;
  const status = document.getElementById('formStatus');

  const rules = {
    nama:   { el: document.getElementById('nama'),   err: 'err-nama',   test: v => v.trim().length >= 2, msg: 'Nama minimal 2 karakter.' },
    email:  { el: document.getElementById('email'),  err: 'err-email',  test: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()), msg: 'Email tidak valid.' },
    pesan:  { el: document.getElementById('pesan'),  err: 'err-pesan',  test: v => v.trim().length >= 10, msg: 'Pesan minimal 10 karakter.' }
  };

  Object.keys(rules).forEach(k => {
    if (!rules[k].el) delete rules[k];
  });

  function setError(key, on){
    const r = rules[key]; if (!r) return;
    const errEl = document.getElementById(r.err);
    const fieldEl = r.el.closest('.field');
    if (errEl) errEl.textContent = on ? r.msg : '';
    if (fieldEl) fieldEl.classList.toggle('has-error', on);
    r.el.setAttribute('aria-invalid', String(on));
  }
  function validateField(key){
    const r = rules[key]; if (!r) return true;
    const ok = r.test(r.el.value);
    setError(key, !ok);
    return ok;
  }

  Object.keys(rules).forEach(key => {
    const r = rules[key];
    r.el.addEventListener('blur', () => validateField(key));
    r.el.addEventListener('input', () => {
      if (r.el.closest('.field').classList.contains('has-error')) validateField(key);
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const ok = Object.keys(rules).map(validateField).every(Boolean);
    if (!ok){
      if (status){
        status.textContent = 'Mohon periksa kembali kolom yang ditandai merah.';
        status.classList.remove('is-success');
      }
      const firstErr = form.querySelector('.has-error input, .has-error textarea');
      if (firstErr) firstErr.focus();
      return;
    }
    if (status){
      status.textContent = 'Terima kasih, ' + rules.nama.el.value.trim() + '! Pesan Anda sudah terkirim. Kami akan membalas dalam 1×24 jam.';
      status.classList.add('is-success');
    }
    form.reset();
    Object.keys(rules).forEach(k => setError(k, false));
  });
}

/* ---------- BOOTSTRAP ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  updateCartUI();

  const page = document.body.dataset.page;
  if (page === 'home') initHome();
  if (page === 'katalog') initKatalog();
  if (page === 'produk') initProduk();
  if (page === 'digital') initDigitalPage();
  if (page === 'kontak') initKontak();

  initReveal();
});