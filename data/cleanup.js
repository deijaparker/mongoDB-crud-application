const mongoose = require("mongoose");
const User = require("../models/User");
const Product = require("../models/Product");
const Order = require("../models/Order");

const cleanup = async () => {
  await mongoose.connect("mongodb://localhost:27017/mongodb-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await User.deleteMany({});
    await Product.deleteMany({});
    await Order.deleteMany({});
    console.log("Database cleaned successfully");
  } catch (err) {
    console.error("Error cleaning database:", err);
  } finally {
    mongoose.connection.close();
  }
};

cleanup();
