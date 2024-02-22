import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from 'react-router-dom';
import  { useState, useEffect } from 'react';

function AboutUs() {
  // State for about data (mission and vision)
  const [aboutData, setAboutData] = useState({ mission: '', vision: '' });

  // Fetch mission and vision data from API
  useEffect(() => {
    fetch('https://chrisco-church-endpoints.onrender.com/about/all')
      .then(response => response.json())
      .then(data => {
        setAboutData({ mission: data.mission, vision: data.vision });
      })
      .catch(error => console.error('Error fetching about data:', error));
  }, []);

  return (
    <div className="about-us">
        <Header />
      
        <section className="why-chrisco">
      <div className="content">
        <h1>Why Chrisco Central?</h1>
        <p>
          The Chrisco Church is a congregation where larger Christ co-events happen.
          Located in Woodley, Nairobi, Kenya.
        </p> 
         <p>The church is headed by Professor
          Joseph Magio and Pastor Rosemary Mugo, along with other eldership.
         </p>  
         <p>
          The church aims at meeting the needs of the total man spiritually .
          </p>
          <p>
          Ourdedicated team of elders and volunteers work tirelessly to create a warm
          and conducive environment for all.</p>
        
         
        <Link to="/history">
        <button className="explore-more"> Explore More</button>
           </Link>
      

      </div>
      <img src="people.png" alt="People at Church" className="church-community-image" />
    </section>
      <div className="mission">
        <h2>Our Mission</h2>
        <p>{aboutData.mission}</p>
      </div>

      <div className="vision">
        <h2>Our Vision</h2>
        <p>{aboutData.vision}</p>
      </div>

      < div className= "faith ">
       <h1> OUR FAITH</h1>
       <p>At Chrisco Central church, we offer a variety of services and programs to meet the spiritual needs of the congregation. Our sunday service includes uplift music, inspiring sermons and opportunities for personal growth and connection. We also have programs for children, youth and adults throughout the week.</p>
        <img src="faith.png"  alt=" faith stone" className="faith picture"  />
      </div>
        
      <div class="separator"></div>

       <div className="word">
        <h1>THE WORD</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed in mauris congue, dignissim nulla et tincidunt velit. Sed libero arcu, convallis in eros vel, egestus congue nulla.Sed nec dictum nulla.Nulla facilisi.Aliquam erat volutpat. Sed non quam arcu. Donec euismod mauris. </p>
            <img src="bible.png" alt="bible picture"   className="bible" />
        </div>

        <div class="separator"></div>

        <div className="trinity">
        <h1>THE TRINITY</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed in mauris congue, dignissim nulla et tincidunt velit. Sed libero arcu, convallis in eros vel, egestus congue nulla.Sed nec dictum nulla.Nulla facilisi.Aliquam erat volutpat. Sed non quam arcu. Donec euismod mauris.</p>
            <img src="trinity.png" alt="trinity picture" className="trinity picture" />
        </div>

        <div class="separator"></div>

        <div className="baptism">
        <h1>THE BAPTISM</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed in mauris congue, dignissim nulla et tincidunt velit. Sed libero arcu, convallis in eros vel, egestus congue nulla.Sed nec dictum nulla.Nulla facilisi.Aliquam erat volutpat. Sed non quam arcu. Donec euismod mauris.</p>
            <img src="baptism.png" alt="baptism picture"  className="baptism picture"  />
         </div>

        <div className="end" >   
      <div className="section1" id="church">
        <h1>OUR CHURCH</h1>
        <img src="church.png" alt="Church" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in mauris congue, dignissim nulla et, tincidunt velit. Sed libero arcu, convallis in eros vel, egestas congue nulla. Sed nec dictum nulla. Nulla facilisi. Aliquam erat volutpat. Sed non quam arcu. Donec euismod mauris.</p>
      

      
        <h1>OUR PURPOSE</h1>
        <img src="praise.png" alt="Raised Hands" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in mauris congue, dignissim nulla et, tincidunt velit. Sed libero arcu, convallis in eros vel, egestas congue nulla. Sed nec dictum nulla. Nulla facilisi. Aliquam erat volutpat. Sed non quam arcu. Donec euismod mauris.</p>
      </div>
      </div>
    
      <Footer />
    </div>
  );
}

export default AboutUs;
