import React from 'react';
import { Card, Row, Col, Image, Container } from 'react-bootstrap'; // Ensure Bootstrap is imported

const Screenshot = () => {
  return (
    <Container fluid style={{ textAlign: 'center' }}> {/* Use fluid for full-width container */}
      <Row className="justify-content-center"> {/* Center the first row */}
        <Col xs={12} sm={8} md={6} lg={4} className="mb-4"> {/* Responsive column sizing */}
          <Image
            src="frame18.png"
            alt="First Image"
            style={{
              maxWidth: "100%", // Keep image responsive
              height: "auto",  // Maintain aspect ratio
              marginBottom: "20px", // Space below the image
            }}
          />
        </Col>
      </Row>

      <Row className="justify-content-center"> {/* Center the second row */}
        <Col xs={12} sm={10} md={8} lg={6} className="mb-4"> {/* Responsive column sizing */}
          <Image
            src="Screens.png"
            alt="Second Image"
            style={{
              width: "100%", // Keep image within the column's width
              height: "auto",  // Maintain aspect ratio
              marginBottom: "20px", // Space below the image
            }}
          />
        </Col>
      </Row>

      <img style={{position:'absolute', top:1800,left:200}} src='torus.png' alt="Image description" fluid />
      <img style={{position:'absolute', top:1600,right:200}} src='pyramid.png' alt="Image description" fluid />

      <Row className="justify-content-center"> {/* Center the third row */}
        <Col sm={6} md={3}>
          <Card style={{ border: 'none', textAlign: 'center' }}> {/* Card layout */}
            <Card.Body>
              <Card.Title>
                <Image
                  src="Icons.png"
                  alt="Integration ecosystem"
                  style={{ width: '40px', height: 'auto' }} // Adjusted icon size
                />
                <br />
                Integration ecosystem
              </Card.Title>
              <Card.Text>
                Track your progress and motivate your efforts every day.
              </Card.Text>
              <a href="#learn-more">Learn more ➔</a> {/* Add a link for 'Learn More' */}
            </Card.Body>
          </Card>
        </Col>

        {/* Repeat for other content */}
        <Col sm={6} md={3}>
          <Card style={{ border: 'none', textAlign: 'center' }}> {/* Card layout */}
            <Card.Body>
              <Card.Title>
                <Image
                  src="Icons2.png"
                  alt="Goal setting and tracking"
                  style={{ width: '40px', height: 'auto' }} // Adjusted icon size
                />
                <br />
                Goal setting and tracking
              </Card.Title>
              <Card.Text>
                Set and track goals with manageable task breakdowns.
              </Card.Text>
              <a href="#learn-more">Learn more ➔</a> {/* Add a link for 'Learn More' */}
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} md={3}>
          <Card style={{ border: 'none', textAlign: 'center' }}>
            <Card.Body>
              <Card.Title>
                <Image
                  src="Icons4.png"
                  alt="Secure data encryption"
                  style={{ width: '40px', height: 'auto' }} // Adjusted icon size
                />
                <br />
                Secure data encryption
              </Card.Title>
              <Card.Text>
                Ensure your data's safety with top-tier encryption.
              </Card.Text>
              <a href="#learn-more">Learn more ➔</a>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} md={3}>
          <Card style={{ border: 'none', textAlign: 'center' }}>
            <Card.Body>
              <Card.Title>
                <Image
                  src="Icons3.png"
                  alt="Customizable notifications"
                  style={{ width: '40px', height: 'auto' }} // Adjusted icon size
                />
                <br />
                Customizable notifications
              </Card.Title>
              <Card.Text>
                Get alerts on tasks and deadlines that matter most.
              </Card.Text>
              <a href="#learn-more">Learn more ➔</a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Screenshot;
