import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import { batch, Fade, MoveIn, MoveOut, Animator, ScrollContainer, ScrollPage, Sticky, StickyIn, StickyOut, ZoomIn, FadeIn, FadeOut, Move, ZoomOut } from 'react-scroll-motion';

import video from './C0007.MP4'

import '../../style.css'
import "./SiteVideoBanner.css";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Sticky(), MoveOut(0, -300));

///Full size video banner with animated text. Requires: company
const SiteVideoBanner = (props) => {
  return (
    <ScrollContainer>
      <div className="videoContainer">
        <video src={video} autoPlay loop muted />
      </div>
      <ScrollPage
        page={0}
        className="align-items-center justify-content-center"
      >
        <Animator animation={batch(Sticky(), Fade(), Move())}>
          <h2 className="white-text">A portfolio</h2>
          <h4 className="white-text handwritten">By Art van Zuuk</h4>
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}></ScrollPage>

      <ScrollPage page={2}>
        <Animator animation={batch(StickyIn(), FadeIn())}>
          <div className="white-bg"></div>
        </Animator>
        <Animator animation={batch(StickyIn(), FadeIn(), MoveIn())}>
            <Row className="align-items-center justify-content-center">
              <Col className="col-12 col-md-6">
                <h3 className="text-center">Hello, {props.company}!</h3>
                <h4 className="text-center">
                  This is my portfolio website. Here I showcase all of the
                  project that I am proud of. A few projects are highlighted and
                  I would love you to see them. But if you are interested to see
                  more, feel free to look around.
                </h4>
              </Col>
            </Row>
        </Animator>
      </ScrollPage>

      {/* <ScrollPage page={3}>
        <Animator animation={batch(StickyOut(), )}>
          <div className="white-bg"></div>
        </Animator>
        <Animator animation={batch(StickyIn(), )}>
          <div className="child ">
            <Row className="align-items-center justify-content-center">
              <Col className="col-12 col-md-6">
                <h3 className="text-center">Hello, {props.company}!</h3>
                <h4 className="text-center">
                  This is my portfolio website. Here I showcase all of the
                  project that I am proud of. A few projects are highlighted and
                  I would love you to see them. But if you are interested to see
                  more, feel free to look around.
                </h4>
              </Col>
            </Row>
          </div>
        </Animator>
      </ScrollPage> */}
    </ScrollContainer>
  );
};

export default SiteVideoBanner; 