import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
<<<<<<< HEAD
import Webappdashboard from "./pages/Webappdashboard";
=======
import Shop from "./pages/Shop";
import Products from "./pages/Products";
import Contactus from "./pages/Contactus";


>>>>>>> 3ec8d94ae7e246c6f0222ce8e2acd4a809606e16
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
<<<<<<< HEAD
      <Route path="/webappdashboard" element={<Webappdashboard />} />
=======
      <Route path="/shop" element={<Shop />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contactus" element={<Contactus />} />

>>>>>>> 3ec8d94ae7e246c6f0222ce8e2acd4a809606e16
    </Routes>
  </Router>
  );
}



export default App;
