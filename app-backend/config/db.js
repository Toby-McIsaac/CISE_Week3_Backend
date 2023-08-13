// db.js

const mongoose = require('mongoose');
const config = require('config');
const db = "mongodb+srv://mcisaactoby:Lavapick229@atlascluster.vk3v3u0.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;