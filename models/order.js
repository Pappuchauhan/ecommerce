const mongoose = require("mongoose");
const orderSchema = mongoose.Schema(
  {
    price: { type: Number, required: true },
    product: { type: mongoose.Types.ObjectId, ref: "product", required: true },
    user: { type: mongoose.Types.ObjectId, ref: "user", required: true },
    address: { type: string, required: true },
    status: { type: string, default: "" },
    quantity: { type: Number, required: true },
    payment_method: { type: String, default: "COD", required: true },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Order = mongoose.model('order',orderSchema)

module.exports = { Order }
 