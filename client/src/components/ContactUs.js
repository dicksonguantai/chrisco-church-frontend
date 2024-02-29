import React, { useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';



const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_al1g9fr', 'template_la8l1ll', form.current, {
        publicKey: 'A0BAvwxVqLJpq9joZ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };

  return (
    <div>
      <Header />
      <div className="contact-us-container">
        
        <img src="contact.png" alt="contact section" className="contact-image" />
        <div className="contact-content">
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
          {/* Add your social media icons here */}
        </div>
        
      </div>
         <div className="email">
          <h2>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="from_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send Message --->"  className=" button "/>
      </form>
      <img src="map.png" alt="maping"  className="map"   />
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
