import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Fade from "react-reveal/Fade";

import "../../../style.css";

///Full with image. Requires: name of image and project
function FullWidthImage(props) {
  return (
    <div className="App">
      <Fade>
        <Container className={"site-width " + props.padding}>
          <Row className="align-items-center justify-content-center gx-5">
            <Col className="col-12">
              <img
                className={props.rounded ? "rounded-element" : ""}
                draggable="false"
                src={"/images/Projects/" + props.project + "/" + props.image}
                width="100%"
              ></img>
            </Col>
          </Row>
        </Container>
      </Fade>
    </div>
  );
}

export default FullWidthImage;
