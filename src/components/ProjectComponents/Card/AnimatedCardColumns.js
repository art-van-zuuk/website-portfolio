import { motion } from "framer-motion";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import "./AnimatedCardColumn.css";

///Creates a row of cards with image, title and text
function AnimatedCardColumns(props) {
  return (
    <Fade>
      <Container className={"site-width " + props.padding}>
        <Row className="align-items-center justify-content-center mt-4 gx-2">
          {props.cardInfo.map((card, index) => {
            return (
              <Col
                key={index}
                className={
                  "col-auto d-flex justify-content-center col-md-" +
                  props.cardWidth
                }
              >
                <motion.div
                  className="animatedCard"
                  whileHover={{ scale: props.scale }}
                >
                  <div className={props.shadow ? "hover-shadow" : ""}>
                    <Card className="rounded-element border-0 w-100 ">
                      <img
                        alt=""
                        className={
                          "card-img-top rounded-element p-" + props.imagePadding
                        }
                        src={"images/Projects/" + card.image}
                        style={{
                          height: props.imageHeight,
                          objectFit: card.objectFit,
                        }}
                      ></img>

                      <div className="card-body text-center">
                        <b className="text-center"> {card.title} </b>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Fade>
  );
}

export default AnimatedCardColumns;
