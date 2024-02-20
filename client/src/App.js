import './App.css';
import React from 'react';
import Home from './components/Home';
// import About from './components/About';
import Departments from './components/Departments';
import Login from './components/Login';
import Signup from './components/Signup';
// import Services from './components/Services';
// import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
           <Route path="/departments" element={<Departments />} />
           <Route path="/login" element={<Login />} />
           <Route path="/signup" element={<Signup />} />
          {/* <Route path="/services" element={<Services />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* Add more routes as needed */}
        </Routes>
      </div>
    
  );
}

export default App;
