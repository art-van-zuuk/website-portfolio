import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  Animator, batch,
  Fade, FadeIn, MoveIn,
  MoveOut, ScrollContainer,
  ScrollPage,
  Sticky,
  StickyIn, ZoomIn
} from "react-scroll-motion";

import "../../style.css";
import "./SiteVideoBanner.css";

///Full size video banner with animated text. Requires: company
const SiteVideoBanner = (props) => {
  return (
    <ScrollContainer>
      <div class="video-background">
        <iframe
          src={
            "https://www.youtube.com/embed/" +
            props.video +
            "?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=" +
            props.video
          }
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <ScrollPage page={0}>
        <Animator animation={batch(Sticky(),)}>
          <div style={{height: "100vh"}}>
            <img
              style={{ postion: "absolute", marginTop: "calc(100vh - 45px)", opacity: "0.8"}}
              draggable="false"
              src={"/images/website/ScrollDown.png"}
              height="35px"
            ></img>
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={batch(StickyIn(), FadeIn())}>
          <div className="white-bg"></div>
        </Animator>
        <Animator animation={batch(StickyIn(), FadeIn(), MoveIn())}>
          <Row className="align-items-center justify-content-center">
            <Col className="col-12 col-md-8">
              <h2 className="text-center">
                {props.title == "" || props.title == null
                  ? "A portfolio by Art"
                  : props.title}
              </h2>
              <p className="text-dark text-center">
                {props.text == "" || props.text == null
                  ? "This is my portfolio website. Here I showcase all of the project that I am proud of. A few projects are highlighted and I would love you to see them. But if you are interested to see more, feel free to look around."
                  : props.text}
              </p>
            </Col>
          </Row>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default SiteVideoBanner;
