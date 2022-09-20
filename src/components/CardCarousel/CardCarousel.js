import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Row, Col } from 'react-bootstrap'

import CarouselCard from "../CarouselCard/CarouselCard";

import "./CardCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

///Animated carousel with cards. Requires: list of projects and title (name of image)
function CardCarousel(props) {

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  ///TODO: When resize happens, constraints still stay the same

  const stepList = [];
  const stepSize = 200;
  const stepCount = Math.ceil(width/stepSize);
  const stepTime = 4;
  const totalStepTime = stepTime*stepCount*3;

  //Left movement
  for (let i = 0; i < stepCount; i++) {
    stepList.push(stepSize*(i));
  }
  //Right movement
  for (let i = stepCount; i >= -stepCount; i--) {
    stepList.push(stepSize*(i));
  }

  return (
    <div className="App card-carousel-div" >
      {/* Title above carousel */}
      <Row className="justify-content-center">
        <img draggable="false" className="titleImage" src={"/images/website/" + props.title + ".png"}></img>
      </Row>
      {/* Carousel */}
      <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
        <motion.div
          className="testimonial-group"
          drag='x'
          dragConstraints={{ right: width, left: -width }}

          animate={{ x: [-width, width] }}
          transition={{
            duration: totalStepTime,
            repeat: Infinity,
            repeatType: 'reverse'
          }}>
          <Row className="justify-content-center">
            {props.projectList.map((project, index) => {
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



  );
}

export default CardCarousel;