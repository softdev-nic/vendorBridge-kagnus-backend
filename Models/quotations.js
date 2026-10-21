const mongoose = require("mongoose");

const categories = ["Hardware", "Software", "Networking", "Security", "Cloud Services", "IT Support", "Consulting", "Training", "Other", "electronics", "Office Supplies", "Furniture", "Stationery", "Printing Services", "Marketing Services", "Legal Services", "Financial Services", "Human Resources", "Logistics", "Transportation", "Travel Services", "Event Management", "Catering Services", "Maintenance Services", "Cleaning Services", "Waste Management", "Energy Solutions", "Telecommunications", "Media and Advertising", "Research and Development", "Education and Training", "Healthcare Services", "construction", "Real Estate", "Insurance Services", "Security Services", "Environmental Services", "Agriculture and Farming", "Food and Beverage", "Retail and E-commerce", "Automotive Services", "Manufacturing and Industrial Services", "Arts and Entertainment", "Sports and Recreation", "Non-profit Organizations", "Government Services", "International Trade and Export-Import", "Technology Solutions", "Data Analytics and Business Intelligence", "Artificial Intelligence and Machine Learning", "Blockchain Technology", "Internet of Things (IoT)", "Virtual Reality (VR) and Augmented Reality (AR)", "Robotics and Automation", "3D Printing Services","culinary services", "event planning", "photography and videography", "graphic design", "web development", "mobile app development", "digital marketing", "social media management", "content creation", "translation and localization", "legal consulting", "financial consulting", "business consulting", "career coaching", "life coaching", "fitness training", "nutrition consulting", "mental health counseling", "language tutoring", "music lessons", "art classes", "dance classes", "yoga instruction", "personal styling and fashion consulting"];

const QuotationSchema = new mongoose.Schema(
  {
    vendor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    procurementOfficer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    quotationNumber: {
      type: String,
      required: true,
      unique: true,
    },
    approver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    items: [
      {
        itemName: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        unitPrice: {
          type: Number,
          required: true,
        },
        totalPrice: {
          type: Number,
          required: true,
        },
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    category: {
      type: String,
      enum: categories,
      required: true,
    },
  },
  { timestamps: true }
);

const Quotation = mongoose.model("Quotation", QuotationSchema);

module.exports = Quotation; 