import React, { Image } from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Card, CardColumn } from "react-bootstrap";
import "./AnimatedCardColumn.css";

///Creates a row of cards with image, title and text
function AnimatedCardColumns(props) {
  return (
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
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
              >
                <Card className=" rounded-element border-0 w-100 ">
                  <img
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
              </motion.div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default AnimatedCardColumns;
