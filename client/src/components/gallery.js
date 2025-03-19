import React, { useEffect, useState } from 'react';
import './gallery.css';

function Gallery() {
    const images = ["jesseville.jpg", "tampere.jpg", "ville1.jpg", "ville2.jpg", "ville3.jpg"];

    return (
        <div className="gallery-container">
            {images.map((name, index) => (
                <img className='images' key={index} src={`/images/${name}`} alt={`Image ${index + 1}`} />
            ))}
        </div>
    );
}

export default Gallery;

