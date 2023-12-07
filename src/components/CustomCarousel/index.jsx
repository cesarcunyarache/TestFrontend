import React, { useState, useEffect } from 'react';
import './CustomCarousel.css';

export default function CustomCarousel() {
    const images = ["/comidaUno.svg", "/comidaDos.svg", "/comidaTres.svg", "/comidaUno.svg", "/comidaDos.svg"];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1000); // Cambiar de imagen cada 1 segundo.

        return () => {
            clearInterval(interval);
        };
    }, [currentIndex, images.length]);

    return (
        <div className="custom-carousel">
            <div className="carousel-container">
                {images.map((image, index) => (
                    <div className=""
                        key={index}
                    >
                        <div
                            className={`carousel-slide ${currentIndex === index ? 'active' : ''}`}
                        >
                            <img className="rotate-2 hover:rotate-3" src={image} alt={`Image ${index + 1}`} width={330} height={400} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
