// src/pages/UpdateEmployee.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateEmployee = () => {
  // Get the employee ID from route parameters
  const { id } = useParams();
  const navigate = useNavigate();

  // State for employee fields, loading, and messages
  const [employee, setEmployee] = useState({
    name: "",
    position: "",
    department: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Fetch existing employee data on mount
  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/employee/${id}`
        );
        setEmployee(response.data); // Pre-fill form fields
      } catch (err) {
        setError("Failed to fetch employee data");
      } finally {
        setLoading(false);
      }
    };
    fetchEmployee();
  }, [id]);

  // Handle input changes by updating state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check required fields
    if (!employee.name || !employee.position || !employee.department) {
      setError("All fields are required");
      return;
    }
    setLoading(true);
    try {
      // Send PUT request to update employee
      await axios.put(
        `http://localhost:5000/api/employee/updateEmployee/${id}`,
        employee
      );
      setSuccess("Employee updated successfully!");
      setError("");
      // Redirect after a short delay
      setTimeout(() => navigate("/employees"), 2000);
    } catch (err) {
      setError("Failed to update employee");
    } finally {
      setLoading(false);
    }
  };

  // Render a loading indicator while fetching
  if (loading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Update Employee</h1>

      {/* Display error or success messages */}
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}

      <form onSubmit={handleSubmit}>
        {/* Name field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={employee.name}
            onChange={handleChange}
            required // HTML required attribute ensures a value is entered&#8203;:contentReference[oaicite:5]{index=5}
            className="border border-gray-300 rounded w-full p-2 mt-1"
          />
        </div>

        {/* Position field */}
        <div className="mb-4">
          <label htmlFor="position" className="block text-gray-700">
            Position
          </label>
          <input
            type="text"
            id="position"
            name="position"
            value={employee.position}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded w-full p-2 mt-1"
          />
        </div>

        {/* Department field */}
        <div className="mb-4">
          <label htmlFor="department" className="block text-gray-700">
            Department
          </label>
          <input
            type="text"
            id="department"
            name="department"
            value={employee.department}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded w-full p-2 mt-1"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Employee"}
        </button>
      </form>
    </div>
  );
};

export default UpdateEmployee;
