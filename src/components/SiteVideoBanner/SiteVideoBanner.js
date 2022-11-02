import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";

import {
  Animator, batch, FadeIn, ScrollContainer,
  ScrollPage,
  Sticky,
  StickyIn,
  ZoomIn,
  MoveIn,
  Fade, FadeOut, MoveOut
} from "react-scroll-motion";

import "../../style.css";
import "./SiteVideoBanner.css";

///Full size video banner with animated text. Requires: company
const SiteVideoBanner = (props) => {

  // Change video transparency when scrolling
  const [transparancy, setTransparency] = useState(1);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  var minTransparency = 0.2;

  // Change windowSize var on window resizing
  useEffect(() => {
     function handleWindowResize() {
       setWindowSize(getWindowSize());
     }

     window.addEventListener("resize", handleWindowResize);

     return () => {
       window.removeEventListener("resize", handleWindowResize);
     };
   }, []);

   // Get window size
   function getWindowSize() {
     const { innerWidth, innerHeight } = window;
     return { innerWidth, innerHeight };
   }

  // Change window size based on scroll
  const changeTransparency = () => {
    if(window.scrollY < windowSize.innerHeight){
      setTransparency(
        1 - (window.scrollY / windowSize.innerHeight) * (1 - minTransparency)
      );
    }
    
  };

  // Fire when scolling
  window.addEventListener("scroll", changeTransparency);

  return (
    <div style={{ backgroundColor: "#080c2e" }}>
      <ScrollContainer>
        {/* Video background */}
        <div className="video-background" key={0} style={{ opacity: transparancy }}>
          <iframe
            title="SiteVideoBanner"
            src={
              "https://www.youtube.com/embed/" +
              props.video +
              "?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=" +
              props.video
            }
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <ScrollPage page={0}>
          <Animator animation={batch(Sticky(), FadeOut())}>
            <div style={{ height: "100vh" }}>
              <img
                alt=""
                style={{
                  postion: "absolute",
                  marginTop: "calc(100vh - 45px)",
                  opacity: "0.8",
                }}
                draggable="false"
                src={"/images/website/ScrollDown.png"}
                height="35px"
              ></img>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage key={2}>
          <Animator animation={batch(StickyIn(), FadeIn(), MoveIn())}>
            <Row className="align-items-center justify-content-center">
              <Col className="col-12 col-md-8">
                <h2 className="text-white text-center">
                  {props.title === "" || props.title === null
                    ? "A portfolio by Art"
                    : props.title}
                </h2>
                <p className="text-white text-center">
                  {props.text === "" || props.text === null
                    ? "This is my portfolio website. Here I showcase all of the project that I am proud of. A few projects are highlighted and I would love you to see them. But if you are interested to see more, feel free to look around."
                    : props.text}
                </p>
              </Col>
            </Row>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
};

export default SiteVideoBanner;
