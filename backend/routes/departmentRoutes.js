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
router.post("/addDepartment", addDepartment);
router.get("/getDepartment", getDepartments);
router.get("/getDepartment/:id", getDepartmentById);
router.put("/updateDepartment/:id", updateDepartment);
router.put("/deleteDepartment/:id", deleteDepartment);

module.exports = router;
