import React from 'react';
import './Programs.css';

// import Toddler from './Toddler.jsx'; 
// import Preschooler from './Preschooler.jsx';
// import Prekindergarten from './PreKindergarten.jsx'; // Assuming your CSS file is named 'Programs.css'

const Programs = () => {
  return (
    <div className="programs-container">
      <h2>Our Programs</h2>
      <p className="programs-description">Explore the fun and engaging programs designed for kids of all ages!</p>
      <div className="programs-grid">
        <div className="program-card toddler">
          <h3>Toddler</h3>
          <p>Fun activities for toddlers to explore and learn.</p>
          <a href="/toddler" className="program-link">Learn More</a>
        </div>
        <div className="program-card preschooler">
          <h3>Preschooler</h3>
          <p>Creative learning for preschoolers with hands-on experiences.</p>
          <a href="/preschooler" className="program-link">Learn More</a>
        </div>
        <div className="program-card prekindergartner">
          <h3>Pre-kindergarten</h3>
          <p>Structured programs for children preparing for kindergarten.</p>
          <a href="/prekindergarten" className="program-link">Learn More</a>
        </div>
      </div>
    </div>
  );
};


export default Programs;
