import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/employee/getEmployee"
    );
    setEmployees(res.data.employees);
  };

  const deleteEmployee = async (id) => {
    await axios.delete(
      `http://localhost:5000/api/employee/deleteEmployee/${id}`
    );
    fetchEmployees(); // Refresh list after deletion
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Employee List</h1>
      <div className="flex justify-end mb-4">
        <Link
          to="/add"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Employee
        </Link>
      </div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Position</th>
            <th className="py-2 px-4 border">Department</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp._id}>
              <td className="py-2 px-4 border">{emp.name}</td>
              <td className="py-2 px-4 border">{emp.position}</td>
              <td className="py-2 px-4 border">{emp.department}</td>
              <td className="py-2 px-4 border">
                <Link
                  to={`/update/${emp._id}`}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 mr-2"
                >
                  Update
                </Link>
                <button
                  onClick={() => deleteEmployee(emp._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
