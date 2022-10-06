import React from 'react';
import '../../style.css'
import './Footer.css'
import { Container, Row, Col, Button } from "react-bootstrap";



///Footer at the bottom of pages
const Footer = () => {
    return (
      <div className="footer">
        <Container className="site-width ">
          <Row className="align-items-center justify-content-center gx-5">
            <Col className="">
              <p className="text-end text-muted">
                A portfolio website by Art van Zuuk
              </p>
            </Col>
            <Col className="gx-2">
              <Row>
                <Col className='col-auto'>
                  <li>
                    <a href="design@artvanzuuk.nl">
                      <img
                        src={"/images/website/Socials/" + "mail.png"}
                        className="social-icon"
                        alt="..."
                      ></img>
                    </a>
                  </li>
                </Col>
                <Col className='col-auto'>
                  <li>
                    <a href="https://arizonaatwork.com">
                      <img
                        src={"/images/website/Socials/" + "linkedin.png"}
                        className="social-icon"
                        alt="..."
                      ></img>
                    </a>
                  </li>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Footer; 