import React from 'react';
import '../App.css';
import aboutImage from '../assets/about-illustration.jpg';



const About = () => {
  return (
    <div className="about-section">
      <div className="about-text">
        <h1>About us</h1>
        <p>
          At Fradomos, our mission is to redefine modern living through intelligent,
          connected home experiences. We aim to empower users with technology that’s
          simple, secure, and seamlessly integrated into everyday life.
        </p>
        <button className="learn-more-button">Learn More</button>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="Smart home illustration" />
      </div>
    </div>
  
    
  );
  
};

export default About;

