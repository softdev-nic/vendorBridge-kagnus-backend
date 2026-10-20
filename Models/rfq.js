 const mongoose = require("mongoose");
const { CATEGORIES } = require("../constants/categories");

const rfqSchema = new mongoose.Schema(
  {
    rfqNumber: { type: String, unique: true }, // auto-generate, e.g. RFQ-2026-0001
    title: { type: String, required: true },
    description: String,
    category: { type: String, enum: CATEGORIES, required: true },
    deadline: { type: Date, required: true },
    status: {
      type: String,
      enum: ["draft", "sent", "quoted", "approved", "closed"],
      default: "draft",
    },
    items: [
      {
        itemName: { type: String, required: true },
        quantity: { type: Number, required: true, min: 1 },
        unit: { type: String, default: "pcs" },
      },
    ],
    invitedVendors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Organization" }],
    buyerOrganization: { type: mongoose.Schema.Types.ObjectId, ref: "Organization", required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("RFQ", rfqSchema);