// backend/controllers/askUsController.js

const AskUs = require("../models/AskUsModel");

// Submit a new query
exports.submitQuery = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newQuery = new AskUs({ name, email, message });
    await newQuery.save();

    res
      .status(201)
      .json({ success: true, message: "Query submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Get all queries
exports.getAllQueries = async (req, res) => {
  try {
    const queries = await AskUs.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json({ success: true, queries });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
