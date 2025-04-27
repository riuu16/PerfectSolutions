const Department = require("../models/departmentModel");

// Controller functions

exports.addDepartment = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Name field is required" });
  }

  const newDepartment = new Department({ name });

  newDepartment
    .save()
    .then((department) => {
      res
        .status(201)
        .json({ message: "Department added successfully!", department });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error adding department", error: err });
    });
};

exports.getDepartments = (req, res) => {
  Department.find()
    .then((departments) => {
      res.status(200).json({ departments });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Error fetching departments", error: err });
    });
};

exports.getDepartmentById = (req, res) => {
  const { id } = req.params;

  Department.findById(id)
    .then((department) => {
      if (!department) {
        return res.status(404).json({ message: "Department not found" });
      }
      res.status(200).json({ department });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Error fetching department", error: err });
    });
};

exports.updateDepartment = (req, res) => {
  const { id } = req.params;

  // Check if req.body exists and name exists
  if (!req.body || !req.body.name) {
    return res.status(400).json({ message: "Name field is required in body" });
  }

  const { name } = req.body;

  Department.findByIdAndUpdate(id, { name }, { new: true })
    .then((department) => {
      if (!department) {
        return res.status(404).json({ message: "Department not found" });
      }
      res
        .status(200)
        .json({ message: "Department updated successfully!", department });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Error updating department", error: err });
    });
};

exports.deleteDepartment = (req, res) => {
  const { id } = req.params;

  Department.findByIdAndDelete(id)
    .then((department) => {
      if (!department) {
        return res.status(404).json({ message: "Department not found" });
      }
      res
        .status(200)
        .json({ message: "Department deleted successfully!", department });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Error deleting department", error: err });
    });
};

