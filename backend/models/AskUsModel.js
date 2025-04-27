// backend/models/askUsModel.js

const mongoose = require("mongoose");

const askUsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const AskUs = mongoose.model("AskUs", askUsSchema);

module.exports = AskUs;
