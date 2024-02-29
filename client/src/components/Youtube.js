import React,{useEffect,useState} from 'react';
import './youtube.css'
import { BsChevronDoubleRight } from "react-icons/bs";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';;

const Youtube = () => {
  const navigate = useNavigate();

  const [videoId1, setVideoId1] = useState('');
  const [videoId2, setVideoId2] = useState('');
  const [videoId3, setVideoId3] = useState('');

  useEffect(() => {
    fetchVideoId(1);
    fetchVideoId(2);
    fetchVideoId(3);
  }, []);

  const fetchVideoId = async (number) => {
    try {
      const response = await axios.get(`https://chrisco-church-endpoints.onrender.com/youtube/latest-videos`);
      if (response.data) {
        setVideoId1(response.data[0].videoId);
        setVideoId2(response.data[1].videoId);
        setVideoId3(response.data[2].videoId);
      }
    } catch (error) {
      console.error(`Error fetching YouTube video ID ${number}:`, error);
    }
  };
    const handleViewMoreClick = () => {
    navigate('/services')
      };
  return (
    
    <div class="">
        <div class="row-heading events-row d-flex align-items-center">
            <div class="col-md-4">
                <h3 class="news-events-h3">Sermons</h3>
            </div>
            <div class="col-md-4">
                <div class="view-more">
                    
                    <button type="button" class="btn btn-view-more" onClick={handleViewMoreClick}>View More <i class="btn-view-more ti-angle-double-right"><BsChevronDoubleRight /></i></button>
                </div>
            </div>
        </div>
        
        <div class="row news-row">
            
            <div class="col-md-4">
                <div class="shadow ">
                   
                    <iframe class="rounded" width="100%" height="315" src= {`https://www.youtube.com/embed/${videoId1}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
                    
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="shadow ">
                   
                    <iframe class="rounded" width="100%" height="315" src={`https://www.youtube.com/embed/${videoId2}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
                    
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="shadow ">
                   
                    <iframe class="rounded" width="100%" height="315" src={`https://www.youtube.com/embed/${videoId3}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
                    
                </div>
            </div>
            
            </div>
        </div>
    
  );
};

export default Youtube;
