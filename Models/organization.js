const mongoose = require("mongoose");
const organizationSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
 
    phone: {
      type: String,
      required: true,
    },
    address: {
      adressLine1: {
        type: String,
        required: true,
      },
      addressLine2: {
        type: String,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },    
      postalCode: {
        type: String,
        required: true,
      },    
    },
    gstNumber: {
      type: String,
      required: true,
    },
    additionalInfo: {
        type: String
    
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },    

 

}
)

const Organization = mongoose.model("Organization", organizationSchema);

module.exports = Organization;  