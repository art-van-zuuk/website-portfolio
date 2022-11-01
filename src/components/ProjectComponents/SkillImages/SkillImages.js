import React from "react";
import { Container, Row, Col } from "react-bootstrap";

///Creates a grid of images in rows. Requires: list of photos with src, width & height and name of project
function SkillImages(props) {

  return (
    <Container className="site-width top-bottom-padding">
      <Row className="align-items-center justify-content-center gx-5">
        <h2 className="text-center">Skills used</h2>
      </Row>
      <Row className="align-items-center justify-content-center gx-5">
        {props.skills.map((image, index) => {
          return (
            <Col key={index} className="col-auto">
              <img
                draggable="false"
                src={"/images/website/SkillImages/" + image + ".jpg"}
                style={{
                  height: "50px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  opacity: "0.35"
                }}
              ></img>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default SkillImages;
