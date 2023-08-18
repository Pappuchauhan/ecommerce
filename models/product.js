const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: true },
    image: { type: String },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "category",
      required: true,
    },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Product = mongoose.model("product", ProductSchema)

module.exports = { Product }
