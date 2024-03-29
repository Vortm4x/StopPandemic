const mongoose = require('mongoose');
const security = require('./security');

const connectDB = async () => {
  try {
    await mongoose.connect(security.db_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
};

module.exports = connectDB;