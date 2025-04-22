import React, { useEffect, useState } from "react";
import "../App.css";

const teamMembers = [
  { name: "Endri Ndoja", role: "Lead Developer" , profile: "/smart.jpg", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
  { name: "Sidrit Mucaj", role: "UI/UX Designer", profile: "/smart.jpg", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
  { name: "Hera Valikaj", role: "Project Manager", profile: "/smart.jpg", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
  { name: "Ardita Hasmegaj", role: "Marketing Specialist", profile: "/smart.jpg", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
];

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("team-section");
      if (section) {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
   


      <section className="home">
        
        <div className="contant">
          <div className="home-content">
            <h1>Fradomos</h1>
            <h3>Smart Home</h3>
            <p>
              Experience the future of home automation with our innovative Smart Home system.
              Designed for efficiency, security, and convenience, our solution seamlessly
              connects and controls your devices, offering a smarter way to live. Stay tuned for more updates!
            </p>
            <div className="btn-box">
              <a href="#download-app">Explore</a>
              <a href="/webapp" target="_blank">WebApp</a>
            </div>
          </div>

          <div className="home-sci">
            <a href="https://www.instagram.com/domos.al" target="_blank">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="https://www.facebook.com/share/15zKg7Ugxb/" target="_blank">
              <i className="bx bxl-facebook"></i>
            </a>  
            <a href="tel:+355692046728">
              <i className="bx bxl-whatsapp"></i>
            </a>
          </div>
        </div>

        <div className="image">
          <img src="/smart.jpg" alt="Smart Home" />
        </div>
      </section>

      <div className="download-app" id="download-app">
          <div className="image">
              <img src="/phone.png" />
          </div>
          <div className="text">
            <div className="elements">
                <h1>Download the App</h1>
                <h3>Fradomos App - Coming soon</h3>
                <p>Our app is available for free on both the Play Store and the App Store, compatible with Android and iOS devices. With just a simple download, you can start controlling your home directly from your smartphone. Whether you're at home or on the go, managing your space has never been easier. Download the app today and experience the convenience of smart home control at your fingertips.</p>
                <div className="download">
                <a href="" className="playstore">
                  <img src="/playstore.png" /> 
                  <p>Play Store</p>
                  </a>
                <a href="" className="appstore">
                  <img src="/appstore.png" />
                  <p>App Store</p>
                </a>
                </div>
                
            </div>
          </div>
      </div>

      

      <div className="more">
        <div className="one">
          <div className="image">
            <div className="description">
              <h1>The future of your Home</h1>
            <img src="/smart.jpg" />
            </div>
           
          </div>
          <div className="white">

          </div>

          
        </div>

        <div className="one">
          <div className="image2">
            <div className="description">
              <h1>The future of your Home</h1>
            <img src="/smart.jpg" />
            </div>
           
          </div>
          <div className="white">
          <div className="image">
            <div className="description">
              <h1>The future of your Home</h1>
            <img src="/smart.jpg" />
            </div>
           
          </div>
          </div>

          
        </div>

<div className="one2">
        <div className="one">
          <div className="image2">
            <div className="description">
              <h1>The future of your Home</h1>
            <img src="/smart.jpg" />
            </div>
           
          </div>
          <div className="white">
          <div className="image">
            <div className="description">
              <h1>The future of your Home</h1>
            <img src="/smart.jpg" />
            </div>
           
          </div>
          </div>

          
        </div>
        </div>
      </div>

      <section id="team-section" className={`team-section ${isVisible ? "show" : ""}`}>
        <h2>Meet Our Team</h2>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.profile} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              
              <a href="">Learn More</a>
            </div>
          ))}
        </div>
      </section>

      <div className="contact-info">

      </div>



      
    </>
  );
};

export default Home;
