import React from "react";
import { Container, Row, Col } from "react-bootstrap";

/// Makes a line with title of a section
function SectionLine(props) {
  return (
    <Container className={"site-width " + props.padding}>
      <Row className="align-items-center justify-content-center gx-4">
        <Col className="col-auto">
          <h4 className="text-center">{props.title}</h4>
        </Col>
        <Col>
          <hr
            style={{
              color: "black",
              backgroundColor: "black",
              height: 1,
              marginBottom: "20px",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default SectionLine;
