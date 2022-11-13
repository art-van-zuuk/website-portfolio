import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import HandleURL from '../../scripts/HandleURL';
import '../../style.css';
import './Footer.css';



///Footer at the bottom of pages
const Footer = () => {
    return (
      <div className="footer">
        <Container className="site-width ">
          <Row className="align-items-center justify-content-center gx-5">
            <Col>
              <>
                <p className="text-center text-muted">
                  Don't hesitate to get in contact!
                </p>
                <Row className="align-items-center justify-content-center gx-5">
                  <Col
                    className="col-auto"
                    onClick={() => HandleURL("mailto:design@artvanzuuk.nl", "_blanc")}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src="/images/website/Socials/mail.png"
                      className="social-icon"
                      alt="..."
                    ></img>
                  </Col>
                  <Col
                    className="col-auto"
                    onClick={() =>
                      HandleURL(
                        "https://www.linkedin.com/in/artvanzuuk/",
                        "_blanc"
                      )
                    }
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src="/images/website/Socials/linkedin.png"
                      className="social-icon"
                      alt="..."
                    ></img>
                  </Col>
                  <Col
                    className="col-auto"
                    onClick={() =>
                      HandleURL(
                        "https://www.youtube.com/channel/UCsSZuON4bJaKberCRzVSneQ",
                        "_blanc",
                        false
                      )
                    }
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src="/images/website/Socials/youtube.png"
                      className="social-icon"
                      alt="..."
                    ></img>
                  </Col>
                </Row>
              </>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Footer; 