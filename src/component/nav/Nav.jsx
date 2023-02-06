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
                <li>
                  <a href="">test</a>
                </li>
              </ul>
            </Col>
            <Col className="nav-left">
              <button>Log in</button>
              <button>Sign up</button>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Nav;
