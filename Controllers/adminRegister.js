const user = require("../Models/userSchema");
const bcrypt = require("bcryptjs");

const registerAdmin = async (req, res) => {
  try {
    const { name, email, password, role, phone, address} = req.body;

    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const newUser = new user({
      name,
      email,
      password: await bcrypt.hash(password, 10),
      role,
      phone,
      address,

    });

    await newUser.save();
    res.status(201).json({ message: "Admin registered successfully" });
  } catch (error) {
    console.error("Error registering admin:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = registerAdmin; 