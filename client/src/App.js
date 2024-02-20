import './App.css';
import React from 'react';
import Home from './components/Home';
// import About from './components/About';
import Departments from './components/Departments';
import Blogs from './components/Blogs';
import Blog from './components/Blog';

// import Contact from './components/Contact';
import {Routes, Route } from 'react-router-dom';

function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/departments" element={<Departments />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/" element={<Blog />} />

          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* Add more routes as needed */}
        </Routes>
      </div>
    
  );
}

export default App;
