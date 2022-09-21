import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPlayer from "react-player";

import "../../../style.css";


///Full with image. Requires: name of image and project
function FullWidthVideo(props) {

  return (
    <div className="App">
      <Container className={"site-width " + props.padding}>
        <Row className="align-items-center justify-content-center gx-5">
          <Col className="col-12">
            <iframe
              src={props.video}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FullWidthVideo;
