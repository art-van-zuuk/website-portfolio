import React, {Image} from "react";
import { Container, Row, Col, Card, CardColumn } from "react-bootstrap";
import Fade from "react-reveal/Fade";

///Creates a row of cards with image, title and text
function CardColumns(props) {
  return (
    <Container className={"site-width " + props.padding}>
      <Fade>
        <Row className="justify-content-center mt-4 gx-3">
          {props.cardInfo.map((card, index) => {
            return (
              <Col
                key={index}
                className={"col-12 d-flex col-md-" + props.cardWidth}
              >
                <Card className="rounded-element border-0 w-100 ">
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

                  <div className="p-2 pt-3">
                    <h5 className="text-center card-title"> {card.title} </h5>
                    <p className="text-center card-text">{card.text}</p>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Fade>
    </Container>
  );
}

export default CardColumns;
