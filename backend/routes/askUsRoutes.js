// backend/routes/askUsRoutes.js

const express = require("express");
const router = express.Router();
const askUsController = require("../controllers/AskUsController");

// Submit a query
router.post("/submit", askUsController.submitQuery);

// Get all queries
router.get("/all", askUsController.getAllQueries);

module.exports = router;
