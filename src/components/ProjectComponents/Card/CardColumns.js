import React, {Image} from "react";
import { Container, Row, Col, Card, CardColumn } from "react-bootstrap";

///Creates a row of cards with image, title and text
function CardColumns(props) {
  return (
    <Container className={"site-width " + props.padding}>
      <Row className="justify-content-center mt-4 gx-4">
        {props.cardInfo.map((card, index) => {
          return (
            <Col
              key={index}
              className={"col-12 d-flex col-md-" + props.cardWidth}
            >
              <Card className="rounded-element border-0 w-100 ">
                <img
                  className={"card-img-top rounded-element p-" + props.imagePadding}
                  src={"images/Projects/" + card.image}
                  style={{
                    height: props.imageHeight,
                    objectFit: card.objectFit,
                  }}
                ></img>

                <div className="card-body">
                  <h5 className="text-center card-title"> {card.title} </h5>
                  <p className="text-center card-text">{card.text}</p>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default CardColumns;
