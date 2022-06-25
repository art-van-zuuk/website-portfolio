import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Row, Col } from 'react-bootstrap'

import "./CardCarousel.css";
import ExpendableCard from '../ExpendableCard/ExpendableCard';
import img from "./designProjectsTitle.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function CardCarousel(props) {


  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []); 
  ///TODO: When resize happens, constraints still stay the same


  return (
    <div className="App card-carousel-div">
      <Row>
        <img draggable="false" className="titleImage" src={img}></img>
      </Row>
      <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>

        <motion.div
          className="testimonial-group"
          // className="inner-carousel"
          drag='x'
          dragConstraints={{ right: width, left: -width }}>

          <Row className="justify-content-center">
            {props.projectList.map(project => {
              return (
                <Col className="col-auto">

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

function SliderDrag() {
  const slider = document.querySelector('.outer-carousel');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
  });
}

export default CardCarousel;