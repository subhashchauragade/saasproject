import React from 'react';
import { Container } from 'react-bootstrap'; // Import Container from react-bootstrap

const Header = () => {
  return (
    <Container
      fluid
      style={{
        padding: "14px 110px", // Padding for space around the content
        backgroundColor: "black", // Background color
        textAlign: "center", // Centered text alignment
        color: "white", // White text for contrast with the black background
      }}
    >
      <p>
        This page is included in a free SaaS website. View the complete kit➔
      </p>
    </Container>
  );
};

export default Header;
