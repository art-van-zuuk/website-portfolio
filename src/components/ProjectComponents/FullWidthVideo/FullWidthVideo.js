import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import PlayVideo from "../../../scripts/PlayVideo";
import "../../../style.css";


///Full with image. Requires: name of image and project
function FullWidthVideo(props) {

  return (
    <div className="App">
      <Container className={"site-width " + props.padding}>
        <Row className="align-items-center justify-content-center gx-5">
          <Col className="col-12">
            <PlayVideo video={props.video} rounded={props.rounded} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FullWidthVideo;
