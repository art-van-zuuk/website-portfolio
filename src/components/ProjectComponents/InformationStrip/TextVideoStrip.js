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

  return (
    <div className="App">
      <Container className={"site-width " + props.padding}>
        <Row className="align-items-center justify-content-center gx-5">
          <Col className=" col-lg-5 col-12 text-md-left text-lg-end">
            <h2>{props.title}</h2>
            <p className="text-lg-end">{props.text}</p>
          </Col>
          <Col className="col-lg-7 col-12">
            <Fade right distance="50px">
              <PlayVideo video={props.video} rounded={props.rounded} />
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TextVideoStrip;
