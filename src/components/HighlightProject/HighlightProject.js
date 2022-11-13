import React, { useState } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Fade from "react-reveal/Fade"
import { motion } from "framer-motion";

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

  const [hover, setHover] = useState(false);


  function mouseEnter(){
    setHover(true);
  }
  function mouseLeave() {
    setHover(false);
  }


  return (
    <>
      <div
        className="App"
        onClick={() => HandleURL(projectInfo.name)}
        style={{ cursor: "pointer" }}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
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
          <>
            <Container className="site-width">
              <Row className="text-center text-md-start align-items-center justify-content-center gx-5 gy-5">
                <Col md="auto" className="col-12">
                  <Fade bottom distance="50px" delay={250}>
                    <motion.div
                      animate={{ scale: hover ? [1, 1.2] : 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img
                        alt="Highlight project"
                        className="highlight-project-image"
                        draggable="false"
                        src={
                          "/images/Projects/" + props.project + "/thumbnail.png"
                        }
                      ></img>
                    </motion.div>
                  </Fade>
                </Col>
                <Col className="col-md-6 col-11">
                  <h2
                    style={{
                      color: projectInfo.textColor,
                    }}
                  >
                    {" "}
                    {projectInfo.name}{" "}
                  </h2>
                  <h4
                    style={{
                      color: projectInfo.textColor,
                      opacity: textOpacity,
                    }}
                  >
                    {" "}
                    {projectInfo.description}{" "}
                  </h4>
                  <p
                    style={{
                      color: projectInfo.textColor,
                      opacity: textOpacity,
                    }}
                  >
                    {projectInfo.explanation}
                  </p>
                  <p> </p>
                  <b
                    style={{
                      color: projectInfo.textColor,
                      opacity: textOpacity,
                    }}
                  >
                    {" "}
                    {projectInfo.type} in {projectInfo.year}{" "}
                  </b>
                  <p> </p>
                  <div
                    style={{ color: projectInfo.textColor === undefined? "black" : projectInfo.textColor, borderColor: projectInfo.textColor }}
                    className="outline-button"
                    onClick={() => HandleURL(projectInfo.name)}
                  >
                    Click here to learn more
                  </div>{" "}
                </Col>
              </Row>
            </Container>
          </>
        </div>
      </div>
    </>
  );
}

export default HighlightProject;