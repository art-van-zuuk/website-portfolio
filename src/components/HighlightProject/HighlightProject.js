import React, {  } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Fade from "react-reveal/Fade"

import HandleURL from "../../scripts/HandleURL";
import "./HighlightProject.css";
import GetProjectInfo from "../../scripts/GetProjectInfo";

function HighlightProject(props) {

  //gets information about project
  var projectInfo = GetProjectInfo(props.projectList, props.project);

  if (projectInfo.textColor != null) {
    var textOpacity = "0.8";
  }

   var backgroundColor2 = projectInfo.backgroundColor;
   if (projectInfo.backgroundColor2 != null) {
     backgroundColor2 = projectInfo.backgroundColor2;
   }

  return (
    <div className="App">
      <div
        className="top-bottom-padding"
        style={{
          background:
            "linear-gradient(" +
            projectInfo.backgroundColor +
            ", " +
            backgroundColor2 +
            ")",
        }}
      >
        <Container className="site-width">
          <Row className="text-center text-md-start align-items-center justify-content-center gx-5 gy-5">
            <Col md="auto" className="col-12">
              <Fade bottom distance="50px" delay={250}>
                <img
                  className="highlight-project-image"
                  draggable="false"
                  src={"/images/Projects/" + props.project + "/thumbnail.png"}
                ></img>
              </Fade>
            </Col>
            <Col className="col-md-6 col-11">
              <h2 
              style={{ color: projectInfo.textColor }}>
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
                style={{ color: projectInfo.textColor + " !imortant" }}
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