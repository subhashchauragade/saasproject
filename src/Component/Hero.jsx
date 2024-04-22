import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className="Hero" style={{ background: "linear-gradient(201.28deg, #EAEEFE 45.21%, #183EC2 97.31%)", padding: '20px' }}> {/* Background gradient and padding for breathing space */}
      <img style={{ position: 'absolute', top: 160, left: 650 }} src='cylinder.png' alt="Decorative element" />
      <img style={{ position: 'absolute', top: 500, right: 70 }} src='semi.png' alt="Decorative element" />

      <Container fluid>
        <Row className="align-items-center justify-content-center" style={{ height: '100%' }}> {/* Centered row with full-height */}
          <Col md={6} className="text-center"> {/* Responsive columns */}
            <Image
              src="Heropath.png"
              alt="Hero Path"
              style={{
                width: "80%", // Use a percentage for flexibility
                height: "auto",  // Maintain aspect ratio
                margin: 'auto', // Center the image
              }}
            />
          </Col>
          <Col md={6} className="text-center"> {/* Responsive columns */}
            <Image
              src="Visual.png"
              alt="Visual"
              style={{
                width: "80%", // Use a percentage for flexibility
                height: "auto",  // Maintain aspect ratio
                margin: 'auto', // Center the image
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
