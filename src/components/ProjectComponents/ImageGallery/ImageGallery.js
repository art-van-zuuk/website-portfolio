import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Gallery from "react-photo-gallery";


///Creates a grid of images in rows. Requires: list of photos with src, width & height and name of project
function ImageGallery(props) {

  ///Changes the prefix of source to only enter the file name in the list
  props.photos.map((object, index) => {
    object.src = "/images/Projects/" + props.project + "/ImageGallery/" + object.src;
  });

  return (
    <Container className="site-width block-padding">
      <Row className="align-items-center justify-content-center gx-5">
        <Col className="col-12">
          <Gallery photos={props.photos} key="1" />
        </Col>
      </Row>
    </Container>

  );}

  export default ImageGallery;