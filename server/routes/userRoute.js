// routes/user.js
const express = require("express");
const router = express.Router();

// Import the User model and any other necessary dependencies

// Sample profile route
router.get("/profile/:username", async (req, res) => {
  const { username } = req.params;

  try {
    // Find the user in the database based on the username
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Return user profile data
    res.json({
      username: user.username,
      // Include other user-related fields here
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching user profile" });
  }
});

// Add other user-related routes as needed

module.exports = router;
