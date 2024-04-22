import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

function NavbarApp() {
  return (
    <Navbar
      expand="lg"
      style={{
        background: "linear-gradient(201.28deg, #EAEEFE 45.21%, #183EC2 97.31%)",
        padding: '10px 20px', // Padding for breathing space
      }}
    >
      <Container fluid> {/* Use fluid container for full-width layout */}
        <Navbar.Brand
          href="#home"
          className="d-flex align-items-center"
          style={{ marginRight: '485px' }} 
        >
          <img src="Default.png" alt="Default Logo" style={{ width: 40, height: 41 }} />
          <span style={{ marginLeft: '10px' }}>Made by</span>
          <img
            src="framer.png"
            alt="Framer Logo"
            style={{ width: 68, height: 22, marginLeft: '10px' }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#customers">Customers</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#update">Updates</Nav.Link>
            <Nav.Link href="#help">Help</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Button variant="dark" className="ml-3">Get for Free</Button> {/* Proper spacing before button */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
