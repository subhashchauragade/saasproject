import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Sample data for nine testimonials with image paths or URLs
const testimonials = [
  {
    image: 'Testimonial1.png',
  },
  {
    image: 'Testimonial2.png',
  },
  {
    image: 'Testimonial3.png',
  },
  {
    image: 'Testimonial4.png',
  },
  {
    image: 'Testimonial5.png',
  },
  {
    image: 'Testimonial6.png',
  },
  {
    image: 'Testimonial7.png',
  },
  {
    image: 'Testimonial8.png',
  },
  {
    image: 'Testimonial9.png',
  },
];

function Testimonials() {
  return (
    <Container>
      <h1 style={{
        fontFamily: 'DM Sans',
        fontSize: '54px',
        fontWeight: '700',
        lineHeight: '60px',
        letterSpacing: '-0.06em',
        textAlign: 'center'
      }}>
        Our Happy Customers
      </h1>
      
      <Row>
        {testimonials.map((testimonial, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="mb-4">
            <Card style={{ border: 'none' }}> {/* Removes the border */}
              <Card.Body className="text-center">
                <Image
                  src={testimonial.image} // The image source
                  width={325} // Adjusts the width to fit
                  height={211} // Adjusts the height to fit
                  style={{ objectFit: 'cover' }} // Ensures the image fits
                  roundedCircle // Keeps the image round
                  alt={`Testimonial image ${index + 1}`} // Alt text
                />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Testimonials;
