import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";


///Creates a title with variable size and alignment
function MediumTitle(props) {

  return (
    <Container className={"site-width " + props.padding}>
      <Row className="align-items-center justify-content-center gx-5">
        <Fade bottom>
          <props.size className={"text-center text-md-" + props.alignment}>{props.title}</props.size>
        </Fade>
      </Row>
    </Container>
  );
}

export default MediumTitle;
