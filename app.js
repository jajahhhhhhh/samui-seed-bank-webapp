/**
 * SAMUI SEED BANK - Main Application JavaScript
 * A complete web application for Thailand's premier seed bank
 */

// ==============================================
// PRODUCTS DATA
// ==============================================
const products = [
  // Samui Seed Bank Own Seeds
  { id: 1, name: 'BEACH WEDDING', category: 'feminized', brand: 'FEMINIZED SEEDS', price: 1800, pack: 6, image: '', inStock: true },
  { id: 2, name: 'BLUE SHERBET', category: 'feminized', brand: 'FEMINIZED SEEDS', price: 1800, pack: 6, image: '', inStock: true },
  { id: 3, name: 'JELLY BEAN', category: 'feminized', brand: 'FEMINIZED SEEDS', price: 1800, pack: 6, image: '', inStock: true },
  { id: 4, name: 'PINK DIESEL', category: 'feminized', brand: 'FEMINIZED SEEDS', price: 1800, pack: 6, image: '', inStock: true },
  { id: 5, name: 'ZKITTLEZ', category: 'feminized', brand: 'FEMINIZED SEEDS', price: 1350, originalPrice: 2700, pack: 6, image: '', inStock: false, sale: true },
  { id: 6, name: 'RUNTZ', category: 'feminized', brand: 'FEMINIZED SEEDS', price: 1350, originalPrice: 2700, pack: 6, image: '', inStock: true, sale: true },
  { id: 7, name: 'PEANUT BUTTER', category: 'feminized', brand: 'FEMINIZED SEEDS', price: 1350, originalPrice: 2700, pack: 6, image: '', inStock: false, sale: true },
  { id: 8, name: 'PINEAPPLE KUSH', category: 'feminized', brand: 'FEMINIZED SEEDS', price: 1650, originalPrice: 3300, pack: 6, image: '', inStock: true, sale: true },
  { id: 9, name: 'JUNGLE LAVA', category: 'feminized', brand: 'FEMINIZED SEEDS', price: 1800, originalPrice: 3600, pack: 6, image: '', inStock: false, sale: true },
  { id: 10, name: 'BLUE CHEESE', category: 'feminized', brand: 'FEMINIZED SEEDS', price: 1500, originalPrice: 3000, pack: 6, image: '', inStock: true, sale: true },
  { id: 11, name: 'CHEESE COOKIES', category: 'feminized', brand: 'FEMINIZED SEEDS', price: 1860, originalPrice: 3720, pack: 6, image: '', inStock: true, sale: true },
  { id: 12, name: 'CHEESE', category: 'feminized', brand: 'FEMINIZED SEEDS', price: 1860, originalPrice: 3720, pack: 6, image: '', inStock: true, sale: true },
  { id: 13, name: 'AMNESIA HAZE', category: 'feminized', brand: 'FEMINIZED SEEDS', price: 1260, originalPrice: 2520, pack: 6, image: '', inStock: true, sale: true },
  { id: 14, name: 'TRUE OG', category: 'feminized', brand: 'FEMINIZED SEEDS', price: 1260, originalPrice: 2520, pack: 6, image: '', inStock: true, sale: true },
  { id: 15, name: 'SWEET TOOTH', category: 'feminized', brand: 'FEMINIZED SEEDS', price: 1860, originalPrice: 3000, pack: 6, image: '', inStock: true, sale: true },
  { id: 16, name: 'SKYWALKER OG', category: 'feminized', brand: 'FEMINIZED SEEDS', price: 1350, originalPrice: 2700, pack: 6, image: '', inStock: false, sale: true },
  { id: 17, name: 'SHISKBERRY COOKIES', category: 'feminized', brand: 'FEMINIZED SEEDS', price: 1800, originalPrice: 3600, pack: 6, image: '', inStock: true, sale: true },
  { id: 18, name: 'APPLE', category: 'feminized', brand: 'FEMINIZED SEEDS', price: 1350, originalPrice: 2700, pack: 6, image: '', inStock: false, sale: true },
  // Conscious Genetics
  { id: 19, name: 'FROZEN ROSÉ', category: 'conscious', brand: 'CONSCIOUS GENETICS', price: 2655, pack: 7, image: '', inStock: true },
  { id: 20, name: 'SOUR MCKUNTZ', category: 'conscious', brand: 'CONSCIOUS GENETICS', price: 2655, pack: 7, image: '', inStock: true },
  { id: 21, name: 'SOUR CUNTZ', category: 'conscious', brand: 'CONSCIOUS GENETICS', price: 2655, pack: 7, image: '', inStock: true },
  { id: 22, name: 'ZAPPLEWOODZ', category: 'conscious', brand: 'CONSCIOUS GENETICS', price: 2655, pack: 7, image: '', inStock: true },
  { id: 23, name: 'BLOOD DIAMONDS 2.0', category: 'conscious', brand: 'CONSCIOUS GENETICS', price: 2655, pack: 7, image: '', inStock: true },
  { id: 24, name: 'ORANGE RUNTZ CAKE 2.0', category: 'conscious', brand: 'CONSCIOUS GENETICS', price: 2655, pack: 7, image: '', inStock: true },
  { id: 25, name: 'RED KACHINA', category: 'conscious', brand: 'CONSCIOUS GENETICS', price: 2655, pack: 7, image: '', inStock: true },
  { id: 26, name: 'PINK WAFERZ', category: 'conscious', brand: 'CONSCIOUS GENETICS', price: 2655, pack: 7, image: '', inStock: true },
  { id: 27, name: 'PINK WAFERZ 2.0', category: 'conscious', brand: 'CONSCIOUS GENETICS', price: 2655, pack: 7, image: '', inStock: true },
  { id: 28, name: 'PINK MINTZ', category: 'conscious', brand: 'CONSCIOUS GENETICS', price: 2655, pack: 7, image: '', inStock: true },
  { id: 29, name: 'OG SCOTTI', category: 'regular', brand: 'CONSCIOUS GENETICS, REGULAR SEEDS', price: 3600, pack: 7, image: '', inStock: true },
  { id: 30, name: 'ZAPPLEZ 2.0', category: 'conscious', brand: 'CONSCIOUS GENETICS', price: 2655, pack: 7, image: '', inStock: true },
  { id: 31, name: 'PINK ZHEEZ', category: 'conscious', brand: 'CONSCIOUS GENETICS', price: 2655, pack: 7, image: '', inStock: true },
  { id: 32, name: 'PINK QUAVERS', category: 'conscious', brand: 'CONSCIOUS GENETICS', price: 2655, pack: 7, image: '', inStock: true },
  // Perfect Tree Seeds
  { id: 33, name: 'LIME OZZ X6', category: 'perfect-tree', brand: 'FEMINIZED SEEDS, PERFECT TREE SEEDS', price: 2450, pack: 6, image: '', inStock: true },
  { id: 34, name: 'COCONUT CREAM X6', category: 'perfect-tree', brand: 'FEMINIZED SEEDS, PERFECT TREE SEEDS', price: 2450, pack: 6, image: '', inStock: true },
  { id: 35, name: 'LOUKOUM X6', category: 'perfect-tree', brand: 'FEMINIZED SEEDS, PERFECT TREE SEEDS', price: 2450, pack: 6, image: '', inStock: true },
  { id: 36, name: 'RAINBOW TRIANGLE X6', category: 'perfect-tree', brand: 'FEMINIZED SEEDS, PERFECT TREE SEEDS', price: 2450, pack: 6, image: '', inStock: true },
  { id: 37, name: 'SUNSET CHERRIES X6', category: 'perfect-tree', brand: 'FEMINIZED SEEDS, PERFECT TREE SEEDS', price: 2450, pack: 6, image: '', inStock: true },
  { id: 38, name: 'CHERRY CRISP X6', category: 'perfect-tree', brand: 'FEMINIZED SEEDS, PERFECT TREE SEEDS', price: 2450, pack: 6, image: '', inStock: true },
  { id: 39, name: 'PICCHU X6', category: 'perfect-tree', brand: 'FEMINIZED SEEDS, PERFECT TREE SEEDS', price: 2450, pack: 6, image: '', inStock: true },
  { id: 40, name: 'BLUE PEACH X6', category: 'perfect-tree', brand: 'FEMINIZED SEEDS, PERFECT TREE SEEDS', price: 2450, pack: 6, image: '', inStock: true },
  { id: 41, name: 'MIDNIGHT SUNSET X6', category: 'perfect-tree', brand: 'FEMINIZED SEEDS, PERFECT TREE SEEDS', price: 2450, pack: 6, image: '', inStock: true },
  { id: 42, name: 'ROTTEN APPLE X6', category: 'perfect-tree', brand: 'FEMINIZED SEEDS, PERFECT TREE SEEDS', price: 2450, pack: 6, image: '', inStock: false },
  { id: 43, name: 'LEMON CURD X6', category: 'perfect-tree', brand: 'FEMINIZED SEEDS, PERFECT TREE SEEDS', price: 2450, pack: 6, image: '', inStock: true },
  { id: 44, name: 'PEACH LASSI X6', category: 'perfect-tree', brand: 'FEMINIZED SEEDS, PERFECT TREE SEEDS', price: 2450, pack: 6, image: '', inStock: true },
  { id: 45, name: 'LEMON COCONUT FAT BOMB X6', category: 'perfect-tree', brand: 'FEMINIZED SEEDS, PERFECT TREE SEEDS', price: 2450, pack: 6, image: '', inStock: true },
  { id: 46, name: 'COCO FRESH X6', category: 'perfect-tree', brand: 'FEMINIZED SEEDS, PERFECT TREE SEEDS', price: 2450, pack: 6, image: '', inStock: true },
];

// ==============================================
// CART STATE
// ==============================================
let cart = JSON.parse(localStorage.getItem('ssbCart') || '[]');

function saveCart() {
  localStorage.setItem('ssbCart', JSON.stringify(cart));
  updateCartUI();
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product || !product.inStock) return;
  
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart();
  showToast(product.name + ' added to cart!');
}

function updateCartUI() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  
  document.getElementById('cartCount').textContent = count;
  document.getElementById('cartTotal').textContent = total.toLocaleString() + ' ฿';
  
  const cartItems = document.getElementById('cartItems');
  if (cartItems) {
    if (cart.length === 0) {
      cartItems.innerHTML = '<p style="color:#888;text-align:center;padding:20px">Your cart is empty</p>';
    } else {
      cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
          <div class="cart-item-info">
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-price">${item.price.toLocaleString()} ฿ x ${item.qty}</div>
          </div>
          <button onclick="removeFromCart(${item.id})" style="background:none;border:1px solid #c00;color:#c00;padding:4px 8px;border-radius:4px;cursor:pointer">Remove</button>
        </div>
      `).join('');
    }
  }
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
}

function toggleCart() {
  const modal = document.getElementById('cartModal');
  modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
}

// ==============================================
// TOAST NOTIFICATIONS
// ==============================================
function showToast(message) {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed; bottom: 100px; right: 20px;
    background: #c8914a; color: #000;
    font-family: 'Oswald', sans-serif; font-weight: 700;
    letter-spacing: 1px; padding: 12px 24px;
    border-radius: 8px; z-index: 9999;
    animation: slideIn 0.3s ease;
    box-shadow: 0 4px 20px rgba(200,145,74,0.4);
  `;
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}

// ==============================================
// PRODUCTS RENDERING
// ==============================================
let activeFilter = 'all';

function getProductColor(productId) {
  const colors = [
    'linear-gradient(135deg, #1a0a00, #3a1500)',
    'linear-gradient(135deg, #0a1500, #1a3500)',
    'linear-gradient(135deg, #000a1a, #001535)',
    'linear-gradient(135deg, #1a001a, #350035)',
    'linear-gradient(135deg, #1a1a00, #353500)',
    'linear-gradient(135deg, #001a1a, #003535)',
    'linear-gradient(135deg, #1a0a0a, #350505)',
    'linear-gradient(135deg, #0a0a1a, #050535)',
  ];
  return colors[productId % colors.length];
}

function renderProducts(filter = 'all') {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  
  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
  
  grid.innerHTML = filtered.map(product => `
    <div class="product-card" data-category="${product.category}">
      <div class="product-image-wrap" style="background: ${getProductColor(product.id)}">
        ${product.image ? `<img src="${product.image}" alt="${product.name}" loading="lazy">` : 
          `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:Oswald,sans-serif;font-size:22px;font-weight:700;color:rgba(200,145,74,0.6);letter-spacing:2px;text-align:center;padding:20px;">${product.name}</div>`}
        ${!product.inStock ? '<span class="product-badge out-of-stock">OUT OF STOCK</span>' : ''}
        ${product.sale ? '<span class="product-badge">SALE!</span>' : ''}
      </div>
      <div class="product-info">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-category">${product.brand}</p>
        <div class="product-price">
          ${product.originalPrice ? `<div class="original">${product.originalPrice.toLocaleString()} ฿</div>` : ''}
          <div class="current">${product.price.toLocaleString()} ฿</div>
          <div class="pack-info">/ pack of ${product.pack} seeds</div>
        </div>
        ${product.inStock 
          ? `<button class="btn-add-cart" onclick="addToCart(${product.id})">Add to Cart</button>`
          : `<button class="btn-add-cart btn-read-more" disabled>Read More</button>`
        }
      </div>
    </div>
  `).join('');
}

function filterProducts(filter) {
  activeFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  renderProducts(filter);
}

// ==============================================
// HERO CAROUSEL
// ==============================================
let currentSlide = 0;
const slides = document.querySelectorAll ? 0 : 0;

function initCarousel() {
  const inner = document.getElementById('carouselInner');
  if (!inner) return;
  
  const slideEls = inner.querySelectorAll('.carousel-slide');
  let current = 0;
  const total = slideEls.length;
  
  window.moveCarousel = function(dir) {
    slideEls[current].classList.remove('active');
    current = (current + dir + total) % total;
    slideEls[current].classList.add('active');
    inner.style.transform = `translateX(-${current * 100}%)`;
  };
  
  // Auto-play
  setInterval(() => moveCarousel(1), 5000);
}

// ==============================================
// MOBILE MENU
// ==============================================
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }
}

// ==============================================
// SMOOTH SCROLL
// ==============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ==============================================
// NEWSLETTER
// ==============================================
function handleSubscribe(e) {
  e.preventDefault();
  const email = e.target.querySelector('.email-input').value;
  if (email) {
    showToast('Thank you for subscribing!');
    e.target.reset();
  }
}

// ==============================================
// STICKY HEADER
// ==============================================
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 200 && currentScroll > lastScroll) {
      header.style.transform = 'translateY(-100%)';
      header.style.transition = 'transform 0.3s ease';
    } else {
      header.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
  });
}

// ==============================================
// CART CLICK HANDLER
// ==============================================
function initCartToggle() {
  const cartIcon = document.querySelector('.cart-icon');
  if (cartIcon) {
    cartIcon.addEventListener('click', (e) => {
      e.preventDefault();
      toggleCart();
    });
  }
  // Close modal when clicking outside
  document.addEventListener('click', (e) => {
    const modal = document.getElementById('cartModal');
    if (modal && modal.style.display === 'block' && !modal.contains(e.target) && !e.target.closest('.cart-icon')) {
      modal.style.display = 'none';
    }
  });
}

// ==============================================
// INTERSECTION OBSERVER - ANIMATE ON SCROLL
// ==============================================
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.product-card, .about-container, .info-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// ==============================================
// SEARCH FUNCTIONALITY
// ==============================================
function initSearch() {
  // Add search bar to page
  const searchHtml = `
    <div id="searchBar" style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);z-index:10000;padding:20px;">
      <input type="text" id="searchInput" placeholder="Search seeds..." 
             style="width:80%;max-width:600px;display:block;margin:100px auto 20px;padding:15px 25px;font-size:20px;background:#1a1a1a;border:2px solid #c8914a;border-radius:30px;color:#fff;outline:none;"
             oninput="searchProducts(this.value)">
      <button onclick="closeSearch()" style="position:absolute;top:20px;right:30px;background:none;border:none;color:#fff;font-size:30px;cursor:pointer">×</button>
      <div id="searchResults" style="max-width:600px;margin:0 auto;"></div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', searchHtml);
  
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSearch();
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
  });
}

function openSearch() {
  document.getElementById('searchBar').style.display = 'block';
  document.getElementById('searchInput').focus();
}

function closeSearch() {
  document.getElementById('searchBar').style.display = 'none';
}

function searchProducts(query) {
  const results = document.getElementById('searchResults');
  if (!query) { results.innerHTML = ''; return; }
  
  const found = products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
  results.innerHTML = found.slice(0, 5).map(p => `
    <div onclick="closeSearch(); document.querySelector('.products-section').scrollIntoView({behavior:'smooth'})" 
         style="padding:12px 20px;background:#1a1a1a;margin:5px 0;border-radius:8px;cursor:pointer;color:#e0e0e0;font-family:Oswald,sans-serif;letter-spacing:1px;border:1px solid #2a2a2a">
      ${p.name} <span style="color:#c8914a;float:right">${p.price.toLocaleString()} ฿</span>
    </div>
  `).join('') || '<p style="color:#888;text-align:center">No results found</p>';
}

// ==============================================
// INITIALIZATION
// ==============================================


// ==============================================
// LANGUAGE SELECTOR
// ==============================================

const translations = {
  en: {
    navSeeds: 'Seeds', navNutrients: 'Nutrients', navAbout: 'About', navContact: 'Contact',
    freeShipping: '🚚 Free Shipping in Thailand',
    heroTitle1: 'EXCLUSIVE OFFICIAL', heroHighlight1: 'THAI LANDRACE', heroSub1: 'HANG KA ROCK',
    heroTitle2: 'PREMIUM', heroHighlight2: 'FEMINIZED SEEDS', heroSub2: 'FROM THAILAND',
    heroTitle3: 'WORLD CLASS', heroHighlight3: 'GENETICS', heroSub3: 'DELIVERED',
    shopNow: 'SHOP NOW', explore: 'EXPLORE', discover: 'DISCOVER',
    ourMedical: 'Our Medical', seeds: 'Seeds',
    filterAll: 'All Seeds', filterFeminized: 'Feminized', filterRegular: 'Regular',
    filterConscious: 'Conscious Genetics', filterPerfect: 'Perfect Tree',
    addToCart: 'Add to Cart', readMore: 'Read More',
    packOf: 'pack of', seedsUnit: 'seeds',
    aboutTitle: 'Medical Seeds in Thailand', aboutSub: 'Seeds from around the world',
    aboutP1: 'Samui Seed Bank collaborates with esteemed global breeders to curate exceptional strains for medical purposes.',
    aboutP2: 'Our meticulously selected genetics offer unparalleled medical qualities, rigorously tested for potency, purity and consistency.',
    infoTitle: 'Your Gateway to Medical Excellence!',
    infoP1: 'Discover Samui Seed Bank: Your Gateway to Medical Excellence! Nestled in the heart of Chaweng on Koh Samui Island.',
    infoBtn: 'Unlock a world of Alternative Medicine!',
    contactTitle: 'Contact Us', contactSub: 'Your Gateway to Medical Excellence!',
    emailPlaceholder: 'Enter your email', subscribe: 'Subscribe',
    copyright: '© Copyright 2025 – All Right Reserved — Samui Seed Bank',
    langTitle: 'Select Language',
    chatWith: '💬 Chat with us',
    outOfStock: 'OUT OF STOCK', sale: 'SALE!'
  },
  th: {
    navSeeds: 'เมล็ดพันธุ์', navNutrients: 'ปุ๋ย', navAbout: 'เกี่ยวกับ', navContact: 'ติดต่อ',
    freeShipping: '🚚 จัดส่งฟรีทั่วไทย',
    heroTitle1: 'สายพันธุ์แท้', heroHighlight1: 'ไทยแลนด์เรส', heroSub1: 'แฮงค์ กา ร็อค',
    heroTitle2: 'พรีเมียม', heroHighlight2: 'เมล็ดเพศเมีย', heroSub2: 'จากประเทศไทย',
    heroTitle3: 'พันธุกรรม', heroHighlight3: 'ระดับโลก', heroSub3: 'ส่งถึงมือคุณ',
    shopNow: 'ซื้อเลย', explore: 'สำรวจ', discover: 'ค้นพบ',
    ourMedical: 'เมล็ดพันธุ์', seeds: 'ทางการแพทย์',
    filterAll: 'ทั้งหมด', filterFeminized: 'เพศเมีย', filterRegular: 'ปกติ',
    filterConscious: 'Conscious Genetics', filterPerfect: 'Perfect Tree',
    addToCart: 'เพิ่มในตะกร้า', readMore: 'อ่านเพิ่มเติม',
    packOf: 'แพ็ค', seedsUnit: 'เมล็ด',
    aboutTitle: 'เมล็ดพันธุ์ทางการแพทย์ในประเทศไทย', aboutSub: 'เมล็ดพันธุ์จากทั่วโลก',
    aboutP1: 'ซามุยซีดแบงก์ร่วมมือกับนักเพาะพันธุ์ชั้นนำจากทั่วโลกเพื่อคัดสรรสายพันธุ์พิเศษเพื่อวัตถุประสงค์ทางการแพทย์',
    aboutP2: 'พันธุกรรมที่เราคัดสรรอย่างพิถีพิถันมีคุณภาพทางการแพทย์ที่ไม่มีใครเทียบ ผ่านการทดสอบความเข้มข้น ความบริสุทธิ์และความสม่ำเสมออย่างเข้มงวด',
    infoTitle: 'ประตูสู่ความเป็นเลิศทางการแพทย์!',
    infoP1: 'ค้นพบซามุยซีดแบงก์ ตั้งอยู่ใจกลางเมืองแหลมบ้านใน บนเกาะสมุย เป็นธนาคารยีนทางการแพทย์แห่งแรกและแห่งเดียวบนเกาะสมุย',
    infoBtn: 'ปลดล็อกโลกแห่งยาทางเลือก!',
    contactTitle: 'ติดต่อเรา', contactSub: 'ประตูสู่ความเป็นเลิศทางการแพทย์!',
    emailPlaceholder: 'กรอกอีเมลของคุณ', subscribe: 'สมัครสมาชิก',
    copyright: '© สงวนลิขสิทธิ์ 2025 — ซามุยซีดแบงก์',
    langTitle: 'เลือกภาษา',
    chatWith: '💬 แชทกับเรา',
    outOfStock: 'สินค้าหมด', sale: 'ลดราคา!'
  },
  zh: {
    navSeeds: '种子', navNutrients: '营养', navAbout: '关于', navContact: '联系',
    freeShipping: '🚚 泰国免费配送',
    heroTitle1: '独家官方', heroHighlight1: '泰国地方品种', heroSub1: '汉卡摇滚',
    heroTitle2: '优质', heroHighlight2: '雌性化种子', heroSub2: '来自泰国',
    heroTitle3: '世界级', heroHighlight3: '基因', heroSub3: '直接配送',
    shopNow: '立即购买', explore: '探索', discover: '发现',
    ourMedical: '我们的医疗', seeds: '种子',
    filterAll: '全部种子', filterFeminized: '雌性化', filterRegular: '普通',
    filterConscious: 'Conscious Genetics', filterPerfect: 'Perfect Tree',
    addToCart: '加入购物车', readMore: '阅读更多',
    packOf: '每包', seedsUnit: '粒种子',
    aboutTitle: '泰国医疗种子', aboutSub: '来自世界各地的种子',
    aboutP1: '苏梅岛种子银行与全球知名育种者合作，精选用于医疗用途的优质品种。',
    aboutP2: '我们精心挑选的基因提供无与伦比的医疗品质，经过严格的效力、纯度和一致性测试。',
    infoTitle: '您通往医疗卓越的门户！',
    infoP1: '发现苏梅岛种子银行：位于苏梅岛查汶镇中心，是苏梅岛第一家也是唯一一家真正的医疗基因库。',
    infoBtn: '开启替代医学的世界！',
    contactTitle: '联系我们', contactSub: '您通往医疗卓越的门户！',
    emailPlaceholder: '输入您的电子邮件', subscribe: '订阅',
    copyright: '© 版权所有 2025 — 苏梅岛种子银行',
    langTitle: '选择语言',
    chatWith: '💬 与我们聊天',
    outOfStock: '缺货', sale: '促销!'
  },
  ja: {
    navSeeds: '種子', navNutrients: '栄養素', navAbout: '概要', navContact: 'お問い合わせ',
    freeShipping: '🚚 タイ国内送料無料',
    heroTitle1: '独占公式', heroHighlight1: 'タイランドレース', heroSub1: 'ハン・カ・ロック',
    heroTitle2: 'プレミアム', heroHighlight2: '雌化種子', heroSub2: 'タイから',
    heroTitle3: 'ワールドクラス', heroHighlight3: '遺伝子', heroSub3: 'お届け',
    shopNow: '今すぐ購入', explore: '探索', discover: '発見',
    ourMedical: '医療', seeds: '種子',
    filterAll: 'すべての種子', filterFeminized: '雌化', filterRegular: 'レギュラー',
    filterConscious: 'Conscious Genetics', filterPerfect: 'Perfect Tree',
    addToCart: 'カートに追加', readMore: '詳細を見る',
    packOf: 'パック', seedsUnit: '粒',
    aboutTitle: 'タイの医療用種子', aboutSub: '世界中からの種子',
    aboutP1: 'サムイ・シード・バンクは、医療目的のための優れた品種を厳選するために、世界的な育種家と協力しています。',
    aboutP2: '厳選された遺伝子は、効力、純度、一貫性について厳格にテストされた比類のない医療品質を提供します。',
    infoTitle: '医療の卓越性へのゲートウェイ！',
    infoP1: 'サムイ・シード・バンクを発見：コサムイ島のチャウエン中心部に位置し、コサムイ島初の本物の医療遺伝子銀行です。',
    infoBtn: '代替医療の世界を解放！',
    contactTitle: 'お問い合わせ', contactSub: '医療の卓越性へのゲートウェイ！',
    emailPlaceholder: 'メールアドレスを入力', subscribe: '購読',
    copyright: '© 著作権 2025 — サムイ・シード・バンク',
    langTitle: '言語を選択',
    chatWith: '💬 チャットする',
    outOfStock: '在庫切れ', sale: 'セール!'
  },
  ko: {
    navSeeds: '씨앗', navNutrients: '영양제', navAbout: '소개', navContact: '연락처',
    freeShipping: '🚚 태국 내 무료 배송',
    heroTitle1: '독점 공식', heroHighlight1: '태국 란드레이스', heroSub1: '항 카 록',
    heroTitle2: '프리미엄', heroHighlight2: '여성화 씨앗', heroSub2: '태국에서',
    heroTitle3: '세계 수준', heroHighlight3: '유전자', heroSub3: '직배송',
    shopNow: '지금 구매', explore: '탐색', discover: '발견',
    ourMedical: '의료용', seeds: '씨앗',
    filterAll: '모든 씨앗', filterFeminized: '여성화', filterRegular: '일반',
    filterConscious: 'Conscious Genetics', filterPerfect: 'Perfect Tree',
    addToCart: '장바구니 추가', readMore: '자세히 보기',
    packOf: '팩당', seedsUnit: '씨앗',
    aboutTitle: '태국의 의료용 씨앗', aboutSub: '세계 각지의 씨앗',
    aboutP1: '사무이 시드 뱅크는 의료 목적을 위한 우수한 품종을 선별하기 위해 세계적인 육종가들과 협력합니다.',
    aboutP2: '엄격하게 선별된 유전자는 효능, 순도, 일관성을 철저히 검증한 탁월한 의료 품질을 제공합니다.',
    infoTitle: '의료 우수성의 관문!',
    infoP1: '사무이 시드 뱅크 발견: 코사무이 섬의 차웽 중심부에 위치하며, 코사무이 섬 최초이자 유일한 진정한 의료 유전자 은행입니다.',
    infoBtn: '대체 의학의 세계를 열어보세요!',
    contactTitle: '연락처', contactSub: '의료 우수성의 관문!',
    emailPlaceholder: '이메일을 입력하세요', subscribe: '구독',
    copyright: '© 저작권 2025 — 사무이 시드 뱅크',
    langTitle: '언어 선택',
    chatWith: '💬 채팅하기',
    outOfStock: '품절', sale: '세일!'
  },
  de: {
    navSeeds: 'Samen', navNutrients: 'Nährstoffe', navAbout: 'Über uns', navContact: 'Kontakt',
    freeShipping: '🚚 Kostenloser Versand in Thailand',
    heroTitle1: 'EXKLUSIV OFFIZIELL', heroHighlight1: 'THAI LANDRACE', heroSub1: 'HANG KA ROCK',
    heroTitle2: 'PREMIUM', heroHighlight2: 'FEMINISIERTE SAMEN', heroSub2: 'AUS THAILAND',
    heroTitle3: 'WELTKLASSE', heroHighlight3: 'GENETIK', heroSub3: 'GELIEFERT',
    shopNow: 'JETZT KAUFEN', explore: 'ERKUNDEN', discover: 'ENTDECKEN',
    ourMedical: 'Unsere Medizinischen', seeds: 'Samen',
    filterAll: 'Alle Samen', filterFeminized: 'Feminisiert', filterRegular: 'Regulär',
    filterConscious: 'Conscious Genetics', filterPerfect: 'Perfect Tree',
    addToCart: 'In den Warenkorb', readMore: 'Mehr lesen',
    packOf: 'Packung mit', seedsUnit: 'Samen',
    aboutTitle: 'Medizinische Samen in Thailand', aboutSub: 'Samen aus aller Welt',
    aboutP1: 'Samui Seed Bank arbeitet mit renommierten globalen Züchtern zusammen, um außergewöhnliche Sorten für medizinische Zwecke zu kuratieren.',
    aboutP2: 'Unsere sorgfältig ausgewählte Genetik bietet unübertroffene medizinische Qualitäten, streng getestet auf Wirksamkeit, Reinheit und Konsistenz.',
    infoTitle: 'Ihr Tor zur medizinischen Exzellenz!',
    infoP1: 'Entdecken Sie Samui Seed Bank: Im Herzen von Chaweng auf Koh Samui gelegen, die erste und einzige echte medizinische Genbank auf Koh Samui.',
    infoBtn: 'Erschließen Sie eine Welt der Alternativmedizin!',
    contactTitle: 'Kontaktieren Sie uns', contactSub: 'Ihr Tor zur medizinischen Exzellenz!',
    emailPlaceholder: 'E-Mail eingeben', subscribe: 'Abonnieren',
    copyright: '© Copyright 2025 – Alle Rechte vorbehalten — Samui Seed Bank',
    langTitle: 'Sprache wählen',
    chatWith: '💬 Chatten Sie mit uns',
    outOfStock: 'AUSVERKAUFT', sale: 'SALE!'
  },
  fr: {
    navSeeds: 'Graines', navNutrients: 'Nutriments', navAbout: 'À propos', navContact: 'Contact',
    freeShipping: '🚚 Livraison gratuite en Thaïlande',
    heroTitle1: 'EXCLUSIF OFFICIEL', heroHighlight1: 'LANDRACE THAÏ', heroSub1: 'HANG KA ROCK',
    heroTitle2: 'PREMIUM', heroHighlight2: 'GRAINES FÉMINISÉES', heroSub2: 'DE THAÏLANDE',
    heroTitle3: 'DE CLASSE MONDIALE', heroHighlight3: 'GÉNÉTIQUE', heroSub3: 'LIVRÉ',
    shopNow: 'ACHETER', explore: 'EXPLORER', discover: 'DÉCOUVRIR',
    ourMedical: 'Nos Graines', seeds: 'Médicales',
    filterAll: 'Toutes', filterFeminized: 'Féminisées', filterRegular: 'Régulières',
    filterConscious: 'Conscious Genetics', filterPerfect: 'Perfect Tree',
    addToCart: 'Ajouter au panier', readMore: 'En savoir plus',
    packOf: 'pack de', seedsUnit: 'graines',
    aboutTitle: 'Graines médicales en Thaïlande', aboutSub: 'Graines du monde entier',
    aboutP1: 'Samui Seed Bank collabore avec des éleveurs mondiaux réputés pour sélectionner des variétés exceptionnelles à des fins médicales.',
    aboutP2: 'Notre génétique méticuleusement sélectionnée offre des qualités médicales inégalées, rigoureusement testées pour la puissance, la pureté et la cohérence.',
    infoTitle: 'Votre porte vers l\'excellence medicale!',
    infoP1: 'Découvrez Samui Seed Bank : Niché au cœur de Chaweng sur l\'ile de Koh Samui, la première et unique vraie banque de gènes médicaux de Koh Samui.',
    infoBtn: 'Ouvrez un monde de médecine alternative!',
    contactTitle: 'Contactez-nous', contactSub: 'Votre porte vers l\'excellence medicale!',
    emailPlaceholder: 'Entrez votre email', subscribe: 'S\'abonner',
    copyright: '© Copyright 2025 – Tous droits réservés — Samui Seed Bank',
    langTitle: 'Choisir la langue',
    chatWith: '💬 Discutez avec nous',
    outOfStock: 'RUPTURE DE STOCK', sale: 'SOLDE!'
  },
  es: {
    navSeeds: 'Semillas', navNutrients: 'Nutrientes', navAbout: 'Acerca de', navContact: 'Contacto',
    freeShipping: '🚚 Envío gratis en Tailandia',
    heroTitle1: 'EXCLUSIVO OFICIAL', heroHighlight1: 'LANDRACE TAILANDÉS', heroSub1: 'HANG KA ROCK',
    heroTitle2: 'PREMIUM', heroHighlight2: 'SEMILLAS FEMINIZADAS', heroSub2: 'DE TAILANDIA',
    heroTitle3: 'DE CLASE MUNDIAL', heroHighlight3: 'GENÉTICA', heroSub3: 'ENTREGADO',
    shopNow: 'COMPRAR', explore: 'EXPLORAR', discover: 'DESCUBRIR',
    ourMedical: 'Nuestras Semillas', seeds: 'Medicinales',
    filterAll: 'Todas', filterFeminized: 'Feminizadas', filterRegular: 'Regulares',
    filterConscious: 'Conscious Genetics', filterPerfect: 'Perfect Tree',
    addToCart: 'Agregar al carrito', readMore: 'Leer más',
    packOf: 'paquete de', seedsUnit: 'semillas',
    aboutTitle: 'Semillas medicinales en Tailandia', aboutSub: 'Semillas de todo el mundo',
    aboutP1: 'Samui Seed Bank colabora con reputados criadores mundiales para seleccionar variedades excepcionales con fines médicos.',
    aboutP2: 'Nuestra genética meticulosamente seleccionada ofrece calidades medicinales inigualables, rigurosamente probadas en potencia, pureza y consistencia.',
    infoTitle: '¡Tu puerta hacia la excelencia médica!',
    infoP1: 'Descubre Samui Seed Bank: Ubicado en el corazón de Chaweng en la isla de Koh Samui, el primero y único banco de genes médicos real en Koh Samui.',
    infoBtn: '¡Desbloquea un mundo de medicina alternativa!',
    contactTitle: 'Contáctenos', contactSub: '¡Tu puerta hacia la excelencia médica!',
    emailPlaceholder: 'Ingrese su email', subscribe: 'Suscribir',
    copyright: '© Copyright 2025 – Todos los derechos reservados — Samui Seed Bank',
    langTitle: 'Seleccionar idioma',
    chatWith: '💬 Chatea con nosotros',
    outOfStock: 'AGOTADO', sale: '¡OFERTA!'
  },
  ru: {
    navSeeds: 'Семена', navNutrients: 'Питание', navAbout: 'О нас', navContact: 'Контакт',
    freeShipping: '🚚 Бесплатная доставка по Таиланду',
    heroTitle1: 'ЭКСКЛЮЗИВНЫЙ', heroHighlight1: 'ТАЙСКИЙ ЛЭНДРЕЙС', heroSub1: 'ХЭНГ КА РОК',
    heroTitle2: 'ПРЕМИУМ', heroHighlight2: 'ФЕМИНИЗИРОВАННЫЕ СЕМЕНА', heroSub2: 'ИЗ ТАИЛАНДА',
    heroTitle3: 'МИРОВОГО КЛАССА', heroHighlight3: 'ГЕНЕТИКА', heroSub3: 'ДОСТАВКА',
    shopNow: 'КУПИТЬ', explore: 'ИССЛЕДОВАТЬ', discover: 'ОТКРЫТЬ',
    ourMedical: 'Наши Медицинские', seeds: 'Семена',
    filterAll: 'Все семена', filterFeminized: 'Феминизированные', filterRegular: 'Обычные',
    filterConscious: 'Conscious Genetics', filterPerfect: 'Perfect Tree',
    addToCart: 'В корзину', readMore: 'Читать далее',
    packOf: 'упаковка', seedsUnit: 'семян',
    aboutTitle: 'Медицинские семена в Таиланде', aboutSub: 'Семена со всего мира',
    aboutP1: 'Samui Seed Bank сотрудничает с известными мировыми селекционерами для отбора исключительных сортов в медицинских целях.',
    aboutP2: 'Наша тщательно отобранная генетика предлагает непревзойденные медицинские качества, строго протестированные на эффективность, чистоту и консистентность.',
    infoTitle: 'Ваши ворота к медицинскому совершенству!',
    infoP1: 'Откройте для себя Samui Seed Bank: Расположен в самом сердце Чавенга на острове Ко Самуи — первый и единственный настоящий медицинский генный банк на Ко Самуи.',
    infoBtn: 'Откройте мир альтернативной медицины!',
    contactTitle: 'Свяжитесь с нами', contactSub: 'Ваши ворота к медицинскому совершенству!',
    emailPlaceholder: 'Введите email', subscribe: 'Подписаться',
    copyright: '© Авторские права 2025 — Samui Seed Bank',
    langTitle: 'Выбрать язык',
    chatWith: '💬 Чат с нами',
    outOfStock: 'НЕТ В НАЛИЧИИ', sale: 'СКИДКА!'
  },
  ar: {
    navSeeds: 'بذور', navNutrients: 'مغذيات', navAbout: 'حول', navContact: 'اتصل',
    freeShipping: '🚚 شحن مجاني في تايلاند',
    heroTitle1: 'حصري رسمي', heroHighlight1: 'سلالة تايلاندية', heroSub1: 'هانج كا روك',
    heroTitle2: 'بريميوم', heroHighlight2: 'بذور مؤنثة', heroSub2: 'من تايلاند',
    heroTitle3: 'عالمي المستوى', heroHighlight3: 'جينات', heroSub3: 'توصيل',
    shopNow: 'اشتري الآن', explore: 'استكشف', discover: 'اكتشف',
    ourMedical: 'بذورنا', seeds: 'الطبية',
    filterAll: 'كل البذور', filterFeminized: 'مؤنثة', filterRegular: 'عادية',
    filterConscious: 'Conscious Genetics', filterPerfect: 'Perfect Tree',
    addToCart: 'أضف إلى السلة', readMore: 'اقرأ المزيد',
    packOf: 'عبوة من', seedsUnit: 'بذور',
    aboutTitle: 'بذور طبية في تايلاند', aboutSub: 'بذور من حول العالم',
    aboutP1: 'يتعاون Samui Seed Bank مع مربين عالميين متميزين لاختيار سلالات استثنائية للأغراض الطبية.',
    aboutP2: 'تقدم جيناتنا المختارة بعناية جودة طبية لا مثيل لها، تم اختبارها بدقة للتأكد من الفاعلية والنقاء والاتساق.',
    infoTitle: 'بوابتك إلى التميز الطبي!',
    infoP1: 'اكتشف Samui Seed Bank: يقع في قلب Chaweng في جزيرة Koh Samui، أول وحيد بنك جينات طبي حقيقي في كوه ساموي.',
    infoBtn: 'افتح عالماً من الطب البديل!',
    contactTitle: 'اتصل بنا', contactSub: 'بوابتك إلى التميز الطبي!',
    emailPlaceholder: 'أدخل بريدك الإلكتروني', subscribe: 'اشترك',
    copyright: '© حقوق النشر 2025 — Samui Seed Bank',
    langTitle: 'اختر اللغة',
    chatWith: '💬 تحدث معنا',
    outOfStock: 'نفذ المخزون', sale: 'تخفيض!'
  }
};

let currentLanguage = localStorage.getItem('ssbLang') || 'en';

function toggleLangMenu() {
  const menu = document.getElementById('langMenu');
  const btn = document.getElementById('langBtn');
  menu.classList.toggle('open');
  btn.classList.toggle('open');
}

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('ssbLang', lang);
  
  // Update active button
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });
  
  // Update current language label
  const labels = {
    en: 'EN', th: 'TH', zh: '中文', ja: '日本', ko: '한국',
    de: 'DE', fr: 'FR', es: 'ES', ru: 'RU', ar: 'AR'
  };
  document.getElementById('currentLang').textContent = labels[lang] || lang.toUpperCase();
  
  // Apply RTL for Arabic
  document.body.classList.toggle('lang-ar', lang === 'ar');
  document.documentElement.lang = lang;
  
  // Update all text content
  applyTranslations(lang);
  
  // Re-render products with translated strings
  renderProducts(activeFilter);
  
  // Close menu
  toggleLangMenu();
  
  showToast('Language: ' + (labels[lang] || lang.toUpperCase()));
}

function applyTranslations(lang) {
  const t = translations[lang] || translations.en;
  
  // Nav links
  const navLinks = document.querySelectorAll('#navLinks a');
  if (navLinks[0]) navLinks[0].textContent = t.navSeeds;
  if (navLinks[1]) navLinks[1].textContent = t.navNutrients;
  if (navLinks[2]) navLinks[2].textContent = t.navAbout;
  if (navLinks[3]) navLinks[3].textContent = t.navContact;
  
  // Free shipping
  const freeShip = document.querySelector('.free-shipping');
  if (freeShip) freeShip.textContent = t.freeShipping;
  
  // Hero carousel
  const heroSlides = document.querySelectorAll('.carousel-slide .slide-content h2');
  const heroData = [
    [t.heroTitle1, t.heroHighlight1, t.heroSub1, t.shopNow],
    [t.heroTitle2, t.heroHighlight2, t.heroSub2, t.explore],
    [t.heroTitle3, t.heroHighlight3, t.heroSub3, t.discover]
  ];
  heroSlides.forEach((h2, i) => {
    if (heroData[i]) {
      h2.innerHTML = heroData[i][0] + '<br><span class="highlight">' + heroData[i][1] + '</span><br>' + heroData[i][2];
      const btn = h2.nextElementSibling;
      if (btn) btn.textContent = heroData[i][3];
    }
  });
  
  // Section title
  const sectionTitleSpan = document.querySelector('.section-title span');
  const sectionTitleText = document.querySelector('.section-title');
  if (sectionTitleSpan && sectionTitleText) {
    sectionTitleSpan.textContent = t.ourMedical;
    sectionTitleText.innerHTML = '<span>' + t.ourMedical + '</span> ' + t.seeds;
  }
  
  // Filter buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  const filterKeys = ['filterAll', 'filterFeminized', 'filterRegular', 'filterConscious', 'filterPerfect'];
  filterBtns.forEach((btn, i) => {
    if (filterKeys[i] && t[filterKeys[i]]) btn.textContent = t[filterKeys[i]];
  });
  
  // About section
  const aboutH2 = document.querySelector('.about-text h2');
  if (aboutH2) aboutH2.textContent = t.aboutTitle;
  const aboutH3 = document.querySelector('.about-text h3');
  if (aboutH3) aboutH3.textContent = t.aboutSub;
  const aboutPs = document.querySelectorAll('.about-text p');
  if (aboutPs[0]) aboutPs[0].textContent = t.aboutP1;
  if (aboutPs[1]) aboutPs[1].textContent = t.aboutP2;
  
  // Info section
  const infoH3 = document.querySelector('.info-content h3');
  if (infoH3) infoH3.textContent = t.infoTitle;
  const infoPs = document.querySelectorAll('.info-content p');
  if (infoPs[0]) infoPs[0].textContent = t.infoP1;
  const infoBtn = document.querySelector('.info-content .btn-primary');
  if (infoBtn) infoBtn.textContent = t.infoBtn;
  
  // Newsletter
  const contactH2 = document.querySelector('.newsletter-section h2');
  if (contactH2) contactH2.textContent = t.contactTitle;
  const contactP = document.querySelector('.newsletter-section p');
  if (contactP) contactP.textContent = t.contactSub;
  const emailInput = document.querySelector('.email-input');
  if (emailInput) emailInput.placeholder = t.emailPlaceholder;
  const subscribeBtn = document.querySelector('.btn-subscribe');
  if (subscribeBtn) subscribeBtn.textContent = t.subscribe;
  
  // Footer copyright
  const footerCopy = document.querySelector('.footer-copy');
  if (footerCopy) footerCopy.innerHTML = t.copyright;
  
  // WhatsApp button
  const waBtn = document.querySelector('.whatsapp-btn');
  if (waBtn) waBtn.textContent = t.chatWith;
  
  // Lang menu title
  const langMenuTitle = document.querySelector('.lang-menu-title');
  if (langMenuTitle) langMenuTitle.textContent = t.langTitle;
}

function initLanguageSelector() {
  // Apply saved language on page load
  const savedLang = localStorage.getItem('ssbLang') || 'en';
  if (savedLang !== 'en') {
    setLanguage(savedLang);
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    const container = document.getElementById('langSelectorContainer');
    if (container && !container.contains(e.target)) {
      const menu = document.getElementById('langMenu');
      const btn = document.getElementById('langBtn');
      if (menu) menu.classList.remove('open');
      if (btn) btn.classList.remove('open');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts('all');
  initCarousel();
  initMobileMenu();
  initSmoothScroll();
  initAnimations();
  initCartToggle();
  initSearch();
  updateCartUI();
  initLanguageSelector();
  
  // Add style for animation keyframe
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from { transform: translateX(100px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
  `;
  document.head.appendChild(style);
  
  console.log('Samui Seed Bank app initialized!');
  console.log('Products loaded:', products.length);
});
