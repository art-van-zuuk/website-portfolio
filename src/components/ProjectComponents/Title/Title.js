import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";


///Creates a title with variable size and alignment
function Title(props) {

  return (
    <Container className={"site-width " + props.padding}>
      <Row className="justify-content-center gx-5 align-items-center">
        <Fade>
          <Col className={"mx-auto col-12 col-md-" + props.width}>
            <props.size className={"text-center text-md-" + props.alignment}>
              {props.title}
            </props.size>
          </Col>
        </Fade>
      </Row>
    </Container>
  );
}

export default Title;
