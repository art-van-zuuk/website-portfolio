import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "../../../style.css";
import "./ProjectBanner.css";

import projectList from "../../Projects.js";

function ProjectBanner(props) {
  //checks projects and chooses right one
  var selectedProject = {};

  projectList.map((project, index) => {
    if (Object.values(project)[0] == props.project) {
      selectedProject = projectList[index];
      
    }
  });

  return (
    <div className="App">
      <div
        className="ProjectBannerBackground"
        style={{ backgroundColor: selectedProject.backgroundColor }}
      >
        <Container className="site-width">
          <Row className="align-items-center justify-content-center gx-5">
            <Col className="text-left col-lg-6 col-10">
              <h1>{selectedProject.name}</h1>
              <h4> {selectedProject.explanation} </h4>
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
                {selectedProject.type} in {selectedProject.year}{" "}
              </b>
              <p> {selectedProject.team} </p>
            </Col>
            <Col className="col-lg-6 col-10">
              <img
                className="ProjectBannerImage"
                draggable="false"
                src={
                  "/images/Projects/" + selectedProject.name + "/thumbnail.png"
                }
              ></img>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ProjectBanner;
