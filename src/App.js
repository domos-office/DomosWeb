import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Products from "./pages/Products";
import Contactus from "./pages/Contactus";
import Job from "./pages/Job";

import './App.css';
import 'boxicons';

function App() {
  return (
    <Router>
      <header className="homeheader">
    <a href="/" className='logo'>Domos</a>



    <nav className='navbar'>
      <Link to="/">Home</Link>
      <Link to="/job">Job</Link>
      <Link to="/about">About</Link>
      <a href="/webapp">WebApp</a>
    </nav>    
</header>
      
     
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contactus" element={<Contactus />} />
      <Route path="/job" element={<Job />} />
    </Routes>
  </Router>
  );
}



export default App;
