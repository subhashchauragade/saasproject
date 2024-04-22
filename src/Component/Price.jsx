import React from "react";
import { Col, Container, Image, Row } from 'react-bootstrap';

const Price = () => {
  return (
    <div className="container" style={{ backgroundColor: "white", textAlign: "center" }}>
      <div>
        <span>Boost your productivity</span>
        <h1 style={{
          fontFamily: "DM Sans",
          fontSize: "54px",
          fontWeight: "700",
          lineHeight: "60px",
          letterSpacing: "-0.06em",
          textAlign: "center",
        }}>
          A more effective way <br /> to track progress
        </h1>
        <span
          className="p-3"
          style={{
            fontFamily: "Inter",
            fontSize: "22px",
            fontWeight: 400,
            lineHeight: "31px",
            letterSpacing: "-0.036em",
            textAlign: "center"
          }}>
          Effortlessly turn your ideas into a fully functional, <br />
          responsive, no-code SaaS website in just minutes with <br />
          the set of free components for Framer
        </span>
      </div>

      <Container>
      <Row className="justify-content-center">
        <Col sm={6} md={4}>
          <Image src="Pricing1.png" fluid style={{ width: '351px', height: '508px', top: '539px', padding: '40px 40px 44px 40px', gap: '0px', borderRadius: '24px 0px 0px 0px', border: '1px 0px 0px 0px', opacity: '0px' }} />
        </Col>
        <Col sm={6} md={4}>
          <Image src="Pricing2.png" fluid style={{ width: '351px', height: '603px', top: '454px', left: '376px', padding: '40px 40px 43px 40px', gap: '0px', borderRadius: '24px 0px 0px 0px', opacity: '0px' }} />
        </Col>
        <Col sm={6} md={4}>
          <Image src="Pricing3.png" fluid style={{ width: '351px', height: '728px', top: '329px', left: '752px', padding: '40px 40px 44px 40px', gap: '0px', borderRadius: '24px 0px 0px 0px', border: '1px 0px 0px 0px', opacity: '0px' }} />
        </Col>
      </Row>
    </Container>
  
    </div>
  );
};

export default Price;
