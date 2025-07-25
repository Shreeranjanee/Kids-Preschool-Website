import React from 'react';
import './App.css';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './download (6).jpg';
import img5 from './download (7).jpg';
import img6 from './download (3).jpg';
import img7 from './download (8).jpg';
import img8 from './download (5).jpg';

function Gallery() {
  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        <img src={img1} alt="Activity 1" className="gallery-item" />
        <img src={img2} alt="Activity 2" className="gallery-item" />
        <img src={img3} alt="Activity 3" className="gallery-item" />
        <img src={img4} alt="Activity 4" className="gallery-item" />
        <img src={img5} alt="Activity 5" className="gallery-item" />
        <img src={img6} alt="Activity 6" className="gallery-item" />
        <img src={img7} alt="Activity 7" className="gallery-item" />
        <img src={img8} alt="Activity 8" className="gallery-item" />
      </div>
    </div>
  );
}

export default Gallery;
