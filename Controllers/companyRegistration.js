const organization = require("../Models/organization");
const user = require("../Models/userSchema");
const registerCompany = async (req, res) => {
  try {
    const { companyName, email, phone, address, gstNumber, additionalInfo } = req.body;
    const user = findById(req.user._id);    
    const existingOrganization = await organization.findOne({ email });
    if (existingOrganization) {
      return res.status(400).json({ message: "Organization already exists" });
    }
   const newOrganization = new organization({
      companyName,
      email,
      phone,
      address,
      gstNumber,
      additionalInfo,
      admin: user._id,
    });
 
    await newOrganization.save();
    user.company_id = newOrganization._id;
    await user.save();
    
    res.status(201).json({ message: "Organization registered successfully" });
  } catch (error) {
    console.error("Error registering organization:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = registerCompany;           