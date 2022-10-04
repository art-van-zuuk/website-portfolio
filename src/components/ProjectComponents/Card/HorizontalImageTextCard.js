import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

///Creates a grid of images in rows. Requires: list of photos with src, width & height and name of project
function HorizonalImageTextCard(props) {
  return (
    <Container className={"site-width " + props.padding}>
      <Card className="shadow rounded-element">
        <Row className="no-gutters align-items-center justify-content-center gx-5">
          <Col className="col-md-5">
            <img
              src={"/images/Projects/" + props.image}
              className="card-img w-100 rounded-element"
              alt="..."
            ></img>
          </Col>
          <Col className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.text}</p>
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default HorizonalImageTextCard;
