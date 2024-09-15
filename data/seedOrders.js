const mongoose = require("mongoose");
const Order = require("../models/Order");
const User = require("../models/User");
const Product = require("../models/Product");

const seedOrders = async () => {
  await mongoose.connect("mongodb://localhost:27017/mongodb-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const users = await User.find();
  const products = await Product.find();

  const orders = [
    { userId: users[0]._id, productIds: [products[0]._id, products[1]._id] },
    { userId: users[1]._id, productIds: [products[2]._id] },
  ];

  try {
    await Order.insertMany(orders);
    console.log("Orders seeded successfully");
  } catch (err) {
    console.error("Error seeding orders:", err);
  } finally {
    mongoose.connection.close();
  }
};

seedOrders();
