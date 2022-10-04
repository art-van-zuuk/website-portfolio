import React, {  } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

import HandleURL from "../../scripts/HandleURL";
import "./HighlightProject.css";
import GetProjectInfo from "../../scripts/GetProjectInfo";

function HighlightProject(props) {

  //gets information about project
  var projectInfo = GetProjectInfo(props.projectList, props.project);

  if (projectInfo.textColor != null) {
    var textOpacity = "0.8";
  }

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
              <h2 style={{ color: projectInfo.textColor }}>
                {" "}
                {projectInfo.name}{" "}
              </h2>
              <h4
                style={{ color: projectInfo.textColor, opacity: textOpacity }}
              >
                {" "}
                {projectInfo.description}{" "}
              </h4>
              <p style={{ color: projectInfo.textColor, opacity: textOpacity }}>
                {projectInfo.explanation}
              </p>
              <p> </p>
              <b style={{ color: projectInfo.textColor, opacity: textOpacity }}>
                {" "}
                {projectInfo.type} in {projectInfo.year}{" "}
              </b>
              <p> </p>
              <Button
                style={{ color: projectInfo.textColor }}
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