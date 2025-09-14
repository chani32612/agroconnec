const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const { User, Farmer, Consumer, Expert, Supplier, Product, FarmerProduct } = require('./models'); // Import models

const app = express();
const PORT = 3000;

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/agroconnect') // Replace with your MongoDB URI
    .then(() => console.log('MongoDB connected successfully!'))
    .catch(err => console.error('MongoDB connection error:', err));

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route for the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

// General/Common Pages
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'common', 'about.html'));
});
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'common', 'contact.html'));
});
app.get('/faq', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'common', 'faq.html'));
});
app.get('/privacy-policy', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'common', 'privacy-policy.html'));
});
app.get('/terms-of-service', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'common', 'terms-of-service.html'));
});

// Consumer-specific Pages
app.get('/consumer/cart', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'consumer', 'cart.html'));
});
app.get('/consumer/catalog', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'consumer', 'catalog.html'));
});
app.get('/consumer/checkout', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'consumer', 'checkout.html'));
});
app.get('/consumer/messages', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'consumer', 'messages.html'));
});
app.get('/consumer/order-confirmation', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'consumer', 'order-confirmation.html'));
});
app.get('/consumer/orders', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'consumer', 'orders.html'));
});
app.get('/consumer/product-detail', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'consumer', 'product-detail.html'));
});
app.get('/consumer/product-review', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'consumer', 'product-review.html'));
});
app.get('/consumer/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'consumer', 'profile.html'));
});
app.get('/consumer-cart', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'consumer-cart.html'));
});
app.get('/consumer-dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'consumer-dashboard.html'));
});
app.get('/consumer-orders', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'consumer-orders.html'));
});
app.get('/consumer-profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'consumer-profile.html'));
});

// Farmer-specific Pages
app.get('/farmer/add-edit-product', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'farmer', 'add-edit-product.html'));
});
app.get('/farmer/analytics', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'farmer', 'analytics.html'));
});
app.get('/farmer/farmer-profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'farmer', 'farmer-profile.html'));
});
app.get('/farmer/messages', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'farmer', 'messages.html'));
});
app.get('/farmer/orders', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'farmer', 'orders.html'));
});
app.get('/farmer/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'farmer', 'profile.html'));
});
app.get('/farmer/sales-report', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'farmer', 'sales-report.html'));
});
app.get('/farmer-dashboard.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'farmer-dashboard.html'));
});
app.get('/farmer-orders.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'farmer', 'orders.html'));
});

app.get('/farmer-products-page', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'farmer-products-page.html'));
});

// Expert-specific Pages
app.get('/expert/article-editor', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'expert', 'article-editor.html'));
});
app.get('/expert/articles', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'expert', 'articles.html'));
});
app.get('/expert/expert-profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'expert', 'expert-profile.html'));
});
app.get('/expert/messages', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'expert', 'messages.html'));
});
app.get('/expert/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'expert', 'profile.html'));
});
app.get('/expert-consultation', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'expert-consultation.html'));
});
app.get('/expert-dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'expert-dashboard.html'));
});
app.get('/expert-knowledge', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'expert-knowledge.html'));
});

// Supplier-specific Pages
app.get('/supplier/add-edit-inventory', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'supplier', 'add-edit-inventory.html'));
});
app.get('/supplier/analytics', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'supplier', 'analytics.html'));
});
app.get('/supplier/catalog', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'supplier', 'catalog.html'));
});
app.get('/supplier/messages', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'supplier', 'messages.html'));
});
app.get('/supplier/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'supplier', 'profile.html'));
});
app.get('/supplier/supplier-profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'supplier', 'supplier-profile.html'));
});
app.get('/supplier-dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'supplier-dashboard.html'));
});
app.get('/supplier-inventory', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'supplier-inventory.html'));
});
app.get('/supplier-orders', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'supplier-orders.html'));
});

// Admin-specific Pages
app.get('/admin/content-moderation', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'admin', 'content-moderation.html'));
});
app.get('/admin/platform-analytics', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'admin', 'platform-analytics.html'));
});
app.get('/admin/user-management', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'admin', 'user-management.html'));
});

// Authentication Pages
app.get('/create-account', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'create-account.html'));
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'login.html'));
});

// Test Pages
app.get('/test-farmer-products', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'test-farmer-products.html'));
});
app.get('/test-integration', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'test-integration.html'));
});
app.get('/test-login', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'test-login.html'));
});
app.get('/test-logout', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'test-logout.html'));
});

// Index Page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

// Import FarmerProduct and Farmer models

// User registration endpoint
app.post('/register', async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // Basic validation
    if (!username || !email || !password || !role) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User with this email already exists' });
    }

    // Create new user
    const newUser = new User({
      username,
      email,
      password, // In a real application, you would hash the password
      role,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during user registration:', error);
    res.status(500).json({ message: 'Server error during registration' });
  }
});

// API endpoint to get all farmer products
app.get('/api/products', async (req, res) => {
  try {
    const products = await FarmerProduct.find();
    
    // Populate farmer details for each product
    const productsWithFarmerDetails = await Promise.all(products.map(async (product) => {
      const farmer = await Farmer.findOne({ user_id: product.farmer_id });
      return {
        ...product.toObject(),
        farmer_name: farmer ? farmer.full_name : 'Unknown Farmer',
        farmer_location: farmer ? farmer.location : 'Unknown Location',
      };
    }));
    
    res.json(productsWithFarmerDetails);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Start the server
try {
    app.listen(PORT, () => {
        console.log(`🌱 AgroConnect server is running on http://localhost:${PORT}`);
        console.log('📂 Serving files from:', __dirname);
    });
} catch (error) {
    console.error('Error starting server:', error);
}