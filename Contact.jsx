import React, { useState } from "react";
import axios from 'axios';  // Import Axios
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure all fields are filled before sending the request
    if (formData.name && formData.email && formData.message) {
      try {
        // Send a POST request to the backend with the form data
        const response = await axios.post('http://localhost:9000/rrce/contact-us', formData);

        if (response.data.success) {
          setAlertMessage("Your message has been sent successfully!");
        } 

        setFormData({ name: "", email: "", message: "" }); // Clear form fields after submission
      } catch (error) {
        setAlertMessage("There was an error sending your message. Please try again.");
        console.error(error);
      }

      // Resetting alert message after 5 seconds
      setTimeout(() => setAlertMessage(""), 5000);
    } else {
      setAlertMessage("Please fill all fields before submitting.");
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-content">
        {/* Contact Details Section */}
        <div className="contact-details">
          <h2>Our Office</h2>
          <p>Kiddy Preschool Avenue, City Hall, USA</p>
          <p>Phone: +123 456 7890</p>
          <p>Email: contact@kiddypreschool.com</p>
        </div>

        {/* Map Section */}
        <div className="contact-map">
          <h2>Find Us Here</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2910.176892480191!2d-74.00597428465477!3d40.71277517933155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1c299ed94f%3A0x5f76b4294c98a4b7!2sPreschool%20Avenue!5e0!3m2!1sen!2sus!4v1627987816671!5m2!1sen!2sus"
            title="Google Map"
            frameBorder="0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form-box">
          <h2>Send Us a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="contact-button">
              Send Message
            </button>
          </form>
          {/* Displaying the success or error message */}
          {alertMessage && <div className="alert">{alertMessage}</div>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
