// Sample Products Data
const products = [
    {
        id: 1,
        name: 'Wireless Headphones',
        category: 'electronics',
        price: 79.99,
        emoji: '🎧',
        description: 'Premium quality wireless headphones with noise cancellation'
    },
    {
        id: 2,
        name: 'Smart Watch',
        category: 'electronics',
        price: 199.99,
        emoji: '⌚',
        description: 'Feature-rich smartwatch with health tracking'
    },
    {
        id: 3,
        name: 'Laptop Stand',
        category: 'home',
        price: 49.99,
        emoji: '🖥️',
        description: 'Adjustable ergonomic laptop stand for better posture'
    },
    {
        id: 4,
        name: 'Designer T-Shirt',
        category: 'fashion',
        price: 29.99,
        emoji: '👕',
        description: 'Premium cotton t-shirt with modern designs'
    },
    {
        id: 5,
        name: 'Desk Lamp',
        category: 'home',
        price: 39.99,
        emoji: '💡',
        description: 'LED desk lamp with adjustable brightness'
    },
    {
        id: 6,
        name: 'USB-C Cable',
        category: 'electronics',
        price: 19.99,
        emoji: '🔌',
        description: 'Fast charging USB-C cable, 2 meters long'
    },
    {
        id: 7,
        name: 'Sneakers',
        category: 'fashion',
        price: 89.99,
        emoji: '👟',
        description: 'Comfortable and stylish sports sneakers'
    },
    {
        id: 8,
        name: 'Plant Pot',
        category: 'home',
        price: 24.99,
        emoji: '🪴',
        description: 'Modern ceramic plant pot, perfect for home decoration'
    },
    {
        id: 9,
        name: 'Portable Speaker',
        category: 'electronics',
        price: 59.99,
        emoji: '🔊',
        description: 'Waterproof portable speaker with 12-hour battery'
    },
    {
        id: 10,
        name: 'Winter Jacket',
        category: 'fashion',
        price: 129.99,
        emoji: '🧥',
        description: 'Warm and stylish winter jacket'
    },
    {
        id: 11,
        name: 'Keyboard',
        category: 'electronics',
        price: 69.99,
        emoji: '⌨️',
        description: 'Mechanical gaming keyboard with RGB lighting'
    },
    {
        id: 12,
        name: 'Wall Clock',
        category: 'home',
        price: 34.99,
        emoji: '🕐',
        description: 'Modern wall clock for any room'
    }
];

// Shopping Cart
let cart = [];
let currentFilter = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    loadCartFromStorage();
    updateCartCount();
});

// Render Products
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    let filteredProducts = products;
    if (currentFilter !== 'all') {
        filteredProducts = products.filter(p => p.category === currentFilter);
    }

    filteredProducts.forEach(product => {
        const card = createProductCard(product);
        grid.appendChild(card);
    });

    // Add animation effect
    const cards = grid.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">${product.emoji}</div>
        <div class="product-info">
            <div class="product-name">${product.name}</div>
            <div class="product-category">${product.category}</div>
            <div class="product-description">${product.description}</div>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        </div>
    `;
    return card;
}

// Filter Products
function filterProducts(category) {
    currentFilter = category;

    // Update button styles
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    renderProducts();
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCartCount();
    saveCartToStorage();
    showNotification('Added to cart!');
}

// Update Cart Count
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

// Open Cart
function openCart() {
    document.getElementById('cartModal').style.display = 'block';
    renderCart();
}

// Close Cart
function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

// Render Cart Items
function renderCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align: center; color: #636e72;">Your cart is empty</p>';
        document.getElementById('totalPrice').textContent = '0.00';
        return;
    }

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        const itemTotal = (item.price * item.quantity).toFixed(2);
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>Qty: ${item.quantity} × $${item.price.toFixed(2)}</p>
            </div>
            <div>
                <p class="cart-item-price">$${itemTotal}</p>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    updateTotalPrice();
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    saveCartToStorage();
    renderCart();
    showNotification('Removed from cart');
}

// Update Total Price
function updateTotalPrice() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('totalPrice').textContent = total.toFixed(2);
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Thank you for your purchase! Total: $${total.toFixed(2)}\n\nOrder will be delivered within 3-5 business days.`);
    
    cart = [];
    updateCartCount();
    saveCartToStorage();
    closeCart();
}

// Handle Contact Form
function handleContactSubmit(event) {
    event.preventDefault();
    showNotification('Message sent! We will contact you soon.');
    event.target.reset();
}

// Local Storage Functions
function saveCartToStorage() {
    localStorage.setItem('estore-cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('estore-cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Notifications
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--success-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        z-index: 2000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Add styles for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Scroll to Products
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Cart Icon Click
document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', openCart);
    }
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    const modal = document.getElementById('cartModal');
    if (event.target === modal) {
        closeCart();
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
