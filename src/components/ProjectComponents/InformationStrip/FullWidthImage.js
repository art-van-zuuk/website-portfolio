import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "../../../style.css";

function FullWidthImage(props) {
  return (
    <div className="App">
      <Container className="site-width block-padding">
        <Row className="align-items-center justify-content-center gx-5">
          <Col className="col-12">
            <img
              draggable="false"
              src={"/images/Projects/" + props.image}
              width="100%"
            ></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FullWidthImage;
