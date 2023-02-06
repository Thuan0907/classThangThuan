import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <>
        <div className="header">
          <Container>
            <Row>
              <Col className="header-left">
                {" "}
                <ul>
                  <li>
                    <i className="fa-brands fa-facebook"></i>
                    <span>123 sdasdasd, sadasddasd , USA</span>
                  </li>

                  <li>
                    <i className="fa-brands fa-facebook"></i>
                    <a href="">+123456799</a>
                  </li>
                  <li>
                    <i className="fa-brands fa-facebook"></i>
                    <a href="">info@asdadas.com</a>
                  </li>
                </ul>
              </Col>
              <Col className="header-right">
                <ul>
                  <li>
                    <a href="">
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Header;
