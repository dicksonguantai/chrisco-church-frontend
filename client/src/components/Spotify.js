import React from 'react';
import './spotify.css'
import { BsChevronDoubleRight } from "react-icons/bs";

const SpotifyEmbeds = () => {
const handleViewMoreClick = () => {
        window.open('https://open.spotify.com/show/7CcFvqZM7U0K0m6BouNfHe?si=a92d16d45d1a45eb&nd=1&dlsi=c1f2c99c57de4378', '_blank');
      };
  return (
    <div className=''>
    <div class="row-heading events-row flex align-items-center">
        <div class="col-md-4">
            <h3 className="news-events-h3">We are on Spotify</h3>
        </div>
        <div class="col-md-4">
            <div class="view-more">
            <button type="button" className="btn btn-view-more" onClick={handleViewMoreClick} >View More<i className=" btn-view-more ti-angle-double-right"><BsChevronDoubleRight /></i></button>
            </div>
        </div>
    </div> 
    <div className="row">
      <div className="col-md-4">
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/show/7CcFvqZM7U0K0m6BouNfHe?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify Embed 1"
        ></iframe>
      </div>
      <div className="col-md-4">
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/episode/4jK5hlyIwxfv8Yedfjtj6G?utm_source=generator"      
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify Embed 2"
        ></iframe>
      </div>
      <div className="col-md-4">
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/episode/4X0lCB0DbuPnwMyDV4D7gT?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify Embed 3"
        ></iframe>
      </div>
    </div>
    </div>
  );
};

export default SpotifyEmbeds;
