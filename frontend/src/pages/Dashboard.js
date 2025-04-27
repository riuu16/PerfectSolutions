import React, { useEffect, useState } from "react";
import axios from "axios";
import { logout } from "../utils/auth";

const Dashboard = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true); // 👈 for loading spinner

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/department/getDepartment")
      .then((response) => {
        setDepartments(response.data.departments); // 👈 accessing 'departments' array
        setLoading(false); // 👈 stop loading after data comes
      })
      .catch((error) => {
        console.error("Error fetching departments:", error);
        setLoading(false); // 👈 even on error, stop loading
      });
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={logout}>Logout</button>

      <h3>Departments</h3>

      {loading ? ( // 👈 if loading, show this
        <p>Loading departments...</p>
      ) : (
        <ul>
          {departments.map((dept) => (
            <li key={dept._id}>{dept.name}</li> // 👈 corrected 'name'
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
