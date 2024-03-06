import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "./AboutUs.css";

function AboutUs() {
  const [aboutData, setAboutData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch(
          "https://chrisco-church-endpoints.onrender.com/about/all"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setAboutData(data[0]); // Assuming the response is an array with a single object
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchAboutData();

    // Cleanup function
    return () => {
      // Any cleanup code if needed
    };
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="about-us">
      <Header />

      <section className="why-chrisco">
        <div className="content">
          <h1>{aboutData.title}</h1>
          <p>{aboutData.description}</p>
          <Link to="/history">
            <button className="explore-more"> Explore More</button>
          </Link>
        </div>
        <img
          src={aboutData.about_img}
          alt="People at Church"
          className="church-community-image"
        />
      </section>

      <div className="long">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>{aboutData.mission}</p>
        </div>

        <div className="vision">
          <h2>Our Vision</h2>
          <p>{aboutData.vision}</p>
        </div>
      </div>

      <div className="faith-container">
        <div className="faith-content">
          <h1>OUR FAITH</h1>
          <p>{aboutData.faith}</p>
        </div>
        <div className="faith-image">
          <img
            src={aboutData.faith_img}
            alt="faith stone"
            className="faith-picture"
          />
        </div>
      </div>

      <div class="separator"></div>

      <div className="word-container">
        <div className="word-image">
          <img src={aboutData.word_img} alt="bible" className="bible" />
        </div>
        <div className="word-content">
          <h1>THE WORD</h1>
          <p>{aboutData.word}</p>
        </div>
      </div>

      <div class="separator"></div>

      <div className="trinity-container">
        <div className="trinity-content">
          <h1>THE TRINITY</h1>
          <p>{aboutData.trinity}</p>
        </div>
        <div className="trinity-image">
          <img
            src={aboutData.trinity_img}
            alt="trinity"
            className="trinity-picture"
          />
        </div>
      </div>

      <div class="separator"></div>

      <div className="baptism-container">
        <div className="baptism-image">
          <img
            src={aboutData.baptism_img}
            alt="baptism"
            className="baptism-picture"
          />
        </div>
        <div className="baptism-content">
          <h1>THE BAPTISM</h1>
          <p>{aboutData.baptism}</p>
        </div>
      </div>

      <div className="end">
        <div className="section1" id="church">
          <h1>OUR CHURCH</h1>
          <img src="church.png" alt="Church" />
          <p>{aboutData.church_slogan}</p>

          <h1>OUR PURPOSE</h1>
          <img src="praise.png" alt="Raised Hands" />
          <p>{aboutData.purpose}</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutUs;
