import React, { useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Import Leaflet library
import 'leaflet/dist/leaflet.css';
import "./contactUs.css";

// Import the default marker icon from leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Override the default icon URLs with the correct paths
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

// Set the default icon for Leaflet
L.Marker.prototype.options.icon = DefaultIcon;

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
          <div className="contact-info">
            <img src="contact.png" alt="Contact" className="contact-image" />
            <div>
              <h1 className="title">WE WANT TO HEAR FROM YOU</h1>
              <p>
                There are many ways for you to connect with us. Reach out to us by phone, email, or social media and let us know how we can help.
              </p>
            </div>
          </div>
          <div className="contact-methods">
            <ContactMethod icon={<FaPhone />} title="Phone" content="+254745 459667" />
            <ContactMethod icon={<FaEnvelope />} title="Email" content="chrisco.central@yahoo.com" />
            <ContactMethod icon={<FaMapMarkerAlt />} title="Address" content="Woodley, Kenya 00100" />
          </div>
        </div>
      </div>

      <div className="map-background">
        <div className="email">
          <form className="contact-form" ref={form} onSubmit={sendInquiry}>
            <h2>Contact Us</h2>
            <label>Name</label>
            <input type="text" name="name" />
            <label>Email</label>
            <input type="email" name="email" />
            <label>Message</label>
            <textarea name="inquiry" />
            <input type="submit" value="Send Message --->" className="button" />
          </form>
        </div>
      </div>

      <div className="map-container">
        <MapContainer center={[-1.30636, 36.77686]} zoom={15} className="map">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-1.30636, 36.77686]}>
            <Popup>
              Chrisco Central Church
            </Popup>
          </Marker>
        </MapContainer>
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


