import './App.css';
import React from 'react';
import Home from './components/Home';
 import AboutUs from './components/AboutUs';
import Departments from './components/Departments';
import Blogs from './components/Blogs';
import Blog from './components/Blog';
import History from './components/History';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import ResetPassword from './components/ResetPassword';

 import ContactUs from './components/ContactUs';
import Events from './components/Events';
import {Routes, Route } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';
import EditableTable from './components/EditableTable';

function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} /> 
          <Route path="/history" element={<History />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/panel" element={<AdminPanel />} />
          <Route path="/table" element={<EditableTable />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact-us" element={<ContactUs />} />
          
          <Route path="/reset-password" element={<ResetPassword />} />
          {/* <Route path="/contact" element={<Contact />} /> */}

          <Route path='/events' element={<Events/>}/>
          {/* Add more routes as needed */}
        </Routes>
      </div>
    
  );
}

export default App;
