import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "flowbite-react";
import { TextInput } from "flowbite-react";
import { CSVLink } from "react-csv";

function Subscriptions() {
  const token = localStorage.getItem('accessToken');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const [subscribers, setSubscribers] = useState([]);
  const [newsletterContent, setNewsletterContent] = useState("");
  const csvLinkRef = useRef(null);
  const csvData = subscribers.map((subscriber) => ({
    email: subscriber.email,
  }));

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://chrisco-church-endpoints.onrender.com/subscriptions/all",config
      );
      setSubscribers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSendNewsletter = async () => {
    try {
      await axios.post("url_to_newsletter_endpoint", {
        content: newsletterContent,
        subscribers: subscribers.map((subscriber) => subscriber.email),
      });
      console.log("Newsletter sent successfully");
    } catch (error) {
      console.error("Error sending newsletter:", error);
    }
  };

  const handleExportSubscribers = () => {
    csvLinkRef.current.link.click();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <div className="flex mb-4">
        <TextInput
          value={newsletterContent}
          onChange={(e) => setNewsletterContent(e.target.value)}
          placeholder="Enter newsletter content"
          className="mr-4"
        />
        <Button onClick={handleSendNewsletter} className="mr-4 mx-4">
          Send Newsletter
        </Button>
        <Button onClick={handleExportSubscribers} className="mr-4">
          Export Subscribers
        </Button>
        <CSVLink
          data={csvData}
          filename={"subscribers.csv"}
          className="hidden"
          ref={csvLinkRef}
        >
          Export CSV
        </CSVLink>
      </div>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {subscribers.map((subscriber) => (
            <tr key={subscriber.id}>
              <td>{subscriber.id}</td>
              <td>{subscriber.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Subscriptions;
