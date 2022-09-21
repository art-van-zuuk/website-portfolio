import React from "react";
import { Container, Row, Col } from "react-bootstrap";

///Creates a grid of images in rows. Requires: list of photos with src, width & height and name of project
function MediumTitle(props) {
  return (
    <Container className={"site-width " + props.padding}>
      <Row className="align-items-center justify-content-center gx-5">
        <h2 className={"text-center text-md-" + props.alignment}>{props.title}</h2>
      </Row>
    </Container>
  );
}

export default MediumTitle;
