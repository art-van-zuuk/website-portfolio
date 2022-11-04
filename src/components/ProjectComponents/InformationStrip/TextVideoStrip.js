import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";

import PlayVideo from "../../../scripts/PlayVideo";
import "../../../style.css";

///Text + Image strip with image on the right side. Requires: image, title and text
function TextVideoStrip(props) {

  

  // Sets the ratio between text and video
  var videoWidth = 0;
  if (props.videoWidth == null) {
    videoWidth = 7;
  } else {
    videoWidth = props.videoWidth;
  }
  var textWidth = 12 - videoWidth;

  // Handles reversing text and image
  var reverseClass = props.reverse?  "flex-row-reverse" : "";


  return (
    <div className="App">
      <Container className={"site-width " + props.padding}>
        <Row
          className={
            "d-flex align-items-center justify-content-center gx-5 " +
            reverseClass
          }
        >
          <Col
            className={
              "align-self-center col-12 text-md-left text-lg-start col-lg-" +
              textWidth
            }
          >
            <h2>{props.title}</h2>
            <p className="text-lg-start">{props.text}</p>
          </Col>
          <Col className={"align-self-center col-12 col-lg-" + videoWidth}>
            <div style={{ maxWidth: props.maxWidth }}>
              <Fade bottom distance="50px">
                <PlayVideo
                  video={props.video}
                  rounded={props.rounded}
                  aspectRatio={props.aspectRatio}
                />
              </Fade>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TextVideoStrip;
