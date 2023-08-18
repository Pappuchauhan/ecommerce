const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    isActive: { type: Boolean, required: true, default: false },
    isAdmin: {type: Boolean, required: true, default: false}
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const User = mongoose.model("user", userSchema)
module.exports = { User }
