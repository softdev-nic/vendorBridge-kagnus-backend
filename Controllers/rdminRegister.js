const user = require("../Models/userSchema");
const bcrypt = require("bcryptjs");

const registerAdmin = async (req, res) => {
  try {
    const { name, email, password, role, phone, address, gstNumber } = req.body;

    // Check if the user already exists
    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
  } catch (error) {
    console.error("Error registering admin:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = registerAdmin;