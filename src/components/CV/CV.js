import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap'

import '../../style.css'
import './CV.css'
import image from './Portfolio picture bw.png'

function TimelineItem(props) {
    return (
        <div>
            <p className={"CVDate text-" + props.alignment}> {props.date}</p>
            <p className={"CVTitle text-" + props.alignment}> {props.title}</p>
            {props.work?.map(work => {
                return (
                    <p className={"CVWork text-" + props.alignment}> {work}</p>
                );
            })}
            <br/>
        </div>
    )
}

function CV() {
    return (
        <div className="App">
            <div className="fullWidthDiv">
                {/* Person description with photo */}
                    <div className="personDescription">
                        <Container className="site-width">
                            <Row className="align-items-center justify-content-center gx-5">
                                <Col className="col-md-6 col-12">
                                    <h1> Hello! </h1>
                                    <p> My name is Art van Zuuk. My interests in the design field are broad. Next to doing school projects, I like to design and craft pieces for my own purposes. This includes an automated programmable camera slider, graphical design works and mechanically moving machines. Two of my biggest interests are programming and videography. I am eager to learn new skills and design methods, and this is one of the reasons why I did my minor abroad.</p>
                                </Col>
                                <Col md='auto' className='col-12'>
                                    <img className='CVImage' draggable="false" src={image}></img>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    {/* CV */}
                    <div className="CVDescription">
                        <Container className="site-width">
                            <Row><h1 className="text-center"> Curriculum vitae </h1> </Row>
                            <Row className="gx-5d">
                                <Col className="col-md-6 col-12">
                                    <h3 className="text-right CVType"> Work Experience </h3>

                                     <TimelineItem
                                        date="2022 - current"
                                        title="Art van Zuuk Design (Freelance)"
                                        work={["Making promotional videos"]}
                                        alignment="right"
                                    />
                                    <TimelineItem
                                        date="2021 - 2022"
                                        title="Design Engineer at Project MARCH"
                                        work={["Designing covers of the exoskelton", "Designing the input device"]}
                                        alignment="right"
                                    />
                                    <TimelineItem
                                        date="2017 - current"
                                        title="René van Zuuk Architects"
                                        work={["Building App for municipality of Almere", "Promotional work"]}
                                        alignment="right"
                                    />
                                    <TimelineItem
                                        date="Oct. 2017 – Oct. 2018"
                                        title="Study association ID, Video committee"
                                        work={["Introduction videos for committees", "After movies of events and festivals"]}
                                        alignment="right"
                                    />
                                    <TimelineItem
                                        date="Oct. 2018 – Oct. 2019"
                                        title="Study association ID, Public Relations committee"
                                        work={["Building websites for festival and freshmen weekend", "Giving Adobe Photoshop and Illustrator workshops"]}
                                        alignment="right"
                                    />
                                </Col>
                                <Col className="col-md-6 col-12">
                                    <h3 className="CVType"> Education</h3>

                                    <TimelineItem
                                        date="2020 - current"
                                        title="Master Integrated Product Design, TU Delft"
                                    />
                                    <TimelineItem
                                        date="2019 – 2020"
                                        title="Industrial Design, Lund University, Sweden"
                                    />
                                    <TimelineItem
                                        date="2017-2020"
                                        title="Bachelor Industrial Design Engineering, TU Delft"
                                        work={["Cum Laude"]}
                                    />
                                    <TimelineItem
                                        date="2019 – 2020"
                                        title="Helen Parkhurst Lyceum Almere"
                                        work={["Technasium"]}
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </div>
            </div>



        </div>

    );
}

export default CV;