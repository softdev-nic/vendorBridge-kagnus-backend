const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
   firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
},
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  
  role: {
    type: String,
    enum: ["user", "procurement officer", "admin","approver", "vendor"],
    default: "user",

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
  
    companyName: {
      type: String,
      required: true,
    },  
 
    additionalInfo: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    company_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
    },    
    
  },
 
)

const User = mongoose.model("User", userSchema);

module.exports = User;