import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Webappdashboard from "./pages/Webappdashboard";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/login">Login</Link> | <Link to="/webappdashboard">WebApp</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/webappdashboard" element={<Webappdashboard />} />
    </Routes>
  </Router>
  );
}

export default App;
