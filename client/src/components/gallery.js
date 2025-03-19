import React, { useEffect, useState } from 'react';
import './gallery.css';

function Gallery() {
    const images = ["jessegoat.jpg", "jesseville.jpg", "ville1.jpg", "helsinkitop8.jpg", "ville2.jpg", "ville3.jpg", "tampere.jpg", "kalletank.jpg", "jessetank.jpg", "kallejesse.jpg", "lahtitampere.jpg", "1st.jpg", "turkuville.JPG", "turkupojat.JPG", "turkukayo.JPG", "narutonats.jpg", "oulutop.jpg"];
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    }

    const closeZoom = () => {
        setSelectedImage(null);
      };
    
      return (
        <div className="gallery-container">
          {images.map((name, index) => (
            <img
              className="image"
              key={index}
              src={`/images/${name}`}
              alt={`Image ${index + 1}`}
              onClick={() => handleImageClick(name)}
            />
          ))}
    
          {selectedImage && (
            <div className="overlay" onClick={closeZoom}>
              <img className="zoomed-image" src={`/images/${selectedImage}`} alt="Zoomed" />
            </div>
          )}
        </div>
      );
    }
    
    export default Gallery;
