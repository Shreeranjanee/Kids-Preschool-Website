// src/Preschooler.jsx
import React from 'react';
import './Preschooler.css';
import {useNavigate}from 'react-router-dom';
import img1 from "./img3.jpg";

const Preschooler = () => {
  const navigateTo=useNavigate();   
  return (
    <div className="program-container">
      <h1>Preschooler Program</h1>
      <img src={img1} 
        alt="Preschooler Program" 
        className="program-image"
      />
      <p className="program-description">
        Our Preschooler Program is designed for children aged 3-4 years old. It focuses on building creative learning through play, exploring new concepts, and developing social and motor skills. This program emphasizes interactive learning through fun activities such as arts and crafts, games, and songs. 
      </p>
      <p className="program-description">
        This is an exciting stage in your child's development, where curiosity is encouraged, and a strong foundation is built for future learning. Our experienced educators ensure that each child is engaged, supported, and motivated throughout the program.
      </p>
      <button className="cta-button" 
        onClick={()=>navigateTo("/enroll")}> Enroll Now</button>
    </div>
  );
};

export default Preschooler;
