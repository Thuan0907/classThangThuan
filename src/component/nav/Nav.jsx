import React, { Component } from "react";
import "./Nav.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class Nav extends Component {
  render() {
    return (
      <>
        <Container className="navWrap">
          <Row>
            <Col>
              <img src="https://vtcoder-html6.surge.sh/img/logo.png" alt="" />
            </Col>
            <Col className="nav-main">
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Buy Tokens</a>
                </li>
                <li>
                  <a href="">FAQ</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </Col>
            <Col className="nav-left">
              <button className="btn-login">Log in</button>
              <span className="signUp">Sign Up</span>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Nav;
