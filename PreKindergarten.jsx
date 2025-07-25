// src/Prekindergarten.jsx
import React from 'react';
import './Prekindergarten.css';
import {useNavigate}from 'react-router-dom';
import img1 from "./img2.jpg";

const Prekindergarten = () => {
  const navigateTo=useNavigate();
  return (
    <div className="program-container">
      <h1>Pre-Kindergarten Program</h1>
      <img src={img1} 
        alt="Pre-Kindergarten Program" 
        className="program-image"
      />
      <p className="program-description">
        The Pre-Kindergarten Program is designed for children aged 5-6 years. It helps prepare children for kindergarten by developing advanced skills in reading, writing, math, and social interaction. The curriculum is focused on building confidence, independence, and critical thinking skills.
      </p>
      <p className="program-description">
        Our educators provide a nurturing environment where children engage in structured activities, teamwork, and creative exploration to ensure they are ready for the next step in their educational journey.
      </p>
      <button className="cta-button" 
        onClick={()=>navigateTo("/enroll")}> Enroll Now</button>
    
    </div>
  );
};

export default Prekindergarten;
