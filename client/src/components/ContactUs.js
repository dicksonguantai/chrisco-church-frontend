import React, { useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import { FaPhone, FaMapMarkerAlt,  FaEnvelope} from 'react-icons/fa';
import "./contactUs.css";

const ContactUs = () => {
  const form = useRef();

  const sendInquiry = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      inquiry: formData.get('inquiry'),
    };

    try {
      const response = await fetch('https://chrisco-church-endpoints.onrender.com/inquiries/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        console.log('Inquiry sent successfully!');
      } else {
        console.error('Failed to send inquiry.');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    form.current.reset();
  };

  return (
    
    <div>
      <Header />
      <div className="contact-us-container">
        <div className="contact-content">
        <img src="contact.png"    />
          <h1 className="title">WE WANT TO HEAR FROM YOU</h1>
          <p>
            There are many ways for you to connect with us. Reach out to us by phone, Email, or Social Media and let us
            know how we can help.
          </p>
          <div className="contact-methods">
            <ContactMethod icon={<FaPhone />} title="Phone" content="+254745 459667" />
            <ContactMethod icon={<FaEnvelope />} title="Email" content="chrisco.central@yahoo.com" />
            <ContactMethod icon={<FaMapMarkerAlt />} title="Address" content="Woodley, Kenya 00100" />
          </div>
        </div>
      </div>

      <div className="email">
        <h2>Contact Us</h2>
        <form className="contact-form"  ref={form} onSubmit={sendInquiry}>
          <label>Name</label>
          <input type="text" name="name" />
          <label>Email</label>
          <input type="email" name="email" />
          <label>Message</label>
          <textarea name="inquiry" />
          <input type="submit" value="Send Message --->" className="button" />
        </form>
        <img src="map.png" alt="maping" className="map" />
      </div>
      <Footer />
    </div>
  );
};

const ContactMethod = ({ icon, title, content }) => {
  return (
    <div className="contact-method">
      {icon}
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ContactUs;
