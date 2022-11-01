import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPlayer from "react-player";
import YouTube from "react-youtube";
import Fade from "react-reveal/Fade";

import "../../../style.css";
import PlayVideo from "../../../scripts/PlayVideo";

///Text + Image strip with image on the right side. Requires: image, title and text
function TextVideoStrip(props) {

    const videoOptions = {
      playerVars: {
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0,
        mute: 1,
        loop: 1,
        playlist: props.video,
      },
    };


  // Sets the ratio between text and video
  if (props.videoWidth == null) {
    var videoWidth = 7;
  } else {
    var videoWidth = props.videoWidth;
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
          <Col className={"col-12 col-lg-" + videoWidth}>
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
