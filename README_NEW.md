# 🛍️ E-Commerce App

A modern, fully-responsive e-commerce web application built with Node.js, Express, and vanilla JavaScript. Features an interactive UI with product browsing, shopping cart, and checkout functionality.

## ✨ Features

### Frontend
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Interactive UI**: Smooth animations and transitions for better user experience
- **Product Filtering**: Filter products by categories (Electronics, Fashion, Home)
- **Shopping Cart**: Add/remove products, persistent cart using localStorage
- **Smooth Scrolling**: Navigation links with smooth scroll behavior
- **Contact Form**: Get in touch section for customer inquiries
- **Toast Notifications**: Real-time feedback for user actions

### Backend
- **Express Server**: Lightweight and fast Node.js server
- **Static File Serving**: Serves HTML, CSS, and JavaScript files
- **RESTful API**: Extensible API endpoints for future features
- **Error Handling**: 404 error handling with fallback to index

### Product Catalog
12 pre-loaded products across 3 categories:
- **Electronics**: Wireless Headphones, Smart Watch, USB-C Cable, Keyboard, Portable Speaker
- **Fashion**: Designer T-Shirt, Sneakers, Winter Jacket
- **Home**: Laptop Stand, Desk Lamp, Plant Pot, Wall Clock

## 📁 Project Structure

```
ecommerce-app/
├── app/
│   ├── public/
│   │   ├── index.html       # Main HTML file
│   │   ├── styles.css       # Styling and responsive design
│   │   ├── script.js        # Interactive functionality
│   ├── server.js            # Express server configuration
│   ├── package.json         # Node.js dependencies
│   └── Dockerfile           # Docker configuration
└── README.md                # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ecommerce-app
   ```

2. **Navigate to app directory**
   ```bash
   cd app
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the server**
   ```bash
   npm start
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🐳 Running with Docker

### Build Docker Image
```bash
docker build -t ecommerce-app .
```

### Run Docker Container
```bash
docker run -p 3000:3000 ecommerce-app
```

Then visit `http://localhost:3000` in your browser.

## 📚 Usage

### Browsing Products
1. Scroll down to the **Products** section or click "Shop Now"
2. Browse all products or filter by category (All, Electronics, Fashion, Home)
3. Each product card displays:
   - Product image (emoji icon)
   - Product name
   - Category
   - Description
   - Price
   - Add to Cart button

### Shopping Cart
1. Click **"Add to Cart"** on any product
2. Click the **🛒 Cart Icon** (top-right) to view your cart
3. View cart items with quantities and prices
4. **Remove items** using the Remove button
5. See the **total price** calculated automatically
6. Click **Checkout** to complete your purchase

### Navigation
- Use navbar links to navigate to different sections
- Smooth scrolling is enabled for all navigation
- Cart counter shows number of items in cart

### Contact
1. Scroll to the **Contact** section
2. Fill in your name, email, and message
3. Click **Send Message**
4. You'll receive a confirmation notification

## 🎨 Key Features Explained

### Responsive Design
The application uses CSS Grid and Flexbox for responsive layouts:
- Desktop: 4 products per row
- Tablet: 2-3 products per row
- Mobile: 1 product per row

### Shopping Cart Persistence
- Cart data is saved to browser's localStorage
- Cart persists even after page refresh
- Cart can hold multiple quantities of same product

### Product Filtering
- Filter buttons update the product display
- Active filter button is highlighted
- Smooth animations when products change

### UI/UX Features
- Hover effects on cards and buttons
- Loading animations on product cards
- Toast notifications for user feedback
- Modal popup for shopping cart
- Smooth color transitions

## 🔧 Customization

### Adding New Products
Edit `app/public/script.js` and add to the `products` array:

```javascript
{
    id: 13,
    name: 'Product Name',
    category: 'category-name',
    price: 99.99,
    emoji: '🎯',
    description: 'Product description'
}
```

### Changing Colors
Edit `app/public/styles.css` CSS variables:

```css
:root {
    --primary-color: #6c5ce7;
    --secondary-color: #a29bfe;
    --success-color: #00b894;
    --danger-color: #ff7675;
}
```

### Adding API Integration
The Express server already has routes for:
- `GET /api/products` - Get products
- `POST /api/orders` - Create orders

Extend these endpoints to connect to a database.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🔐 Features to Implement

- User authentication and registration
- Database integration (MongoDB/PostgreSQL)
- Payment gateway integration (Stripe/PayPal)
- Order tracking and history
- Product reviews and ratings
- Admin dashboard
- Email notifications
- Search functionality

## 📝 API Endpoints

### Current Endpoints
- `GET /` - Serve main page
- `GET /api/products` - Get products (stub)
- `POST /api/orders` - Create order (stub)

### Future Endpoints
- `GET /api/products/:id` - Get single product
- `GET /api/products?category=:category` - Filter products
- `POST /api/cart` - Save cart
- `GET /api/orders/:id` - Get order details
- `POST /api/checkout` - Process payment

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
# Change PORT environment variable
set PORT=3001
npm start
```

### Styles not loading
- Clear browser cache (Ctrl+Shift+Delete)
- Check that `public` folder exists
- Verify file paths in index.html

### Cart not persisting
- Check if localStorage is enabled in browser
- Check browser console for errors (F12)
- Ensure JavaScript is enabled

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For support, email support@ecommerce-app.com or create an issue in the repository.

---

**Made with ❤️ for e-commerce**
