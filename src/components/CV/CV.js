import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slide from "react-reveal/Slide";

import "../../style.css";
import "./CV.css";
import image from "./Portfolio picture bw.png";

///Item in CV for Work Experience and Eduction. Requires: allignment and information
function TimelineItem(props) {
  return (
    <div>
      <p className={"CVDate text-md-" + props.alignment + " text-center"}>
        {" "}
        {props.date}
      </p>
      <p className={"CVTitle text-md-" + props.alignment + " text-center"}>
        {" "}
        {props.title}
      </p>
      {props.work?.map((work) => {
        return (
          <p
            key={work}
            className={"CVWork text-md-" + props.alignment + " text-center"}
          >
            {" "}
            {work}
          </p>
        );
      })}
      <br />
    </div>
  );
}

function CV() {
  return (
    <div className="App">
      <div className="fullWidthDiv">
        {/* Person description with photo */}
        <div className="personDescription">
          <Container className="site-width top-bottom-padding">
            <Row className="align-items-center justify-content-center gx-5">
              <Col className="col-md-6 col-12 text-md-start text-center">
                <h1> Hello! </h1>
                <p className="text-md-start text-center">
                  {" "}
                  My name is Art van Zuuk, a Master's student in Industrial
                  Design. I enjoy creating designs that take away the clutter in
                  life and designs that are put together in a smart way.
                  Especially when electronics or mechanics are involved. Next to
                  learning as a student, I like to have my own projects. After
                  all, I just want to create.
                </p>
              </Col>
              <Col md="auto" className="col-12 text-center">
                <Slide right>
                  <img alt='' className="CVImage" draggable="false" src={image}></img>
                </Slide>
              </Col>
            </Row>
          </Container>
        </div>
        {/* CV */}
        <Container className="site-width top-bottom-padding">
          <Row>
            <h1 className="text-center"> Curriculum vitae </h1>{" "}
          </Row>
          <Row className="gx-5d">
            <Col className="col-md-6 col-12 text-md-end text-center">
              <h3 className="CVType"> Work Experience </h3>

              <TimelineItem
                date="2022 - current"
                title="Art van Zuuk Design (Freelance)"
                work={["Making promotional videos", "Making graphic designs"]}
                alignment="end"
              />
              <TimelineItem
                date="2017 - current"
                title="René van Zuuk Architects"
                work={[
                  "Building App for municipality of Almere",
                  "Promotional work",
                ]}
                alignment="end"
              />
              <TimelineItem
                date="2021 - 2022"
                title="Design Engineer at Project MARCH"
                work={[
                  "Designing covers of the exoskelton",
                  "Designing the input device",
                ]}
                alignment="end"
              />
              <TimelineItem
                date="Oct. 2017 – Oct. 2018"
                title="Study association ID, Video committee"
                work={[
                  "Introduction videos for committees",
                  "After movies of events and festivals",
                ]}
                alignment="end"
              />
              <TimelineItem
                date="Oct. 2018 – Oct. 2019"
                title="Study association ID, Public Relations committee"
                work={[
                  "Building websites for festival and freshmen weekend",
                  "Giving Adobe Photoshop and Illustrator workshops",
                ]}
                alignment="end"
              />
            </Col>
            <Col className="col-md-6 col-12 text-md-start text-center">
              <h3 className="CVType"> Education</h3>

              <TimelineItem
                date="2020 - current"
                title="Master Integrated Product Design, TU Delft"
                alignment="start"
              />
              <TimelineItem
                date="2019 – 2020"
                title="Industrial Design, Lund University, Sweden"
                alignment="start"
              />
              <TimelineItem
                date="2017-2020"
                title="Bachelor Industrial Design Engineering, TU Delft"
                work={["Cum Laude"]}
                alignment="start"
              />
              <TimelineItem
                date="2019 – 2020"
                title="Helen Parkhurst Lyceum Almere"
                work={["Technasium"]}
                alignment="start"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default CV;
