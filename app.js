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
document.addEventListener('DOMContentLoaded', () => {
  renderProducts('all');
  initCarousel();
  initMobileMenu();
  initSmoothScroll();
  initAnimations();
  initCartToggle();
  initSearch();
  updateCartUI();
  
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
