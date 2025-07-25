import React from 'react';
import './Toddler.css';
import {useNavigate}from 'react-router-dom';
import img1 from './img1.jpg'


const Toddler = () => {
    const navigateTo=useNavigate();
  return (
    <div className="program-details">
      <h1>Toddler Program</h1>
      <img src={img1}  alt="Toddler Program" className="program-image" />
      <p>
        Our Toddler Program is designed for children between the ages of 1 and 2 years old. This program focuses on stimulating learning through play, music, and sensory activities. We offer a safe, nurturing environment where toddlers can develop social skills, motor skills, and emotional growth.
      </p>
      <p>
        We believe in fostering a strong foundation for future learning, ensuring that every toddler experiences fun, interactive learning while developing their cognitive and physical abilities. Activities include arts and crafts, storytelling, outdoor play, and more.
      </p>
      <p>
        Join us and watch your toddler explore new skills, make friends, and discover a love for learning!
      </p>
      <button className="cta-button" 
        onClick={()=>navigateTo("/enroll")}> Enroll Now</button>
    </div>
  );
};

export default Toddler;
