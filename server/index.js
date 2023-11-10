// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Import the route files
const authRoutes = require("./routes/authRoute");
const userRoutes = require("./routes/userRoute");

// Use the route files as middleware
app.use("/auth", authRoutes); // All authentication routes will have /auth as the prefix
app.use("/user", userRoutes); // All user-related routes will have /user as the prefix

// Add other middleware and route handlers as needed

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
