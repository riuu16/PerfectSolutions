import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AskUs from "./pages/AskUs";
import { isAuthenticated } from "./utils/auth";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route
        path="/ask-us"
        element={isAuthenticated() ? <AskUs /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};

export default App;
