import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";

///Creates a row of texts
function TextColumns(props) {
  return (
    <Fade bottom>
      <Container className={"site-width " + props.padding}>
        <Row
          className={
            "justify-content-center align-items-center gx-4 mt-" +
            props.marginHeight
          }
        >
          {props.texts.map((text, index) => {
            return (
              <Col key={index} className={"col-12 col-md-" + props.columnWidth}>
                <props.size
                  className={
                    "text-" + props.alignment + " text-md-" + props.alignment
                  }
                >
                  {text}
                </props.size>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Fade>
  );
}

export default TextColumns;
