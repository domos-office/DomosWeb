import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Products from "./pages/Products";
import Contactus from "./pages/Contactus";


import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/login">Login</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contactus" element={<Contactus />} />

    </Routes>
  </Router>
  );
}



export default App;
