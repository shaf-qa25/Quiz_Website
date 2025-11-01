import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import CategoryPage from "./pages/Categories";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/login" element={<Login />} /> 
      </Routes>
    </Router>
  );
}

export default App;
