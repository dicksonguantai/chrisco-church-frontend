import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsChevronDoubleRight } from "react-icons/bs";

const SpotifyEmbeds = () => {
  const [latestEpisodes, setLatestEpisodes] = useState([]);

  useEffect(() => {
    fetchLatestEpisodes();
  }, []);

  const fetchLatestEpisodes = async () => {
    try {
      const response = await axios.get('https://chrisco-church-endpoints.onrender.com/spotify/latest-episodes');
      const latestEpisodes = response.data.slice(0, 3); // Slice to get only the first three episodes
    setLatestEpisodes(latestEpisodes);
    } catch (error) {
      console.error('Error fetching latest episodes:', error);
    }
  };

  const handleViewMoreClick = () => {
    window.open('https://open.spotify.com/show/7CcFvqZM7U0K0m6BouNfHe?si=a92d16d45d1a45eb&nd=1&dlsi=c1f2c99c57de4378', '_blank');
  };

  return (
    <div>
      <div className='row-heading events-row flex align-items-center'>
        <div className='col-md-4'>
          <h3 className="news-events-h3">We are on Spotify</h3>
        </div>
        <div className='col-md-4'>
          <div className='view-more'>
            <button type="button" className="btn btn-view-more" onClick={handleViewMoreClick}>View More<i className=" btn-view-more ti-angle-double-right"><BsChevronDoubleRight /></i></button>
          </div>
        </div>
      </div>
      <div className="row">
        {latestEpisodes.map((episode, index) => (
          <div className="col-md-4" key={index}>
            <iframe
              style={{ borderRadius: '12px' }}
              src={`https://open.spotify.com/embed/episode/${episode.uri.split(':')[2]}`}
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title={`Spotify Embed ${index + 1}`}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpotifyEmbeds;
