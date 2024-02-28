import React, { useState, useEffect } from "react";
import axios from "axios";
import "./services.css";

export default function Services() {
  const [serviceDetails, setServiceDetails] = useState([]);

  useEffect(() => {
    fetchServiceDetails();
  }, []);

  const fetchServiceDetails = async () => {
    try {
      const response = await axios.get(
        "https://chrisco-church-endpoints.onrender.com/services/all"
      );
      setServiceDetails(response.data);
    } catch (error) {
      console.error("Error fetching service details:", error);
    }
  };

  return (
    <section className="service-sec">
      <div className="text-center mx-auto">
        <h2 className="text-center text-2xl font-bold border-b-2 border-black p-2">
          Service Program
        </h2>
        <div className="flex flex-wrap justify-center">
          {serviceDetails.map((service) => (
            <div className="service-item" key={service.id}>
              <h4 className="font-bold">{service.name}</h4>
              <p>
                {service.start_time} - {service.end_time} {service.service_type}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
