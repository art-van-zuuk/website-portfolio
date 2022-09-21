import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";


import "./HighlightProject.css";



function HighlightProject(props) {

    //checks projects and chooses right one
    var selectedProject = {};

    props.projectList.map((project, index) => {
        if (Object.values(project)[0] == props.project) {
            selectedProject = props.projectList[index];
        }
    })

    //opens link
    const open = (url) => {
      window.open(url, "_self", "noopener,noreferrer");
    };

    //changes name of project to URL format
    var URLLink = selectedProject.name.replace(/\s/g, "-");
    URLLink = URLLink.toLowerCase();


    return (
      <div className="App">
        <div
          className="highlight-div"
          style={{ backgroundColor: selectedProject.backgroundColor }}
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
                <h2> {selectedProject.name} </h2>
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
                <p> </p>
                <Button
                  variant="secondary rounded-pill"
                  onClick={() => open(URLLink)}
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