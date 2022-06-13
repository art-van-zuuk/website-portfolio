import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from 'react-bootstrap'

import "./CardCarousel.css";
import ExpendableCard from '../ExpendableCard/ExpendableCard';


function CardCarousel(props) {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return (
        <div className="App">
            <Container>
                <Row><h3 className="text-center"> Design Projects </h3></Row>
                <Row className="align-items-center justify-content-center">
                    <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
                        <motion.div
                            drag='x'
                            dragConstraints={{ right: 0, left: -width }}
                            className="inner-carousel">
                            {props.projectList.map(project => {
                                return (
                                    <motion.div >
                                        <ExpendableCard
                                            name={project.name}
                                            type={project.type}
                                            year={project.year}
                                            image={project.image}
                                            backgroundColor={project.backgroundColor}
                                        />
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                </Row>
            </Container>

        </div>
    );
}

export default CardCarousel;