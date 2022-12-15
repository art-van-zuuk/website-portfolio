import CarouselCard from "./CarouselCard";
import "./CardCarousel.css";

import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Converts title into image path format
function TitleToImage(title){
  
  var image = title;
  image = image.replace(/\s+/g, "");
  image = "/images/website/" + image + "Title.jpg";
  return image;
}

// Automatically animate card carousel
function AnimateCarousel() {
  const [width, setWidth] = useState(0);

  const carousel = useRef();

  useEffect(() => {

    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  ///TODO: When resize happens, constraints still stay the same

  const stepList = [];
  const stepSize = 200;
  const stepCount = Math.ceil(width / stepSize);
  const stepTime = 4;
  const totalStepTime = stepTime * stepCount * 3;

  //Left movement
  for (let i = 0; i < stepCount; i++) {
    stepList.push(stepSize * i);
  }
  //Right movement
  for (let i = stepCount; i >= -stepCount; i--) {
    stepList.push(stepSize * i);
  }

  return { carousel, width, totalStepTime };
}

///Animated carousel with cards. Requires: list of projects and title (name of image)
function CardCarousel({title, projectList}) {
  // Hide image of drag explaination on hover
  const [indicatorIsShown, setIndicatorIsShown] = useState(true);

  // Get animation variables for animating the carousel
  let {carousel, width, totalStepTime} = AnimateCarousel();

  // Gets path of image for title
  var image = TitleToImage(title);

  return (
    <div className="App card-carousel-div">
      {/* Title above carousel */}
      <Row className="justify-content-center">
        <img alt="" draggable="false" className="titleImage" src={image}></img>
      </Row>
      {/* Carousel */}
      <div
        style={{ width: "100%" }}
        onMouseEnter={() => setIndicatorIsShown(false)}
        onMouseLeave={() => setIndicatorIsShown(true)}
      >
        <div
          style={{
            position: "absolute",
            opacity: indicatorIsShown ? "0.85" : "0",
            zIndex: indicatorIsShown ? "10" : "0",
            width: "100px",
            marginLeft: "calc(50% - 50px)",
            transition: "all 0.5s ease",
            pointerEvents: "none",
          }}
        >
          <Row className="justify-content-center align-items-center">
            <img
              alt=""
              draggable="false"
              style={{ marginTop: "70px", width: "100%", objectFit: "contain" }}
              src="images/website/grab-carousel.png"
            ></img>
          </Row>
        </div>
        <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="testimonial-group"
            drag="x"
            dragConstraints={{ right: width, left: -width }}
            animate={{ x: [-width, width] }}
            transition={{
              duration: totalStepTime,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Row className="justify-content-center">
              {projectList.map((project, index) => {
                return (
                  <Col key={index} className="col-auto">
                    <CarouselCard project={project} />
                  </Col>
                );
              })}
            </Row>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

// Decribe variable type and required
CardCarousel.propTypes = {
  title: PropTypes.string.isRequired,
  projectList: PropTypes.array.isRequired,
}

export default CardCarousel;
