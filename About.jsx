import React from "react";
import "./About.css";
import aboutImage1 from "./preschool-children-vector-23095272.jpg"; // Update with your image paths
import aboutImage2 from "./download (1).jpg";
import aboutImage3 from "./about.jpg";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Learn more about who we are and our journey toward excellence.</p>
      </div>

      <div className="about-section">
        <div className="about-content slide-in-left">
          <h2>Our Mission</h2>
          <p>
            At Kiddy Preschool, we are dedicated to nurturing young minds
            through a creative, safe, and inclusive environment. Our mission is
            to inspire curiosity, foster confidence, and ignite a lifelong
            passion for learning in every child.
          </p>
          <p>
            Our programs emphasize holistic development, blending academics,
            arts, and social skills to help children grow into well-rounded
            individuals ready to take on the world.
          </p>
        </div>
        <div className="about-image slide-in-right">
          <img src={aboutImage1} alt="Mission" />
        </div>
      </div>

      <div className="about-section reverse">
        <div className="about-image slide-in-left">
          <img src={aboutImage2} alt="Values" />
        </div>
        <div className="about-content slide-in-right">
          <h2>Our Vision</h2>
          <p>
            We envision a world where every child has the opportunity to
            achieve their full potential. Our vision is to create a community
            of young learners who are curious, compassionate, and courageous,
            ready to contribute to a better tomorrow.
          </p>
          <p>
            At Kiddy Preschool, we take pride in building a strong foundation
            for children, ensuring they are equipped with the skills needed to
            succeed in a rapidly changing world.
          </p>
        </div>
      </div>

      <div className="about-section">
        <div className="about-content slide-in-left">
          <h2>Why Choose Us?</h2>
          <p>
            Our preschool stands out because of our dedicated teachers, proven
            curriculum, and commitment to excellence. We believe in learning
            through play, fostering creativity, and creating meaningful
            experiences for children.
          </p>
          <p>
            Parents trust us to provide a nurturing environment where their
            little ones can explore, discover, and thrive.
          </p>
        </div>
        <div className="about-image slide-in-right">
          <img src={aboutImage3} alt="Why Choose Us" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
