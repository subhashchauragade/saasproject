import React from "react";
import { Card, Image, Row, Col } from "react-bootstrap";

const Streamline = () => {
  return (
    <div
      className="container"
      style={{
        backgroundColor: "white",
        textAlign: "center",
        width: "1200px",
        height: "1075px",
        padding: "92px 104px 96px 104px",
        gap: "0px",
        opacity: "0px"
      }}
    >
      <span>Everything you need</span>
      <h1 style={{
        fontFamily: "DM Sans",
        fontSize: "54px",
        fontWeight: "700",
        lineHeight: "60px",
        letterSpacing: "-0.06em",
        textAlign: "center",
      }}>
        Streamlined for easy  <br /> management
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
  }}
>
  Enjoy customizable lists, team work tools, and smart <br></br> tracking all in one place. Set tasks, get reminders, and<br>
  </br> see your progress simply and quickly.
</span>

      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Image src="cubehelix1.png" alt="Card image" />
              
<Card.Title style={{
    fontFamily: "DM Sans",
    fontSize: "26px",
    fontWeight: 700,
    lineHeight: "60px",
    letterSpacing: "-0.04em",
    textAlign: "center"
  }}> Integration ecosystem </Card.Title>
              
  <Card.Text style={{
  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "23px",
  letterSpacing: "-0.01em",
  textAlign: "center"
}}>
                Enhance your productivity by connecting
                <br></br>
                with your favorite tools, keeping all your
                <br></br>
                essentials in one place.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Image src="cubehelix2.png" alt="Card image" />
            
<Card.Title style={{
    fontFamily: "DM Sans",
    fontSize: "26px",
    fontWeight: 700,
    lineHeight: "60px",
    letterSpacing: "-0.04em",
    textAlign: "center"
  }}>Goal setting and tracking</Card.Title>
  <Card.Text style={{
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "23px",
    letterSpacing: "-0.01em",
    textAlign: "center"
  }}>
                Define and track your goals, breaking down
                <br></br>
                objectives into achievable tasks to keep your
                <br></br>
                targets in sight.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Streamline;
