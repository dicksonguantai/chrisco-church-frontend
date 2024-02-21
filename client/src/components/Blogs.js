import React from 'react';
import BlogCard from './BlogCard';
import Header from './Header'
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
    </>
    
  );
}

 export default Blogs