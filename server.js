const express = require("express");
const connectToDb = require("./connectToDb");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to DB
connectToDb();

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
