const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ['farmer', 'consumer', 'expert', 'supplier'] },
});

// Farmer Schema
const farmerSchema = new mongoose.Schema({
  user_id: { type: Number, required: true, unique: true },
  full_name: { type: String, required: true },
  phone: { type: String, required: true },
  location: { type: String, required: true },
});

// Consumer Schema
const consumerSchema = new mongoose.Schema({
  user_id: { type: Number, required: true, unique: true },
  full_name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
});

// Expert Schema
const expertSchema = new mongoose.Schema({
  user_id: { type: Number, required: true, unique: true },
  full_name: { type: String, required: true },
  expertise: { type: String, required: true },
  phone: { type: String, required: true },
});

// Supplier Schema
const supplierSchema = new mongoose.Schema({
  user_id: { type: Number, required: true, unique: true },
  company_name: { type: String, required: true },
  contact_person: { type: String, required: true },
  phone: { type: String, required: true },
  location: { type: String, required: true },
});

// Product Schema
const productSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  supplier_id: { type: Number, required: true },
  product_name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

// Farmer Product Schema
const farmerProductSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  farmer_id: { type: Number, required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  unit: { type: String, required: true },
  harvest_date: { type: String, required: true },
  expiry_date: { type: String, required: true },
  location: { type: String, required: true },
  organic: { type: Boolean, required: true },
  image_url: { type: String, required: true },
  status: { type: String, required: true },
  created_at: { type: String, required: true },
});

// Models
const User = mongoose.model('User', userSchema);
const Farmer = mongoose.model('Farmer', farmerSchema);
const Consumer = mongoose.model('Consumer', consumerSchema);
const Expert = mongoose.model('Expert', expertSchema);
const Supplier = mongoose.model('Supplier', supplierSchema);
const Product = mongoose.model('Product', productSchema);
const FarmerProduct = mongoose.model('FarmerProduct', farmerProductSchema);

module.exports = { User, Farmer, Consumer, Expert, Supplier, Product, FarmerProduct };