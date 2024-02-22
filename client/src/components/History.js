import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const History = () => {
  return (
    <div>
        < Header/>
       <div className="history"  >
      <p>The Central Church started as a children's feeding center.</p>
      <p>
        The Central Church is a five-fold ministry church that believes in:
        <ul>
          <li>New Testament teaching; and Chrisco was formed upon the five-fold ministry gift given to the Church by our Lord Jesus Christ; (Ephesians 4:11).</li>
          <li>The Apostolic and Prophetic ministries are foundational and senior to the other three (Ephesians 2:20, 1 Corinthians 12:28).</li>
          <li>A group of churches forming a district will be headed by a Presbyter; the governing of the church universally is done by a group of senior ministries generally known as Apostolic Team.</li>
          <li>The New Testament pattern provides for elders and deacons serving within a local church and they must possess certain personal qualifications according to the scriptures (1 Timothy 3:1-13, Titus 1:5-9).</li>
          <li>The office of a local church or assembly includes; a Pastor, Elders, Deacons, and Deaconesses respectively.</li>
        </ul>
      </p>
      </div> 
      <Footer/>
    </div>
     
  );
};

export default History;
