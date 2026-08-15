const products = [
  /* ---------- Fresh Produce ---------- */
  {id:1,name:"Tomato",category:"Fresh Produce",price:60,rating:4.7,image:"images/tomato.jpg",desc:"Locally grown deshi tomatoes, firm and tangy perfect for daily cooking."},
  {id:2,name:"Green Chili",category:"Fresh Produce",price:80,rating:4.6,image:"images/green-chili.jpg",desc:"Fresh, spicy kacha morich picked daily for that everyday heat."},
  {id:3,name:"Onion",category:"Fresh Produce",price:90,rating:4.8,image:"images/onion.jpg",desc:"Everyday peyaj,a kitchen essential for every Bangladeshi dish."},
  {id:4,name:"Potato",category:"Fresh Produce",price:35,rating:4.7,image:"images/potato.jpg",desc:"Fresh alu, sorted and cleaned, ready for curries and fries alike."},
  {id:5,name:"Eggplant",category:"Fresh Produce",price:50,rating:4.6,image:"images/eggplant.jpg",desc:"Fresh, firm begun ,ideal for begun bhaja and everyday curries."},
  {id:6,name:"Cucumber",category:"Fresh Produce",price:45,rating:4.7,image:"images/cucumber.jpg",desc:"Crisp, cool shosha,great for salads and everyday iftar plates."},

  /* ---------- Dairy ---------- */
  {id:7,name:"Cow Milk",category:"Dairy",price:90,rating:4.8,image:"images/cow-milk.jpg",desc:"Fresh, pasteurized cow milk for breakfast, tea and everyday cooking."},
  {id:8,name:"Eggs (Dozen)",category:"Dairy",price:150,rating:4.7,image:"images/eggs.jpg",desc:"Farm fresh eggs, a dozen to a pack, for everyday protein needs."},
  {id:9,name:"Pure Ghee",category:"Dairy",price:650,rating:4.8,image:"images/ghee.jpg",desc:"Aromatic, slow clarified ghee for rich flavor in everyday cooking."},
  {id:10,name:"Mishti Doi",category:"Dairy",price:120,rating:4.9,image:"images/mishti-doi.jpg",desc:"Traditional caramelized sweet yogurt, set the classic Bengali way."},
  {id:11,name:"Butter",category:"Dairy",price:280,rating:4.7,image:"images/butter.jpg",desc:"Creamy salted butter, perfect for toast, parathas and baking."},
  {id:12,name:"Cheese Slices",category:"Dairy",price:320,rating:4.6,image:"images/cheese-slices.jpg",desc:"Smooth, meltable cheese slices for sandwiches and quick snacks."},

  /* ---------- Bakery ---------- */
  {id:13,name:"Sliced Bread",category:"Bakery",price:65,rating:4.6,image:"images/sliced-bread.jpg",desc:"Soft, sliced pauruti baked fresh daily for everyday breakfasts."},
  {id:14,name:"Bun (Pack of 4)",category:"Bakery",price:90,rating:4.7,image:"images/bun.jpg",desc:"Soft, lightly sweet buns, fresh from the oven, ready to enjoy."},
  {id:15,name:"Vanilla Cake",category:"Bakery",price:280,rating:4.7,image:"images/vanilla-cake.jpg",desc:"A soft, moist vanilla pound cake, great with evening cha."},
  {id:16,name:"Paratha (Pack)",category:"Bakery",price:220,rating:4.7,image:"images/paratha.jpg",desc:"Layered, flaky deshi paratha, ready to fry and enjoy in minutes."},
  {id:17,name:"Croissant",category:"Bakery",price:60,rating:4.6,image:"images/croissant.jpg",desc:"Soft, jelly-filled croissant,a sweet everyday breakfast treat."},
  {id:18,name:"Toast Biscuit",category:"Bakery",price:70,rating:4.5,image:"images/toast-biscuit.jpg",desc:"Crisp, lightly sweet toast biscuits, perfect with evening cha."},

  /* ---------- Beverages ---------- */
  {id:19,name:"Juice",category:"Beverages",price:150,rating:4.7,image:"images/mango-juice.jpg",desc:"Sweet, thick mango juice made from real fruit pulp."},
  {id:20,name:"Cola",category:"Beverages",price:130,rating:4.6,image:"images/cola.jpg",desc:"Classic chilled cola , a party and iftar table favorite."},
  {id:21,name:"Green Tea",category:"Beverages",price:240,rating:4.8,image:"images/green-tea.jpg",desc:"Light, organic green tea with a smooth, refreshing everyday finish."},
  {id:22,name:"Mineral Water",category:"Beverages",price:40,rating:4.8,image:"images/mineral-water.jpg",desc:"Clean, safe purified drinking water for everyday hydration."},
  {id:23,name:"Instant Coffee",category:"Beverages",price:350,rating:4.7,image:"images/instant-coffee.jpg",desc:"Rich, dark roast instant coffee for a quick everyday cup."},
  {id:24,name:"Borhani",category:"Beverages",price:90,rating:4.6,image:"images/borhani.jpg",desc:"Traditional spiced, tangy yogurt drink, a classic biryani companion."},

  /* ---------- Snacks ---------- */
  {id:25,name:"Chanachur",category:"Snacks",price:90,rating:4.8,image:"images/chanachur.jpg",desc:"Crunchy, spicy chanachur mix,a favorite evening snack."},
  {id:26,name:"Chips",category:"Snacks",price:180,rating:4.7,image:"images/potato-chips.jpg",desc:"Crispy, stackable potato chips, a satisfying everyday snack."},
  {id:27,name:"Cream Biscuit",category:"Snacks",price:60,rating:4.6,image:"images/cream-biscuit.jpg",desc:"Lemon cream-filled biscuits, a sweet treat with tea."},
  {id:28,name:"Instant Noodles",category:"Snacks",price:80,rating:4.7,image:"images/instant-noodles.jpg",desc:"Quick, masala-flavored instant noodles ready in minutes."},
  {id:29,name:"Muri (Puffed Rice)",category:"Snacks",price:55,rating:4.6,image:"images/muri.jpg",desc:"Light, crispy puffed rice, perfect for jhal muri and snacking."},
  {id:30,name:"Nimki",category:"Snacks",price:80,rating:4.6,image:"images/nimki.jpg",desc:"Crispy, savory nimki, a classic tea-time snack."},

  /* ---------- Household ---------- */
  {id:31,name:"Dish Wash Liquid",category:"Household",price:150,rating:4.6,image:"images/dish-wash.jpg",desc:"A gentle, effective dish wash liquid that cuts grease with ease."},
  {id:32,name:"Detergent Powder",category:"Household",price:180,rating:4.6,image:"images/detergent.jpg",desc:"Powerful detergent powder that removes tough stains with ease."},
  {id:33,name:"Tissue Paper",category:"Household",price:45,rating:4.5,image:"images/tissue-paper.jpg",desc:"Soft, absorbent tissue paper for everyday household use."},
  {id:34,name:"Toilet Cleaner",category:"Household",price:180,rating:4.6,image:"images/toilet-cleaner.jpg",desc:"A strong, disinfecting cleaner that keeps bathrooms fresh."},
  {id:35,name:"Air Freshener",category:"Household",price:250,rating:4.5,image:"images/air-freshener.jpg",desc:"A long lasting citrus air freshener spray for a fresh home."},
  {id:36,name:"Mosquito Coil",category:"Household",price:60,rating:4.6,image:"images/mosquito-coil.jpg",desc:"Reliable mosquito coils for peaceful, bite free evenings."}
];

let cart = JSON.parse(localStorage.getItem("shopzen-cart") || "[]");
let wishlist = JSON.parse(localStorage.getItem("shopzen-wishlist") || "[]");
let currentUser = JSON.parse(localStorage.getItem("shopzen-session") || "null");
let activeFilter = "All";
let searchTerm = "";
let selectedProduct = null;
let checkoutStep = 1;

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

function money(value){return `৳${value.toLocaleString("en-BD")}`}

/* ---------- Image load -> remove shimmer skeleton ---------- */
function watchImages(root){
  const scope = root || document;
  [...scope.querySelectorAll(".product-image, .category-image")].forEach(wrap=>{
    const img = wrap.querySelector("img");
    if(!img) return;
    const markLoaded = () => { img.classList.add("loaded"); wrap.classList.add("is-loaded"); };
    if(img.complete && img.naturalWidth) markLoaded();
    else{
      img.addEventListener("load", markLoaded, {once:true});
      img.addEventListener("error", markLoaded, {once:true});
    }
  });
}

function save(){
  localStorage.setItem("shopzen-cart", JSON.stringify(cart));
  localStorage.setItem("shopzen-wishlist", JSON.stringify(wishlist));
}

/* ---------- Auth: users + session (demo only, stored locally) ---------- */
function getUsers(){ return JSON.parse(localStorage.getItem("shopzen-users") || "[]"); }
function saveUsers(users){ localStorage.setItem("shopzen-users", JSON.stringify(users)); }
function saveSession(user){ currentUser = user; localStorage.setItem("shopzen-session", JSON.stringify(user)); }
function clearSession(){ currentUser = null; localStorage.removeItem("shopzen-session"); }

function getOrders(){ return JSON.parse(localStorage.getItem("shopzen-orders") || "[]"); }
function saveOrders(orders){ localStorage.setItem("shopzen-orders", JSON.stringify(orders)); }

function renderProducts(){
  const grid = $("#productGrid");
  const empty = $("#emptyState");
  const filtered = products.filter(p => {
    const categoryMatch = activeFilter === "All" || p.category === activeFilter;
    const searchMatch = `${p.name} ${p.category}`.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  grid.innerHTML = filtered.map(p => `
    <article class="product-card reveal visible">
      <div class="product-image">
        <button class="heart ${wishlist.includes(p.id) ? "liked" : ""}" data-wish="${p.id}" aria-label="Wishlist">${wishlist.includes(p.id) ? "♥" : "♡"}</button>
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <button class="quick-view" data-quick="${p.id}">QUICK VIEW</button>
      </div>
      <div class="product-info">
        <span class="product-category">${p.category}</span>
        <div class="product-name">${p.name}</div>
        <div class="product-bottom">
          <div><span class="price">${money(p.price)}</span></div>
          <div style="display:flex;align-items:center;gap:8px"><span class="rating">★ ${p.rating}</span><button class="add-btn" data-add="${p.id}" aria-label="Add ${p.name}">+</button></div>
        </div>
      </div>
    </article>
  `).join("");

  empty.style.display = filtered.length ? "none" : "block";
  watchImages(grid);
}

function updateCounts(){
  const cartTotal = cart.reduce((sum,item)=>sum+item.qty,0);
  $(".cart-count").textContent = cartTotal;
  $(".cart-count").classList.toggle("show",cartTotal>0);
  $(".wishlist-count").textContent = wishlist.length;
  $(".wishlist-count").classList.toggle("show",wishlist.length>0);
}

/* ---------- Account UI ---------- */
function renderAccount(){
  const icon = $("#accountIcon");
  const btn = $("#accountBtn");
  const nameEl = $("#accountName");
  if(currentUser){
    icon.textContent = currentUser.name.trim().charAt(0).toUpperCase() || "👤";
    btn.classList.add("logged-in");
    nameEl.textContent = currentUser.name;
  } else {
    icon.textContent = "👤";
    btn.classList.remove("logged-in");
    nameEl.textContent = "—";
    $("#accountMenu").classList.remove("open");
  }
}

function addToCart(id, sourceEl){
  const product = products.find(p=>p.id===id);
  const existing = cart.find(item=>item.id===id);
  if(existing) existing.qty++;
  else cart.push({id,qty:1});
  save(); updateCounts(); renderCart(); showToast(`${product.name} added to your cart`);
  if(sourceEl) flyToCart(sourceEl, product);
  bumpCartCount();
}

/* Clones the product thumbnail and animates it flying into the cart icon */
function flyToCart(sourceEl, product){
  const cartBtn = $("#cartBtn");
  if(!cartBtn) return;
  const imgWrap = sourceEl.closest(".product-card")?.querySelector(".product-image img")
    || sourceEl.closest(".modal-card")?.querySelector(".modal-image img");
  if(!imgWrap) return;
  const startRect = imgWrap.getBoundingClientRect();
  const endRect = cartBtn.getBoundingClientRect();
  const clone = imgWrap.cloneNode(true);
  clone.classList.add("fly-item");
  clone.style.left = startRect.left + "px";
  clone.style.top = startRect.top + "px";
  clone.style.width = startRect.width + "px";
  clone.style.height = startRect.height + "px";
  clone.style.opacity = "1";
  document.body.appendChild(clone);
  requestAnimationFrame(()=>{
    clone.style.left = (endRect.left + endRect.width/2 - 14) + "px";
    clone.style.top = (endRect.top + endRect.height/2 - 14) + "px";
    clone.style.width = "28px";
    clone.style.height = "28px";
    clone.style.opacity = "0";
    clone.style.transform = "rotate(18deg)";
  });
  setTimeout(()=>clone.remove(),700);
}

function bumpCartCount(){
  const el = $(".cart-count");
  el.classList.remove("bump");
  void el.offsetWidth;
  el.classList.add("bump");
}

/* Small ripple + pop feedback on the +/add buttons */
function rippleOn(btn, evt){
  btn.classList.remove("pop"); void btn.offsetWidth; btn.classList.add("pop");
  const rect = btn.getBoundingClientRect();
  const ripple = document.createElement("span");
  ripple.className = "ripple";
  const size = Math.max(rect.width, rect.height);
  ripple.style.width = ripple.style.height = size + "px";
  const x = (evt?.clientX ?? rect.left + rect.width/2) - rect.left - size/2;
  const y = (evt?.clientY ?? rect.top + rect.height/2) - rect.top - size/2;
  ripple.style.left = x + "px";
  ripple.style.top = y + "px";
  btn.appendChild(ripple);
  setTimeout(()=>ripple.remove(),600);
}

function changeQty(id,delta){
  const item = cart.find(x=>x.id===id);
  if(!item) return;
  item.qty += delta;
  if(item.qty<=0) cart=cart.filter(x=>x.id!==id);
  save(); updateCounts(); renderCart();
}

function renderCart(){
  const items = $("#cartItems");
  const empty = $("#cartEmpty");
  const footer = $("#cartFooter");
  if(!cart.length){
    items.innerHTML=""; empty.style.display="block"; footer.style.display="none"; return;
  }
  empty.style.display="none"; footer.style.display="block";
  items.innerHTML = cart.map(item=>{
    const p=products.find(x=>x.id===item.id);
    return `<div class="cart-item">
      <img src="${p.image}" alt="${p.name}">
      <div><strong>${p.name}</strong><small>${p.category}</small>
        <div class="qty"><button data-dec="${p.id}">−</button><span>${item.qty}</span><button data-inc="${p.id}">+</button></div>
      </div>
      <span class="cart-item-price">${money(p.price*item.qty)}</span>
    </div>`;
  }).join("");
  const total=cart.reduce((sum,item)=>sum+products.find(p=>p.id===item.id).price*item.qty,0);
  $("#subtotal").textContent=money(total);
}

function showToast(message){
  $(".toast p").textContent=message;
  $(".toast").classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer=setTimeout(()=>$(".toast").classList.remove("show"),2200);
}

function openCart(){ $("#cartDrawer").classList.add("open"); $("#overlay").classList.add("show"); renderCart(); }
function closeCart(){ $("#cartDrawer").classList.remove("open"); $("#overlay").classList.remove("show"); }

function openModal(id){
  selectedProduct=products.find(p=>p.id===id);
  $("#modalImage").src=selectedProduct.image;
  $("#modalImage").alt=selectedProduct.name;
  $("#modalCategory").textContent=selectedProduct.category;
  $("#modalName").textContent=selectedProduct.name;
  $("#modalRating").textContent=`★ ${selectedProduct.rating}  ·  128 reviews`;
  $("#modalDescription").textContent=selectedProduct.desc;
  $("#modalPrice").textContent=money(selectedProduct.price);
  $("#quickModal").classList.add("open");
}
function closeModal(){ $("#quickModal").classList.remove("open"); }

function toggleWishlist(id){
  wishlist.includes(id) ? wishlist=wishlist.filter(x=>x!==id) : wishlist.push(id);
  save(); updateCounts(); renderProducts();
  showToast(wishlist.includes(id) ? "Added to wishlist" : "Removed from wishlist");
}

function setupReveal(){
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}})
  },{threshold:.12});
  $$(".reveal").forEach(el=>observer.observe(el));
}

$$(".filter").forEach(btn=>{
  btn.addEventListener("click",()=>{
    $$(".filter").forEach(x=>x.classList.remove("active"));
    btn.classList.add("active"); activeFilter=btn.dataset.filter; renderProducts();
  });
});

document.addEventListener("click",e=>{
  const add=e.target.closest("[data-add]");
  const wish=e.target.closest("[data-wish]");
  const quick=e.target.closest("[data-quick]");
  const inc=e.target.closest("[data-inc]");
  const dec=e.target.closest("[data-dec]");
  const category=e.target.closest("[data-category]");
  if(add){ rippleOn(add, e); addToCart(Number(add.dataset.add), add); }
  if(wish) toggleWishlist(Number(wish.dataset.wish));
  if(quick) openModal(Number(quick.dataset.quick));
  if(inc) changeQty(Number(inc.dataset.inc),1);
  if(dec){
    const id = Number(dec.dataset.dec);
    const item = cart.find(x=>x.id===id);
    const row = dec.closest(".cart-item");
    if(item && item.qty===1 && row){
      row.classList.add("removing");
      setTimeout(()=>changeQty(id,-1), 260);
    } else {
      changeQty(id,-1);
    }
  }
  if(category){
    activeFilter="All"; searchTerm="";
    $("#searchInput").value="";
    $$(".filter").forEach(x=>x.classList.toggle("active",x.dataset.filter==="All"));
    document.querySelector("#shop").scrollIntoView({behavior:"smooth"});
    renderProducts();
    setTimeout(()=>{
      const matches=products.filter(p=>p.category===category.dataset.category);
      $("#productGrid").innerHTML=matches.map(p=>`
        <article class="product-card reveal visible">
          <div class="product-image">
            <button class="heart ${wishlist.includes(p.id)?"liked":""}" data-wish="${p.id}">${wishlist.includes(p.id)?"♥":"♡"}</button>
            <img src="${p.image}" alt="${p.name}">
            <button class="quick-view" data-quick="${p.id}">QUICK VIEW</button>
          </div>
          <div class="product-info"><span class="product-category">${p.category}</span><div class="product-name">${p.name}</div><div class="product-bottom"><span class="price">${money(p.price)}</span><div style="display:flex;align-items:center;gap:8px"><span class="rating">★ ${p.rating}</span><button class="add-btn" data-add="${p.id}">+</button></div></div></div>
        </article>`).join("");
      watchImages($("#productGrid"));
    },100);
  }
});

$(".cartBtn");
$("#cartBtn").addEventListener("click",openCart);
$("#closeCart").addEventListener("click",closeCart);
$("#overlay").addEventListener("click",closeCart);
$("#closeModal").addEventListener("click",closeModal);
$("#quickModal").addEventListener("click",e=>{if(e.target.id==="quickModal")closeModal()});
$("#modalAdd").addEventListener("click",(e)=>{if(selectedProduct){addToCart(selectedProduct.id, e.currentTarget);closeModal();openCart()}});
$(".checkout-btn").addEventListener("click",openCheckout);
$("#dealBtn").addEventListener("click",()=>{$("#shop").scrollIntoView({behavior:"smooth"});showToast("Showing our best picks")});

$(".search-toggle").addEventListener("click",()=>{
  $(".search-panel").classList.toggle("open");
  if($(".search-panel").classList.contains("open")) setTimeout(()=>$("#searchInput").focus(),250);
});
$("#closeSearch").addEventListener("click",()=>$(".search-panel").classList.remove("open"));
$("#searchInput").addEventListener("input",e=>{searchTerm=e.target.value;renderProducts()});

$("#wishlistBtn").addEventListener("click",()=>{showToast(wishlist.length ? `${wishlist.length} item${wishlist.length>1?"s":""} in your wishlist` : "Your wishlist is empty")});
$("#menuBtn").addEventListener("click",()=>$("#mobileMenu").classList.toggle("open"));
$$(".mobile-menu a").forEach(a=>a.addEventListener("click",()=>$("#mobileMenu").classList.remove("open")));

$("#newsletterForm").addEventListener("submit",e=>{e.preventDefault();e.target.reset();showToast("Thanks! You're on the list.")});

window.addEventListener("scroll",()=>$("#header").classList.toggle("scrolled",window.scrollY>10));

/* ---------- Scroll progress bar ---------- */
function setupScrollProgress(){
  const bar = $("#scrollProgress");
  if(!bar) return;
  const update = () => {
    const h = document.documentElement;
    const scrolled = h.scrollTop;
    const max = h.scrollHeight - h.clientHeight;
    bar.style.width = max > 0 ? `${(scrolled/max)*100}%` : "0%";
  };
  window.addEventListener("scroll", update, {passive:true});
  update();
}

/* ---------- Animated counter (12k+ happy shoppers) ---------- */
function setupCountUp(){
  const els = $$(".count-up");
  if(!els.length) return;
  const animate = (el) => {
    const target = Number(el.dataset.target || "0");
    const suffix = el.dataset.suffix || "";
    const duration = 1400;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const value = Math.round(target * eased);
      el.textContent = (value >= 1000 ? (value/1000).toFixed(value % 1000 === 0 ? 0 : 1) + "k" : value) + suffix;
      if(p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){ animate(entry.target); observer.unobserve(entry.target); }
    });
  }, {threshold:.6});
  els.forEach(el=>observer.observe(el));
}

/* ---------- Hero ambient glow follows the cursor ---------- */
function setupHeroGlow(){
  const hero = $("#home");
  const glow = $("#heroGlow");
  if(!hero || !glow || window.matchMedia("(max-width: 900px)").matches) return;
  hero.addEventListener("mousemove",(e)=>{
    const rect = hero.getBoundingClientRect();
    glow.style.left = (e.clientX - rect.left) + "px";
    glow.style.top = (e.clientY - rect.top) + "px";
    glow.style.opacity = "1";
  });
  hero.addEventListener("mouseleave",()=>{ glow.style.opacity = ".55"; });
}

/* ---------- Subtle tilt on the hero visual card ---------- */
function setupHeroTilt(){
  const visual = $("#heroVisual");
  const card = document.querySelector(".hero-card-main");
  if(!visual || !card || window.matchMedia("(max-width: 900px)").matches) return;
  visual.addEventListener("mousemove",(e)=>{
    const rect = visual.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotate(3deg) rotateX(${py * -8}deg) rotateY(${px * 10}deg)`;
  });
  visual.addEventListener("mouseleave",()=>{ card.style.transform = "rotate(3deg)"; });
}

/* =======================================================================
   AUTH: login / signup / logout  (demo only — data stays in this browser)
   ======================================================================= */
function openAuth(tab){
  $("#authModal").classList.add("open");
  switchAuthTab(tab || "login");
  $("#loginError").textContent = ""; $("#signupError").textContent = "";
}
function closeAuth(){ $("#authModal").classList.remove("open"); }

function switchAuthTab(tab){
  $$(".auth-tab").forEach(t=>t.classList.toggle("active", t.dataset.tab===tab));
  $$(".auth-form").forEach(f=>f.classList.toggle("active", f.dataset.panel===tab));
}

$$(".auth-tab").forEach(t=>t.addEventListener("click",()=>switchAuthTab(t.dataset.tab)));
$$("[data-switch]").forEach(b=>b.addEventListener("click",()=>switchAuthTab(b.dataset.switch)));
$("#accountBtn").addEventListener("click",()=>{
  if(currentUser){ $("#accountMenu").classList.toggle("open"); }
  else openAuth("login");
});
document.addEventListener("click",(e)=>{
  if(!e.target.closest(".account-wrap")) $("#accountMenu").classList.remove("open");
});
$("#closeAuth").addEventListener("click",closeAuth);
$("#authModal").addEventListener("click",e=>{ if(e.target.id==="authModal") closeAuth(); });

$("#loginForm").addEventListener("submit",(e)=>{
  e.preventDefault();
  const email = $("#loginEmail").value.trim().toLowerCase();
  const password = $("#loginPassword").value;
  const user = getUsers().find(u=>u.email===email && u.password===password);
  if(!user){ $("#loginError").textContent = "No account matches that email and password."; return; }
  saveSession({name:user.name, email:user.email});
  renderAccount(); closeAuth(); showToast(`Welcome back, ${user.name.split(" ")[0]}!`);
  e.target.reset();
});

$("#signupForm").addEventListener("submit",(e)=>{
  e.preventDefault();
  const name = $("#signupName").value.trim();
  const email = $("#signupEmail").value.trim().toLowerCase();
  const password = $("#signupPassword").value;
  const users = getUsers();
  if(users.some(u=>u.email===email)){ $("#signupError").textContent = "An account with this email already exists."; return; }
  users.push({name,email,password}); saveUsers(users);
  saveSession({name,email});
  renderAccount(); closeAuth(); showToast(`Welcome to ShopZen, ${name.split(" ")[0]}!`);
  e.target.reset();
});

$("#logoutBtn").addEventListener("click",()=>{
  clearSession(); renderAccount(); $("#accountMenu").classList.remove("open");
  showToast("You've been logged out");
});

/* ---------- Order history ---------- */
function openOrders(){
  $("#accountMenu").classList.remove("open");
  const list = $("#ordersList");
  const empty = $("#ordersEmpty");
  const mine = getOrders().filter(o => currentUser ? o.email===currentUser.email : o.email==="guest");
  if(!mine.length){
    list.innerHTML=""; empty.classList.add("show");
  } else {
    empty.classList.remove("show");
    list.innerHTML = mine.slice().reverse().map(o=>`
      <div class="order-row">
        <div class="order-row-top"><strong>#${o.id}</strong><span>${o.status}</span></div>
        <small>${o.date} · ${o.items.length} item${o.items.length>1?"s":""} · ${o.payment==="card"?"Card":"Cash on delivery"}</small>
        <div class="order-total">${money(o.total)}</div>
      </div>
    `).join("");
  }
  $("#ordersModal").classList.add("open");
}
$("#ordersBtn").addEventListener("click",openOrders);
$("#closeOrders").addEventListener("click",()=>$("#ordersModal").classList.remove("open"));
$("#ordersModal").addEventListener("click",e=>{ if(e.target.id==="ordersModal") $("#ordersModal").classList.remove("open"); });

/* =======================================================================
   CHECKOUT: multi-step flow (shipping -> payment -> review -> confirm)
   ======================================================================= */
function openCheckout(){
  if(!cart.length) return;
  closeCart();
  if(currentUser && !$("#shipName").value) $("#shipName").value = currentUser.name;
  goToCheckoutStep(1);
  $("#checkoutModal").classList.add("open");
}
function closeCheckout(){ $("#checkoutModal").classList.remove("open"); }

function goToCheckoutStep(step){
  checkoutStep = step;
  $$(".c-step").forEach(s=>{
    const n = Number(s.dataset.step);
    s.classList.toggle("active", n===step);
    s.classList.toggle("done", n<step);
  });
  $$(".checkout-panel").forEach(p=>p.classList.toggle("active", p.dataset.panel===String(step)));
  if(step===3) renderReview();
}

$("#toPayment").addEventListener("click",()=>{
  const required = ["shipName","shipPhone","shipAddress","shipCity"];
  const missing = required.some(id => !$("#"+id).value.trim());
  if(missing){ $("#shipError").textContent = "Please fill in all required fields."; return; }
  $("#shipError").textContent = "";
  goToCheckoutStep(2);
});
$("#toShippingBack").addEventListener("click",()=>goToCheckoutStep(1));

$$(".pay-option").forEach(opt=>{
  opt.addEventListener("click",()=>{
    $$(".pay-option").forEach(o=>o.classList.remove("active"));
    opt.classList.add("active");
    opt.querySelector("input").checked = true;
    $("#cardFields").classList.toggle("show", opt.querySelector("input").value==="card");
  });
});

$("#toReview").addEventListener("click",()=>{
  const isCard = $("input[name=pay]:checked").value === "card";
  if(isCard){
    const num = $("#cardNumber").value.replace(/\s/g,"");
    const exp = $("#cardExpiry").value;
    const cvc = $("#cardCvc").value;
    if(num.length<12 || !exp.includes("/") || cvc.length<3){
      $("#paymentError").textContent = "Please enter a valid card number, expiry, and CVC.";
      return;
    }
  }
  $("#paymentError").textContent = "";
  goToCheckoutStep(3);
});
$("#toPaymentBack").addEventListener("click",()=>goToCheckoutStep(2));

const DELIVERY_FEE = 60;
function renderReview(){
  const items = $("#reviewItems");
  items.innerHTML = cart.map(item=>{
    const p = products.find(x=>x.id===item.id);
    return `<div class="review-row"><span>${p.name} × ${item.qty}</span><strong>${money(p.price*item.qty)}</strong></div>`;
  }).join("");
  const subtotal = cart.reduce((sum,item)=>sum+products.find(p=>p.id===item.id).price*item.qty,0);
  $("#reviewSubtotal").textContent = money(subtotal);
  $("#reviewDelivery").textContent = money(DELIVERY_FEE);
  $("#reviewTotal").textContent = money(subtotal + DELIVERY_FEE);
}

$("#placeOrder").addEventListener("click",()=>{
  const subtotal = cart.reduce((sum,item)=>sum+products.find(p=>p.id===item.id).price*item.qty,0);
  const order = {
    id: Math.random().toString(36).slice(2,8).toUpperCase(),
    email: currentUser ? currentUser.email : "guest",
    items: cart.map(item=>({id:item.id, qty:item.qty})),
    total: subtotal + DELIVERY_FEE,
    payment: $("input[name=pay]:checked").value,
    status: "Confirmed",
    date: new Date().toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})
  };
  const orders = getOrders(); orders.push(order); saveOrders(orders);

  $("#orderId").textContent = "#"+order.id;
  $$(".c-step").forEach(s=>s.classList.add("done"));
  $$(".checkout-panel").forEach(p=>p.classList.toggle("active", p.dataset.panel==="success"));

  cart = []; save(); updateCounts(); renderCart();
});

$("#backToShop").addEventListener("click",()=>{
  closeCheckout();
  ["shipName","shipPhone","shipAddress","shipCity","shipZip","cardNumber","cardExpiry","cardCvc"].forEach(id=>{ const el=$("#"+id); if(el) el.value=""; });
  goToCheckoutStep(1);
});
$("#closeCheckout").addEventListener("click",closeCheckout);
$("#checkoutModal").addEventListener("click",e=>{ if(e.target.id==="checkoutModal") closeCheckout(); });

renderProducts(); renderCart(); updateCounts(); renderAccount(); setupReveal();
setupScrollProgress(); setupCountUp(); setupHeroGlow(); setupHeroTilt();
watchImages(document);
