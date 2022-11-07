import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";

import "../../../style.css";

///Text + Image strip with image on the right side. Requires: image, title and text
function TextImageStrip(props) {
  
  // Sets the ratio between text and video
  var imageWidth = 0;
  if (props.imageWidth == null) {
    imageWidth = 6;
  } else {
    imageWidth = props.imageWidth;
  }
  var textWidth = 12 - imageWidth;

  // Handles reversing text and image
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
          <Col className={"text-lg-start col-md-6 col-lg-" + textWidth}>
            <h2>{props.title}</h2>
            <p className="text-lg-start">{props.text}</p>
          </Col>
          <Col className={"col-12 col-lg-" + imageWidth}>
            <Fade bottom distance="50px">
              <img
                alt=""
                className={props.rounded ? "rounded-element" : ""}
                draggable="false"
                src={"/images/Projects/" + props.image}
                style={{
                  maxHeight:
                    props.maxHeight != null ? props.maxHeight : "300px",
                  maxWidth: props.maxWidth != null ? props.maxWidth : "100%",
                  objectFit: "contain",
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
