const mongoose = require("mongoose");
const User = require("../models/User");

const seedUsers = async () => {
  await mongoose.connect("mongodb://localhost:27017/mongodb-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const users = [
    { name: "Alice", email: "alice@example.com", age: 30 },
    { name: "Bob", email: "bob@example.com", age: 25 },
    { name: "Carol", email: "carol@example.com", age: 35 },
  ];

  try {
    await User.insertMany(users);
    console.log("Users seeded successfully");
  } catch (err) {
    console.error("Error seeding users:", err);
  } finally {
    mongoose.connection.close();
  }
};

seedUsers();
