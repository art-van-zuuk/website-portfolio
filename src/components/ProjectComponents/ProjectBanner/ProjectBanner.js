import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "../../../style.css";
import "./ProjectBanner.css";
import GetProjectInfo from "../../../scripts/GetProjectInfo";

///Banner at top of project. Requires: project
function ProjectBanner(props) {

  //gets information about project
  var projectInfo = GetProjectInfo(props.project);

  return (
    <div className="App">
      <div
        className="ProjectBannerBackground"
        style={{ backgroundColor: projectInfo.backgroundColor }}
      >
        <Container className="site-width top-bottom-padding">
          <Row className="align-items-center justify-content-center gx-5">
            <Col className="text-start col-lg-6 col-10">
              <h1>{projectInfo.name}</h1>
              <h4> {projectInfo.description} </h4>
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
              <p> {projectInfo.team} </p>
            </Col>
            <Col className="col-lg-6 col-10">
              <img
                className="ProjectBannerImage"
                draggable="false"
                src={"/images/Projects/" + projectInfo.name + "/thumbnail.png"}
              ></img>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ProjectBanner;
