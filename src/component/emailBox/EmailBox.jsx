import React, { Component } from "react";
import "./EmailBox.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class EmailBox extends Component {
  render() {
    return (
      <>
        <Container className="emailBox">
          <img
            src="https://vtcoder-html6.surge.sh/img/email.png"
            alt=""
            className="imgEmail"
          />
          <Row className="email-content">
            <Col>
              <h3>Subscribe to our newsletter</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </Col>
            <Col>
              <input type="text" placeholder="Enter your email" />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default EmailBox;
