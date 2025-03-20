import React from 'react';


const Home = () => {
  return(<>
    
  <h1>Welcome to Home Page</h1>
  <div className='home-banner'>

  </div>

  <body>
  <header className="homeheader">
    <a href="#" className='logo'>Domos</a>



    <nav className='navbar'>
      <a href="#" className='active'>Home</a>
      <a href="#">About</a>
      <a href="#">Shop</a>
      <a href="#">Products</a>
      <a href="#">Contact us</a>
      <a href="#">WebApp</a>
      
    </nav>
</header>

<section className='home'>
<div className='home-content'>
  <h1>Domos</h1>
  <h3>Your home,your Domos</h3>
  <p>gtg</p>
  <div className='btn-box'>
    <a href='#'>Hire me</a>
    <a href='#'>Let's talk</a>




    
  </div>
</div>
</section>
</body>
  
  </>);
};

export default Home;
