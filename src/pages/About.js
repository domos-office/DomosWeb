import React from 'react';
import '../App.css';
import aboutImage from '../assets/about-illustration.jpg';
import historyImage from '../assets/history.png'; 

const About = () => {
  return (
    <>
      {/* About Us Block */}
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

      <div className="about-section history-highlight">
  <div className="about-image history">
    <img src={historyImage} alt="Unique home idea" />
  </div>
  <div className="about-text">
    <h1>Our History</h1>
    <p>
      We are a group of young adults who looked around and realized — every house looked the same.
      Especially in Albania, we saw the potential for something different, something smarter and more personalized.
      That’s why we started Fradomos: to break the mold and build homes that actually reflect the people living in them.
    </p>
  </div>
</div>


    </>
  );
};

export default About;
