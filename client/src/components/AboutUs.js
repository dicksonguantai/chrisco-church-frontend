import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from 'react-router-dom';


function AboutUs() {
    
  
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
          Our dedicated team of elders and volunteers work tirelessly to create a warm
          and conducive environment for all.</p>
        
         
        <Link to="/history">
        <button className="explore-more"> Explore More</button>
           </Link>
      

      </div>
      <img src="people.png" alt="People at Church" className="church-community-image" />
    </section>

    <div className="long">
      <div className="mission">
        <h2>Our Mission</h2>
        <p>To equip belivers through prayer, teaching God's word, discipleship, evangelism, Christian living, tent-making so that they can be united and attain the full knowledge of Christ in spiritual maturity.</p>
      </div>
      
      <div className="vision">
        <h2>Our Vision</h2>
        <p>To become a congregation of believers disciples under the five-fold ministry to fulfill the great commission of our Lord Jesus Christ.</p>
      </div>
      </div>

      <div className="faith-container">
  <div className="faith-content">
    <h1>OUR FAITH</h1>
    <p>At Chrisco Central church, we offer a variety of services and programs to meet the spiritual needs of the congregation. Our Sunday service includes uplifting music, inspiring sermons, and opportunities for personal growth and connection. We also have programs for children, youth, and adults throughout the week.</p>
  </div>
  <div className="faith-image">
    <img src="faith.png" alt="faith stone" className="faith-picture" />
  </div>
</div>

      <div class="separator"></div>

      <div className="word-container">
  <div className="word-image">
    <img src="bible.png" alt="bible" className="bible" />
  </div>
  <div className="word-content">
    <h1>THE WORD</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed in mauris congue, dignissim nulla et tincidunt velit. Sed libero arcu, convallis in eros vel, egestus congue nulla.Sed nec dictum nulla.Nulla facilisi.Aliquam erat volutpat. Sed non quam arcu. Donec euismod mauris.</p>
  </div>
</div>

        <div class="separator"></div>

        <div className="trinity-container">
  <div className="trinity-content">
    <h1>THE TRINITY</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed in mauris congue, dignissim nulla et tincidunt velit. Sed libero arcu, convallis in eros vel, egestus congue nulla.Sed nec dictum nulla.Nulla facilisi.Aliquam erat volutpat. Sed non quam arcu. Donec euismod mauris.</p>
  </div>
  <div className="trinity-image">
    <img src="trinity.png" alt="trinity" className="trinity-picture" />
  </div>
</div>

        <div class="separator"></div>

        <div className="baptism-container">
  <div className="baptism-image">
    <img src="baptism.png" alt="baptism" className="baptism-picture" />
  </div>
  <div className="baptism-content">
    <h1>THE BAPTISM</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed in mauris congue, dignissim nulla et tincidunt velit. Sed libero arcu, convallis in eros vel, egestus congue nulla.Sed nec dictum nulla.Nulla facilisi.Aliquam erat volutpat. Sed non quam arcu. Donec euismod mauris.</p>
  </div>
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
