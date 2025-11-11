const express = require('express');
const path = require('path');
const app = express();

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint for products (optional - can be extended)
app.get('/api/products', (req, res) => {
  res.json({
    message: 'Products API endpoint',
    status: 'available'
  });
});

// API endpoint for orders (optional - can be extended)
app.post('/api/orders', (req, res) => {
  res.json({
    message: 'Order received',
    status: 'success',
    orderId: Math.random().toString(36).substr(2, 9)
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🛍️ E-Commerce App running on http://localhost:${PORT}`);
  console.log(`📂 Serving static files from public directory`);
});
