import React, {  } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

import HandleURL from "../../scripts/HandleURL";
import "./HighlightProject.css";
import GetProjectInfo from "../../scripts/GetProjectInfo";


function HighlightProject(props) {

  //gets information about project
  var projectInfo = GetProjectInfo(props.project);

  return (
    <div className="App">
      <div
        className="highlight-div"
        style={{ backgroundColor: projectInfo.backgroundColor }}
      >
        <Container className="site-width">
          <Row className="text-start align-items-center justify-content-center gx-5 gy-5">
            <Col md="auto" className="col-12">
              <img
                className="highlight-project-image"
                draggable="false"
                src={"/images/Projects/" + props.project + "/thumbnail.png"}
              ></img>
            </Col>
            <Col className="col-md-6 col-12">
              <h2> {projectInfo.name} </h2>
              <h4> {projectInfo.explanation} </h4>
              <p>
                {" "}
                With this assigment, Braun aimed to make a change in the
                increasing problem of food waste. I found that a big part of
                this waste happens at the consumption and espesially at the
                conservation of food.{" "}
              </p>
              <p> </p>
              <b>
                {" "}
                {projectInfo.type} in {projectInfo.year}{" "}
              </b>
              <p> </p>
              <Button
                variant="secondary rounded-pill"
                onClick={() => HandleURL(projectInfo.name)}
              >
                Learn more
              </Button>{" "}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default HighlightProject;