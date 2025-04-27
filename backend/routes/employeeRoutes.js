const express = require("express");
const router = express.Router();

// Import your controller functions
const {
  addEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");

// Route Definitions
router.post("/addEmployee", addEmployee); // Ensure addEmployee is a function
router.get("/getEmployee", getEmployees); // Ensure getEmployees is a function
router.get("/getEmployee/:id", getEmployeeById); // Ensure getEmployeeById is a function
router.put("/updateEmployee/:id", updateEmployee); // Ensure updateEmployee is a function
router.delete("/deleteEmployee/:id", deleteEmployee); // Ensure deleteEmployee is a function

module.exports = router;
