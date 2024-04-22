import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'black', color: 'white', padding: '40px 20px' }}>
      <Container>
        <Row className="justify-content-between"> {/* This keeps elements aligned correctly */}
          {/* First column with image and text */}
          <Col md={3}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4969de5b21c92450ca84fb56ede470bf395a34026cedf2b97d6baaad3d77031d"
              alt="Brand Logo"
              style={{ width: '40px' }}
            />
            <div style={{ color: 'white', marginTop: '10px' }}>
              Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website.
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae2e79d9097bda90e8dbc287b3cb9722003c51b68f5ace1ce2118eccf1cad873"
              alt="Additional Image"
              style={{ width: '200px', marginTop: '20px' }}
            />
          </Col>

          {/* Second column with links */}
          <Col md={9}> {/* This column will contain the list of links */}
            <Row className="justify-content-between"> {/* Creates inner grid for links */}
              <Col md={3}>
                <div style={{ color: 'white' }}>
                  <strong>Product</strong>
                  <a href="#" style={{ display: 'block', color: 'white', marginTop: '5px' }}>Features</a>
                  <a href="#" style={{ display: 'block', color: 'white', marginTop: '5px' }}>Integrations</a>
                  <a href="#" style={{ display: 'block', color: 'white', marginTop: '5px' }}>Updates</a>
                  <a href="#" style={{ display: 'block', color: 'white', marginTop: '5px' }}>FAQ</a>
                  <a href="#" style={{ display: 'block', color: 'white', marginTop: '5px' }}>Pricing</a>
                </div>
              </Col>

              <Col md={3}>
                <div style={{ color: 'white' }}>
                  <strong>Company</strong>
                  <a href="#" style={{ display: 'block', color: 'white', marginTop: '5px' }}>About</a>
                  <a href="#" style={{ display: 'block', color: 'white', marginTop: '5px' }}>Blog</a>
                  <a href="#" style={{ display: 'block', color: 'white', marginTop: '5px' }}>Careers</a>
                  <a href="#" style={{ display: 'block', color: 'white', marginTop: '5px' }}>Manifesto</a>
                  <a href="#" style={{ display: 'block', color: 'white', marginTop: '5px' }}>Press</a>
                  <a href="#" style={{ display: 'block', color: 'white', marginTop: '5px' }}>Contact</a>
                </div>
              </Col>

              <Col md={3}>
                <div style={{ color: 'white' }}>
                  <strong>Resources</strong>
                  <a href="#" style={{ display: 'block', color: 'white', marginTop: '5px' }}>Examples</a>
                  <a href="#" style={{ display: 'block', color: 'white', marginTop: '5px' }}>Community</a>
                  <a href="#" style={{ display: 'block', color: 'white', marginTop: '5px' }}>Guides</a>
                  <a href="#" style={{ display: 'block', color: 'white', marginTop: '5px' }}>Docs</a>
                </div>
              </Col>

              <Col md={3}>
                <div style={{ color: 'white' }}>
                  <strong>Legal</strong>
                  <a href="#" style={{ display: 'block', color: 'white', marginTop: '5px' }}>Privacy</a>
                  <a href="#" style={{ display: 'block', color: 'white', marginTop: '5px' }}>Terms</a>
                  <a href="#" style={{ display: 'block', color: 'white', marginTop: '5px' }}>Security</a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
