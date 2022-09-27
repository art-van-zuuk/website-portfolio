import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "../../../style.css";

///Text + Image strip with image on the right side. Requires: image, title and text
function TextImageStrip(props) {

  return (
    <div className="App">
      <Container className={"site-width " + props.padding}>
        <Row className="align-items-center justify-content-center gx-5">
          <Col className=" col-lg-6 col-12 text-md-left text-lg-end">
            <h2>{props.title}</h2>
            <p className="text-lg-end">{props.text}</p>
          </Col>
          <Col className="col-lg-6 col-12">
            <img
              className= {props.rounded ? "rounded-element" : "" }
              draggable="false"
              src={"/images/Projects/" + props.image}
              style={{ maxHeight: "300px", maxWidth: "400px" }}
            ></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TextImageStrip;
