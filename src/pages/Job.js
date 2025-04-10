import React from 'react';
import { Form } from 'react-router-dom';

const Home = () => {
  return (
    <>


<div className="job">
      <div className="header">
        <div className="text">
          <h1>Jobs</h1>
          <p>
            Join Domos and help shape the future of smart living. We're looking
            for passionate people to build smarter, more connected homes.
            Explore our job openings and grow with us.
          </p>
        </div>
      </div>

      <div className="search">
        <div className="search-container">
          <h2>Search for a Job</h2>

          {/* You can use either <form> or <Form> depending on routing logic */}
          <form method="get" action="/search">
            <div className="form-group">
              <label htmlFor="job-title">
                Job Title <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="text"
                id="job-title"
                name="job_title"
                placeholder="e.g. Web Developer"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="school">School (optional)</label>
              <input
                type="text"
                id="school"
                name="school"
                placeholder="e.g. Harvard University"
              />
            </div>

            <div className="form-group">
              <label htmlFor="job-type">Job Type</label>
              <select id="job-type" name="job_type">
                <option value="">Any</option>
                <option value="full-time">Full-Time</option>
                <option value="part-time">Part-Time</option>
                <option value="internship">Internship</option>
                <option value="remote">Remote</option>
              </select>
            </div>

            <button type="submit" className="search-button">
              Search
            </button>
          </form>
        </div>
      </div>


      <div className='positionen'>
      <p>We found these jobs for you</p>
        <div className='jobs'>
       
        <div className='card'>
            <div className='titel'>
                <h1>Web Developer</h1>
            </div>
            <div className='info'>
                <div className='nav'>
                    <p>Full Time</p>
                    <p>HTL School</p>
                    <p>released 16 minutes ago</p>
                </div>
                <div className='nav2'>
                    <a href=''>View more</a>
                </div>
            </div>
        </div>


        <div className='card'>
            <div className='titel'>
                <h1>Web Developer</h1>
            </div>
            <div className='info'>
                <div className='nav'>
                    <p>Full Time</p>
                    <p>HTL School</p>
                    <p>released 16 minutes ago</p>
                </div>
                <div className='nav2'>
                    <a href=''>View more</a>
                </div>
            </div>
        </div>



        <div className='card'>
            <div className='titel'>
                <h1>Web Developer</h1>
            </div>
            <div className='info'>
                <div className='nav'>
                    <p>Full Time</p>
                    <p>HTL School</p>
                    <p>released 16 minutes ago</p>
                </div>
                <div className='nav2'>
                    <a href=''>View more</a>
                </div>
            </div>
        </div>



        <div className='card'>
            <div className='titel'>
                <h1>Web Developer</h1>
            </div>
            <div className='info'>
                <div className='nav'>
                    <p>Full Time</p>
                    <p>HTL School</p>
                    <p>released 16 minutes ago</p>
                </div>
                <div className='nav2'>
                    <a href=''>View more</a>
                </div>
            </div>
        </div>



        <div className='card'>
            <div className='titel'>
                <h1>Web Developer</h1>
            </div>
            <div className='info'>
                <div className='nav'>
                    <p>Full Time</p>
                    <p>HTL School</p>
                    <p>released 16 minutes ago</p>
                </div>
                <div className='nav2'>
                    <a href=''>View more</a>
                </div>
            </div>
        </div>



        <div className='card'>
            <div className='titel'>
                <h1>Web Developer</h1>
            </div>
            <div className='info'>
                <div className='nav'>
                    <p>Full Time</p>
                    <p>HTL School</p>
                    <p>released 16 minutes ago</p>
                </div>
                <div className='nav2'>
                    <a href=''>View more</a>
                </div>
            </div>
        </div>



        <div className='card'>
            <div className='titel'>
                <h1>Web Developer</h1>
            </div>
            <div className='info'>
                <div className='nav'>
                    <p>Full Time</p>
                    <p>HTL School</p>
                    <p>released 16 minutes ago</p>
                </div>
                <div className='nav2'>
                    <a href=''>View more</a>
                </div>
            </div>
        </div>
       
        </div>
      </div>

      <div className='mostwanted'>
        <div className='text'>
            <h1>Most Wanted Jobs</h1>
        </div>
        <div className='options'>



        <div className='card-job'>
                <div className='image'>
                    <img src='/smart.jpg' />
                </div>

                <div className='description'>
                    <h1>App Developer</h1>
                    <h3>Part time</h3>
                    <p>Builds mobile or desktop applications with smooth performance and user-friendly interfaces.
                    They turn ideas into functional apps for everyday use.
                    </p>
                    
                </div>
                
                <div className='button'>
                    <a href=''>Read More</a>
                    </div>  
            </div>

            <div className='card-job'>
                <div className='image'>
                    <img src='/smart.jpg' />
                </div>

                <div className='description'>
                    <h1>App Developer</h1>
                    <h3>Part time</h3>
                    <p>Builds mobile or desktop applications with smooth performance and user-friendly interfaces.
                    They turn ideas into functional apps for everyday use.
                    </p>
                    
                </div>

                <div className='button'>
                    <a href=''>Read More</a>
                    </div>  
            </div>

            <div className='card-job'>
                <div className='image'>
                    <img src='/smart.jpg' />
                </div>

                <div className='description'>
                    <h1>App Developer</h1>
                    <h3>Part time</h3>
                    <p>Builds mobile or desktop applications with smooth performance and user-friendly interfaces.
                    They turn ideas into functional apps for everyday use.
                    </p>
                    
                </div>
                
                <div className='button'>
                    <a href=''>Read More</a>
                    </div>  
            </div>


            <div className='card-job'>
                <div className='image'>
                    <img src='/smart.jpg' />
                </div>

                <div className='description'>
                    <h1>App Developer</h1>
                    <h3>Part time</h3>
                    <p>Builds mobile or desktop applications with smooth performance and user-friendly interfaces.
                    They turn ideas into functional apps for everyday use.
                    </p>
                    
                </div>
                
                <div className='button'>
                    <a href=''>Read More</a>
                    </div>  
            </div>

           






    
        </div>
            

      </div>


    </div>



    </>
    );
};

export default Home;
