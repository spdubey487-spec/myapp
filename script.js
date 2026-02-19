// Product data
const products = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        price: 1999,
        originalPrice: 2999,
        discount: 33,
        rating: 4.3,
        ratingCount: 1245,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        badge: "Best Seller"
    },
    {
        id: 2,
        name: "Men's Casual Shirt",
        price: 899,
        originalPrice: 1499,
        discount: 40,
        rating: 4.1,
        ratingCount: 890,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        name: "Smartphone 128GB",
        price: 18999,
        originalPrice: 24999,
        discount: 24,
        rating: 4.5,
        ratingCount: 3240,
        category: "mobiles",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        badge: "Trending"
    },
    {
        id: 4,
        name: "Kitchen Mixer Grinder",
        price: 2499,
        originalPrice: 3999,
        discount: 38,
        rating: 4.2,
        ratingCount: 765,
        category: "home",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 5,
        name: "Laptop 14-inch 8GB RAM",
        price: 54999,
        originalPrice: 69999,
        discount: 21,
        rating: 4.4,
        ratingCount: 1987,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        badge: "New Launch"
    },
    {
        id: 6,
        name: "Women's Handbag",
        price: 1299,
        originalPrice: 2599,
        discount: 50,
        rating: 4.0,
        ratingCount: 543,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 7,
        name: "Air Conditioner 1.5 Ton",
        price: 32999,
        originalPrice: 45999,
        discount: 28,
        rating: 4.3,
        ratingCount: 876,
        category: "appliances",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 8,
        name: "Skincare Gift Set",
        price: 1599,
        originalPrice: 2999,
        discount: 47,
        rating: 4.6,
        ratingCount: 1209,
        category: "beauty",
        image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        badge: "Popular"
    },
    {
        id: 9,
        name: "Remote Control Car",
        price: 1499,
        originalPrice: 2499,
        discount: 40,
        rating: 4.2,
        ratingCount: 432,
        category: "toys",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 10,
        name: "Smart Watch",
        price: 2999,
        originalPrice: 4999,
        discount: 40,
        rating: 4.0,
        ratingCount: 1567,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    }
];

// Cart and wishlist data
let cart = JSON.parse(localStorage.getItem('shopEasy_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('shopEasy_wishlist')) || [];
let currentSlide = 0;
const totalSlides = 3;

// DOM elements
const allProductsGrid = document.getElementById('all-products');
const dealsProductsGrid = document.getElementById('deals-products');
const cartCount = document.getElementById('cart-count');
const wishlistCount = document.getElementById('wishlist-count');
const cartTotalPrice = document.getElementById('cart-total-price');
const cartItemsContainer = document.getElementById('cart-items');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const loginBtn = document.getElementById('login-btn');
const cartBtn = document.getElementById('cart-btn');
const wishlistBtn = document.getElementById('wishlist-btn');
const loginModal = document.getElementById('login-modal');
const cartModal = document.getElementById('cart-modal');
const closeModalBtns = document.querySelectorAll('.close-modal');
const checkoutBtn = document.getElementById('checkout-btn');
const categoryLinks = document.querySelectorAll('.category');
const prevSlideBtn = document.getElementById('prev-slide');
const nextSlideBtn = document.getElementById('next-slide');
const dots = document.querySelectorAll('.dot');
const bannerSlides = document.querySelectorAll('.banner-slide');
// Dark mode functionality
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeIcon = darkModeToggle.querySelector('i');

// Check for saved dark mode preference
if (localStorage.getItem('dark-mode') === 'enabled') {
    enableDarkMode();
}

// Toggle dark mode
darkModeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

function enableDarkMode() {
    document.body.classList.add('dark-mode');
    darkModeIcon.classList.remove('fa-moon');
    darkModeIcon.classList.add('fa-sun');
    localStorage.setItem('dark-mode', 'enabled');
}

function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    darkModeIcon.classList.remove('fa-sun');
    darkModeIcon.classList.add('fa-moon');
    localStorage.setItem('dark-mode', 'disabled');
}

// Initialize the page
function init() {
    renderProducts();
    renderDeals();
    updateCartCount();
    updateWishlistCount();

    // Set up event listeners
    setupEventListeners();

    // Auto slide banner
    setInterval(nextSlide, 5000);
}

// Save data to local storage
function saveCart() {
    localStorage.setItem('shopEasy_cart', JSON.stringify(cart));
    updateCartCount();
}

function saveWishlist() {
    localStorage.setItem('shopEasy_wishlist', JSON.stringify(wishlist));
    updateWishlistCount();
}

// Render all products
function renderProducts(filterCategory = 'all') {
    allProductsGrid.innerHTML = '';

    const filteredProducts = filterCategory === 'all'
        ? products
        : products.filter(product => product.category === filterCategory);

    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        allProductsGrid.appendChild(productCard);
    });
}

// Render deals (first 4 products)
function renderDeals() {
    dealsProductsGrid.innerHTML = '';
    const deals = products.slice(0, 4);

    deals.forEach(product => {
        const productCard = createProductCard(product);
        dealsProductsGrid.appendChild(productCard);
    });
}

// Create a product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.id = product.id;
    card.dataset.category = product.category;

    const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));

    card.innerHTML = `
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price">
                ₹${product.price.toLocaleString()}
                ${product.originalPrice ? `<span class="product-original-price">₹${product.originalPrice.toLocaleString()}</span>` : ''}
            </div>
            ${product.discount ? `<div class="product-discount">${product.discount}% off</div>` : ''}
            <div class="product-rating">
                <div class="rating-stars">${stars}</div>
                <span>${product.rating}</span>
                <span class="rating-count">(${product.ratingCount})</span>
            </div>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            <button class="add-to-wishlist" data-id="${product.id}">Add to Wishlist</button>
        </div>
    `;

    return card;
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    showNotification(`${product.name} added to cart!`);
}

// Remove product from cart
function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
        saveCart();
        renderCartItems();
    }
}

// Update cart quantity
function updateCartQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity < 1) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            saveCart();
            renderCartItems();
        }
    }
}

// Add product to wishlist
function addToWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = wishlist.find(item => item.id === productId);

    if (!existingItem) {
        wishlist.push(product);
        saveWishlist();
        showNotification(`${product.name} added to wishlist!`);
    } else {
        showNotification(`${product.name} is already in your wishlist!`);
    }
}

// Update cart count display
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart total price
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    cartTotalPrice.textContent = totalPrice.toLocaleString();
}

// Update wishlist count display
function updateWishlistCount() {
    wishlistCount.textContent = wishlist.length;
}

// Render cart items in modal
function renderCartItems() {
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-msg">Your cart is empty</p>';
        return;
    }

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                    <span class="quantity-value">${item.quantity}</span>
                    <button class="quantity-btn increase" data-id="${item.id}">+</button>
                    <button class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `;

        cartItemsContainer.appendChild(cartItem);
    });

    // Add event listeners for quantity buttons
    document.querySelectorAll('.decrease').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            const item = cart.find(item => item.id === productId);
            if (item) updateCartQuantity(productId, item.quantity - 1);
        });
    });

    document.querySelectorAll('.increase').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            const item = cart.find(item => item.id === productId);
            if (item) updateCartQuantity(productId, item.quantity + 1);
        });
    });

    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.closest('.remove-item').dataset.id);
            removeFromCart(productId);
        });
    });
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background-color: #2874f0;
        color: white;
        padding: 12px 20px;
        border-radius: 4px;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: slideIn 0.3s ease, fadeOut 0.3s ease 2.7s;
    `;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Banner slider functions
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateSlider();
}

function updateSlider() {
    // Update slides
    bannerSlides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });

    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchBtn.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (searchTerm) {
            const filteredProducts = products.filter(product =>
                product.name.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm)
            );

            allProductsGrid.innerHTML = '';
            if (filteredProducts.length > 0) {
                filteredProducts.forEach(product => {
                    const productCard = createProductCard(product);
                    allProductsGrid.appendChild(productCard);
                });
            } else {
                allProductsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: #666;">No products found for "${searchTerm}"</p>`;
            }

            // Scroll to products section
            document.querySelector('.section-title').scrollIntoView({ behavior: 'smooth' });
        }
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });

    // Modal open/close
    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'flex';
    });

    cartBtn.addEventListener('click', () => {
        renderCartItems();
        cartModal.style.display = 'flex';
    });

    wishlistBtn.addEventListener('click', () => {
        showNotification(`You have ${wishlist.length} items in your wishlist!`);
    });

    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            loginModal.style.display = 'none';
            cartModal.style.display = 'none';
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    // Checkout button
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showNotification('Your cart is empty!');
            return;
        }

        const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        showNotification(`Order placed successfully! Total: ₹${totalPrice.toLocaleString()}`);
        cart = [];
        saveCart();
        renderCartItems();
        cartModal.style.display = 'none';
    });

    // Category filtering
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Update active category
            categoryLinks.forEach(c => c.classList.remove('active'));
            link.classList.add('active');

            // Filter products
            const category = link.dataset.category;
            renderProducts(category);
        });
    });

    // Banner navigation
    prevSlideBtn.addEventListener('click', prevSlide);
    nextSlideBtn.addEventListener('click', nextSlide);

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const slideIndex = parseInt(dot.dataset.slide);
            goToSlide(slideIndex);
        });
    });

    // Product card events (using event delegation)
    document.addEventListener('click', (e) => {
        // Add to cart button
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.dataset.id);
            addToCart(productId);
        }

        // Add to wishlist button
        if (e.target.classList.contains('add-to-wishlist')) {
            const productId = parseInt(e.target.dataset.id);
            addToWishlist(productId);
        }
    });

    // Login form submission
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Login successful!');
        loginModal.style.display = 'none';
    });
}

// Add CSS for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    
    .notification {
        position: fixed;
        top: 80px;
        right: 20px;
        background-color: #2874f0;
        color: white;
        padding: 12px 20px;
        border-radius: 4px;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: slideIn 0.3s ease, fadeOut 0.3s ease 2.7s;
    }
`;
document.head.appendChild(style);

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);