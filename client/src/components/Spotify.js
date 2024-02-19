import React from 'react';
import './spotify.css'
const SpotifyEmbeds = () => {
  return (
    <div className=''>
    <div class="row events-row d-flex align-items-center">
            <div class="col-md-8 col-6">
                <h3 class="news-events-h3">We are on Spotify</h3>
            </div>
            <div class="col-md-4 col-6">
                <div class="">
                    <button type="button" class="btn btn-view-more">View More <i class="ti-angle-double-right"></i></button>
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
