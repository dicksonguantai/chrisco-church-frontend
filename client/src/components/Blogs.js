import React from 'react';
import BlogCard from './BlogCard';
import Header from './Header'
import Footer from './Footer'
import './blogs.css'

function Blogs() {
  
  
  return (
    <>
    <Header/>
    <h1 className='row font-bold blogs-heading align-items-left'>Blogs</h1>
    <div className='flex blogs-cards'>
    
    <BlogCard/>
    <BlogCard/>
    <BlogCard/>
    <BlogCard/>
    <BlogCard/>
    <BlogCard/>
    </div>
    <Footer/>
    </>
    
  );
}

 export default Blogs