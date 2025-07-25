// src/components/Home.jsx
import React from 'react';
import './Home.css';
import Footer from './Footer.jsx'
import {useNavigate}from 'react-router-dom';


const Home = () => {
  const navigateTo=useNavigate();
  return (
    <div className="home">
       <div className="admission-bar">
        <p>🎉 Admission Open for 2025! Enroll Now 🎉</p>
      </div>
      <div className="hero-section">
        <h1>Welcome to Kiddy Preschool</h1>
        <p>Where Little Steps Lead to Big Adventures!</p>

        <button className="cta-button" 
        onClick={()=>navigateTo("/enroll")}> Enroll Now</button>
      </div>
      
      <div className="features-section">
        <div className="feature ">
          <i className="fas fa-graduation-cap"></i>
          <h3>Quality Education</h3>
          <p>Expert teachers and proven curriculum</p>
        </div>
        <div className="feature">
          <i className="fas fa-paint-brush"></i>
          <h3>Creative Learning</h3>
          <p>Art, music, and hands-on activities</p>
        </div>
        <div className="feature">
          <i className="fas fa-heart"></i>
          <h3>Safe Environment</h3>
          <p>Secure and nurturing atmosphere</p>
        </div>
      </div>
    </div>
    
// import React, { useState } from 'react';
// import Enrollment from './Enrollment'; // Assuming Enrollment is a React component

// const App = () => {
//     const [showEnrollment, setShowEnrollment] = useState(false);

//     const handleEnrollClick = () => {
//         setShowEnrollment(true); // Trigger the rendering of Enrollment
//     };

//     return (
//         <div>
//             <button className="cta-button" onClick={handleEnrollClick}>Enroll Now</button>
//             {showEnrollment && <Enrollment />}
//         </div>
//     );
// };

// export default App;

 );
 };
 <Footer/>
export default Home;