import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard"; // Optional
import './App.css'; // Make sure this file exists

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Welcome to SymptomSense</h1>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Optional */}
      </Routes>
    </Router>
  );
}

export default App;
