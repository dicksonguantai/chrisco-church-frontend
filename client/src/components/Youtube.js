import React from 'react';
import './youtube.css'
import { BsChevronDoubleRight } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const Youtube = () => {
const navigate = useNavigate();
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
                   
                    <iframe class="rounded" width="100%" height="315" src="https://www.youtube.com/embed/wGqCcv6eH2c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
                    
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="shadow ">
                   
                    <iframe class="rounded" width="100%" height="315" src="https://www.youtube.com/embed/qHaZasrf6qA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
                    
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="shadow ">
                   
                    <iframe class="rounded" width="100%" height="315" src="https://www.youtube.com/embed/5O5W41rMz6w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
                    
                </div>
            </div>
            
            </div>
        </div>
    
  );
};

export default Youtube;
