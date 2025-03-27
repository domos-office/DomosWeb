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
            <h1>Domos</h1>
            <h3>Smart Home</h3>
            <p>
              Experience the future of home automation with our innovative Smart Home system.
              Designed for efficiency, security, and convenience, our solution seamlessly
              connects and controls your devices, offering a smarter way to live. Stay tuned for more updates!
            </p>
            <div className="btn-box">
              <a href="">Explore</a>
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

      <section id="team-section" className={`team-section ${isVisible ? "show" : ""}`}>
        <h2>Meet Our Team</h2>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.profile} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p className="description">{member.description}</p>
              <a href="">Learn More</a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
