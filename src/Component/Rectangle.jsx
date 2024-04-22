import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const LogoCarousel = () => {
  // Array of logo images
  const logos = [
    'acme.png', 
    'quantum.png',
    'echo.png',
    'celestia.png',
    'pulse.png',
    'apex.png',
  ];

  return (
    <Container fluid>
      <Carousel
        interval={3000} // Time in milliseconds before each slide change
        indicators={true} // Show indicators at the bottom
        controls={true} // Show left/right controls
        className="logo-carousel" // Custom class name for additional styling
      >
        {logos.map((logo, index) => (
          <Carousel.Item key={index}>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                style={{
                  width: '150px', // Width for each logo
                  height: 'auto', // Maintain aspect ratio
                  margin: '0 auto', // Center horizontally
                }}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default LogoCarousel;
