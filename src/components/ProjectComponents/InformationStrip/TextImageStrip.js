import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Fade from "react-reveal/Fade";

import "../../../style.css";

///Text + Image strip with image on the right side. Requires: image, title and text
function TextImageStrip(props) {

  return (
    <div className="App">
      <Container className={"site-width " + props.padding}>
        <Row className="align-items-center justify-content-center gx-5">
          <Col className="text-lg-end col-lg-6 col-md-6">
            <h2>{props.title}</h2>
            <p className="text-lg-end">{props.text}</p>
          </Col>
          <Col className="col-lg-6 col-12">
            <Fade right distance="50px">
              <img
                className={props.rounded ? "rounded-element" : ""}
                draggable="false"
                src={"/images/Projects/" + props.image}
                style={{ maxHeight: "300px", maxWidth: "400px" }}
              ></img>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TextImageStrip;
