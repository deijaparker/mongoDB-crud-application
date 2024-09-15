const mongoose = require("mongoose");
const Product = require("../models/Product");

const seedProducts = async () => {
  await mongoose.connect("mongodb://localhost:27017/mongodb-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const products = [
    { name: "Laptop", price: 999.99 },
    { name: "Phone", price: 599.99 },
    { name: "Tablet", price: 399.99 },
  ];

  try {
    await Product.insertMany(products);
    console.log("Products seeded successfully");
  } catch (err) {
    console.error("Error seeding products:", err);
  } finally {
    mongoose.connection.close();
  }
};

seedProducts();
