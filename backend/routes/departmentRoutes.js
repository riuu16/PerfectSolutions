const express = require("express");
const router = express.Router();

// Import your controller functions
const {
  addDepartment,
  getDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
} = require("../controllers/departmentController");

// Route Definitions
router.post("/addDepartment", addDepartment); // Ensure addDepartment is a function
router.get("/getDepartment", getDepartments); // Ensure getDepartments is a function
router.get("/getDepartment/:id", getDepartmentById); // Ensure getDepartmentById is a function
router.put("/updateDepartment/:id", updateDepartment); // Ensure updateDepartment is a function
router.put("/deleteDepartment/:id", deleteDepartment); // Ensure deleteDepartment is a function

module.exports = router;
