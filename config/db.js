const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/userdb', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Database connected successfully');
  } catch (err) {
    console.error('Error connecting to database:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
