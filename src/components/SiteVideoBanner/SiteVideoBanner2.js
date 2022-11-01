import React from 'react';
import {Row, Col} from "react-bootstrap";

import { batch, Fade, MoveIn, MoveOut, Animator, ScrollContainer, ScrollPage, Sticky, StickyIn, StickyOut, ZoomIn, FadeIn, FadeOut, Move, ZoomOut } from 'react-scroll-motion';

import '../../style.css'
import "./SiteVideoBanner.css";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Sticky(), MoveOut(0, -300));

///Full size video banner with animated text. Requires: company
const SiteVideoBanner = (props) => {
  return (
    <div style={{ height: "200vh", width: "100vw" }}>
      <div
        style={{
          position: "absolute",
          height: "200vh",
          width: "100vw",
          clip: "rect(0, auto, auto, 0)",
        }}
      >
        <div className="video-background">
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
        <div
          className="hier"
          style={{
            position: "absolute",
            height: "100vh",
            width: "100vw",
            backgroundColor: "white",
            opacity: "40%"
          }}
        >
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
        </div>
      </div>
    </div>
  );
};

export default SiteVideoBanner; 