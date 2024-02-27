// services.js

import React from "react";
import "./services.css";

export default function Services() {
  return (
    <section className="service-sec">
      <div className="text-center mx-auto">
        <h2 className="text-center text-2xl font-bold border-b border-black">
          Service Program
        </h2>
        <div className="flex flex-wrap justify-center">
          <div className="service-item ">
            <h4>Sunday Service</h4>
            <p>10:00 - 12:00 IN-PERSON & ONLINE SERVICE</p>
          </div>
          <div className="service-item ">
            <h4>Mid week Service</h4>
            <p>5:30 - 7:00 PM IN-PERSON</p>
          </div>
          <div className="service-item ">
            <h4>Overnight Service</h4>
            <p>10:00 - 6:00 PM IN-PERSON & ONLINE SERVICE</p>
          </div>
        </div>
      </div>
    </section>
  );
}
