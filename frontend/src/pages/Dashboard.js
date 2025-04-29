import React, { useEffect, useState } from "react";
import axios from "axios";
import { logout } from "../utils/auth";

const Dashboard = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/department/getDepartment")
      .then((response) => {
        setDepartments(response.data.departments); 
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching departments:", error);
        setLoading(false); 
      });
  }, []);
  console.log(departments);

  return (
    // <div>
    //   <h2>Dashboard</h2>
    //   <button onClick={logout}>Logout</button>

    //   <h3>Departments</h3>

    //   {loading ? ( // 👈 if loading, show this
    //     <p>Loading departments...</p>
    //   ) : (
    //     <ul>
    //       {departments.map((dept) => (
    //         <li key={dept._id}>{dept.name}</li> // 👈 corrected 'name'
    //       ))}
    //     </ul>
    //   )}
    // </div>
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>Dashboard</h2>
        <button onClick={logout} style={styles.logoutButton}>
          Logout
        </button>
      </div>

      <h3 style={styles.sectionTitle}>Departments</h3>

      {loading ? (
        <p style={styles.loadingText}>Loading departments...</p>
      ) : (
        <ul style={styles.departmentList}>
          {departments.map((dept) => (
            <li key={dept._id} style={styles.departmentItem}>
              {dept.departmentName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
const styles = {
  container: {
    padding: "30px",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  logoutButton: {
    padding: "10px 20px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  sectionTitle: {
    marginBottom: "15px",
    color: "#333",
  },
  loadingText: {
    fontSize: "16px",
    color: "#555",
  },
  departmentList: {
    listStyle: "none",
    padding: 0,
    marginTop: "10px",
  },
  departmentItem: {
    backgroundColor: "#ffffff",
    padding: "15px",
    marginBottom: "10px",
    borderRadius: "8px",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    fontSize: "16px",
    color: "#333",
  },
};

export default Dashboard;
