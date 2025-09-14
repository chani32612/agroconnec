const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const { User, Farmer, Consumer, Expert, Supplier, Product, FarmerProduct } = require('./models');

// MongoDB connection URI
const mongoURI = 'mongodb://localhost:27017/agroconnect';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected for seeding...'))
.catch(err => console.error('MongoDB connection error for seeding:', err));

// Read data from dataa.json
const dataPath = path.join(__dirname, 'dataa.json');
const rawData = fs.readFileSync(dataPath);
const data = JSON.parse(rawData);

const seedDatabase = async () => {
  try {
    // Clear existing data (optional, but good for fresh seeding)
    await User.deleteMany({});
    await Farmer.deleteMany({});
    await Consumer.deleteMany({});
    await Expert.deleteMany({});
    await Supplier.deleteMany({});
    await Product.deleteMany({});
    await FarmerProduct.deleteMany({});
    console.log('Existing data cleared.');

    // Insert new data
    await User.insertMany(data.users);
    await Farmer.insertMany(data.farmers);
    await Consumer.insertMany(data.consumers);
    await Expert.insertMany(data.experts);
    await Supplier.insertMany(data.suppliers);
    await Product.insertMany(data.products);
    await FarmerProduct.insertMany(data.farmer_products);
    console.log('Data successfully seeded!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.disconnect();
  }
};

seedDatabase();