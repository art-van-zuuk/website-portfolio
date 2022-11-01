import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";

import GetProjectInfo from "../../../scripts/GetProjectInfo";
import "../../../style.css";
import "./ProjectBanner.css";

///Banner at top of project. Requires: project
function ProjectBanner(props) {

  //gets information about project
  var projectInfo = GetProjectInfo(props.projectList ,props.project);

  if(projectInfo.textColor != null){
    var textOpacity = "0.8";
  }

  var backgroundColor2 = projectInfo.backgroundColor;
  if(projectInfo.backgroundColor2 != null){
    backgroundColor2 = projectInfo.backgroundColor2;
  }


  return (
    <div className="App">
      <div
        className="ProjectBannerBackground"
        // style={{ backgroundColor: projectInfo.backgroundColor }}
        style={{
          background:
            "linear-gradient(" +
            projectInfo.backgroundColor +
            ", " +
            backgroundColor2 +
            ")",
        }}
      >
        <Container className="site-width top-bottom-padding">
          <Row className="align-items-center justify-content-center gx-5">
            <Col className="text-start col-lg-6 col-10">
              <h1 style={{ color: projectInfo.textColor }}>
                {projectInfo.name}
              </h1>
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
              <p style={{ color: projectInfo.textColor, opacity: textOpacity }}>
                {" "}
                {projectInfo.team}{" "}
              </p>
            </Col>
            <Col className="col-lg-6 col-10">
              <Fade right delay={500} duration={2000} distance="100px">
                <img
                  className="ProjectBannerImage"
                  draggable="false"
                  alt={""}
                  src={
                    "/images/Projects/" + projectInfo.name + "/thumbnail.png"
                  }
                ></img>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ProjectBanner;
