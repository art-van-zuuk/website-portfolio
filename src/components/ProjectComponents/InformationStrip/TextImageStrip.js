import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Fade from "react-reveal/Fade";

import "../../../style.css";

///Text + Image strip with image on the right side. Requires: image, title and text
function TextImageStrip(props) {

  var reverseClass = props.reverse ? "flex-row-reverse" : "";

  return (
    <div className="App">
      <Container className={"site-width " + props.padding}>
        <Row
          className={
            "d-flex align-items-center justify-content-center gx-5 " +
            reverseClass
          }
        >
          <Col className="text-lg-start col-lg-6 col-md-6">
            <h2>{props.title}</h2>
            <p className="text-lg-start">{props.text}</p>
          </Col>
          <Col className="col-lg-6 col-12">
            <Fade bottom distance="50px">
              <img
                className={props.rounded ? "rounded-element" : ""}
                draggable="false"
                src={"/images/Projects/" + props.image}
                style={{
                  maxHeight:
                    props.maxHeight != null ? props.maxHeight : "300px",
                  maxWidth: props.maxWidth != null ? props.maxWidth : "100%",
                  objectFit: 'contain',
                }}
              ></img>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TextImageStrip;
