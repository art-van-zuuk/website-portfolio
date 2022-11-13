import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import {
  Animator, batch, FadeIn, ScrollContainer,
  ScrollPage,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

import PlayVideo from "../../scripts/PlayVideo";
import "../../style.css";
import "./SiteVideoBanner.css";

// Handles background transparancy on scroll
function ScrollDownTransparency(){
  
  const [transparancy, setTransparency] = useState(1);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  var minTransparency = 0.2; //Transparancy drops to this value

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
    if (window.scrollY < windowSize.innerHeight) {
      setTransparency(
        1 - (window.scrollY / windowSize.innerHeight) * (1 - minTransparency)
      );
    }
  };

  // Fire when scolling
  window.addEventListener("scroll", changeTransparency);

  return(transparancy);
}

// Scroll page down on pressing page
function PageScroll(){
    if (window.scrollY < window.innerHeight) {
      window.scrollTo(0, window.innerHeight);
    } else if (
      window.scrollY >= window.innerHeight &&
      window.scrollY <= window.innerHeight * 2
    ) {
      window.scrollTo(0, window.innerHeight * 2);
    }

}

//Full size video banner with animated text. Requires: company
function SiteVideoBanner(props) {

  var transparancy = ScrollDownTransparency();
  
  return (
    <div style={{ backgroundColor: "#080c2e" }} onClick={PageScroll}>
      <ScrollContainer>
        {/* Video background */}
        <div
          className="video-background"
          key={0}
          style={{ opacity: transparancy }}
        >
          <PlayVideo video={props.video} controls={false} />
          {/* Scroll down image */}
          <img
            alt=""
            style={{
              top: "0",
              marginTop: "calc(100vh - 45px)",
              marginLeft: "calc(50vw - 50px)",
              opacity: "0.8",
              position: "absolute",
              display: "flex",
              zIndex: "100",
              width: "100px",
              draggable: "false",
            }}
            src={"/images/website/ScrollDown.png"}
          />
        </div>
        <ScrollPage key={0}>
          {/* Div to stop triggering pause/play on video */}
          <Animator animation={batch(StickyIn())}>
            <div style={{ height: "100vh", width: "100vw" }}></div>
          </Animator>

          {/* Animated text */}
          <Animator animation={batch(StickyIn(), FadeIn(), ZoomIn(1.3, 1))}>
            <Row className="align-items-center justify-content-center">
              <Col
                className="col-12 col-md-8"
                style={{ width: "500px", maxWidth: "90vw" }}
              >
                <h2 className="text-white text-center">
                  {props.title === "" || props.title === undefined
                    ? "A portfolio by Art"
                    : props.title}
                </h2>
                <p className="text-white text-center">
                  {props.text === "" || props.text === undefined
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
