const user = require("../Models/userSchema")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body

    const existingUser = await user.findOne({ email })
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" })
    }

    const isPasswordValid = await bcrypt.compare(password, existingUser.password)
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" })
    }

    const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRET, {
      expiresIn: "20d",
    })

    res.status(200).json({ token })
  } catch (error) {
    console.error("Error logging in user:", error)
    res.status(500).json({ message: "Internal server error" })
  }
}

module.exports = loginUser  