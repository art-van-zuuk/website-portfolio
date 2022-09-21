import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "../../../style.css";

///Text + Image strip with image on the left side. Requires: image, title and text
function ImageTextStrip(props) {
  return (
    <div className="App">
      <Container className={"site-width " + props.padding}>
        <Row className="align-items-center justify-content-center gx-5">
          <Col className="col-lg-6 col-10">
            <img
              draggable="false"
              src={"/images/Projects/" + props.image}
              style={{ maxHeight: "300px", maxWidth: "400px" }}
            ></img>
          </Col>
          <Col className="text-lg-start col-lg-6 col-10">
            <h2>{props.title}</h2>
            <p className="text-lg-start text-center">{props.text}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ImageTextStrip;
