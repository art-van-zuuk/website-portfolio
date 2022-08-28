import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Row, Col } from 'react-bootstrap'

import "./CardCarousel.css";
import ExpendableCard from '../ExpendableCard/ExpendableCard';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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

    console.log(props.title);


  return (
    <div className="App card-carousel-div" >
      <Row className="justify-content-center">
        <img draggable="false" className="titleImage" src={"/images/website/" + props.title + ".png"}></img>
      </Row>
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
          }}

        >
          <Row className="justify-content-center">
            {props.projectList.map((project, index) => {
              return (
                <Col key={index} className="col-auto">

                  <ExpendableCard
                    project={project}
                  />
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