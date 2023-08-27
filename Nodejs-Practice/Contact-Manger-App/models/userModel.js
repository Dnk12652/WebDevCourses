const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    username: { type: String, required: [true, "Please add the contact name"] },
    email: { type: String, required: [true, "Please add the contact email"] },
    password: { type: String, required: [true, "Please add the  phone number"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
