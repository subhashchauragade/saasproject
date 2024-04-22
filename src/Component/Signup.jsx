import React from "react";
import { Button, Container, Row, Col, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Responsive Signup component
const Signup = () => {
  return (
    <div style={{ 
      background: 'linear-gradient(180deg, #FFFFFF 27.96%, #D2DCFF 102.93%)', // Gradient background
      padding: '5% 10%', // Padding with percentage-based values for responsiveness
    }}>
      {/* Optional images positioned relatively to avoid absolute positioning */}
      <img
        style={{ position: 'absolute', top:4900,left:10 }}
        src='emojistar.png'
        alt="Star Emoji"
      />
      <img
        style={{ position: 'absolute', top:5000,right:10 }}
        src='helix.png'
        alt="Helix"
      />

      <h1 style={{
        fontFamily: 'DM Sans',
        fontSize: '2.5rem', // Responsive font size
        fontWeight: '700',
        lineHeight: '3rem',
        letterSpacing: '-0.06em',
        textAlign: 'center',
        color: '#000'
      }}>
        Sign up for free today
      </h1>
      
      <p style={{
        fontFamily: 'Inter',
        fontSize: '1.2rem', // Responsive font size
        fontWeight: '400',
        lineHeight: '1.5rem',
        letterSpacing: '-0.01em',
        textAlign: 'center',
      }}>
        Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
      </p>

      {/* Centering buttons and links using Bootstrap utilities */}
      <Container className="text-center my-4">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ gap: '20px' }} // Adjusts spacing between elements
        >
          {/* Dark "Get for Free" Button */}
          <Button variant="dark" size="lg">
            Get for Free
          </Button>

          {/* "Learn More" Link */}
          <Nav.Link
            href="#learn-more"
            style={{ fontSize: '18px', color: 'black', textDecoration: 'none' }} // Simple styling for the link
          >
            Learn More
          </Nav.Link>
        </div>
      </Container>
    </div>
  );
};

export default Signup;
