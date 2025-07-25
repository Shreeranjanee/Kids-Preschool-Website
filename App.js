import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Programs from "./Programs.jsx";
import Gallery from "./Gallery.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import Enrollment from "./Enrollment.jsx";
import Schedule from "./Schedule.jsx";
import Teachers from "./Teachers.jsx";

import Toddler from "./Toddler.jsx";
import Preschooler from "./Preschooler.jsx";
import PreKindergarten from "./PreKindergarten.jsx";

// import Login from "./Login.jsx";
// import Register from "./Register.jsx";
// import Parentdashboard from "./Parentdashboard.jsx";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track login status

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          
            <Route path='/toddler' element={<Toddler/>}/>
            <Route path='/preschooler' element={<Preschooler/>}/>
            <Route path='/prekindergarten' element={<PreKindergarten/>}/>
          
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/enroll" element={<Enrollment />} />

          
       
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
