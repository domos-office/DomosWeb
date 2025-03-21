import React from 'react';


const Home = () => {
  return(<>
    

<section className='home'>
  <div className='contant'>
    <div className='contant-parts'>
<div className='home-content'>
  <h1>Domos</h1>
  <h3>Your home,your Domos</h3>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type 
    specimen book.</p>
  <div className='btn-box'>
    <a href=''>Explore</a> 
    <a href='https://domos.al' target='_blank'>WebApp</a> 
    
  </div>
</div>


<div className='home-sci'>
  <a href='https://www.instagram.com/domos.al/?utm_source=ig_web_button_share_sheet' target='_blank'><i class='bx bxl-instagram'></i></a>
  <a href='https://www.facebook.com/share/15zKg7Ugxb/'><i class='bx bxl-facebook' target='_blank'></i></a>
  <a href='tel:+355692046728'><i class='bx bxl-whatsapp' ></i></a>
</div>
</div>
</div>
<div className='image'>
    <img src='/smart.jpg'/>
</div>
</section>

 
  </>);
};

export default Home;
