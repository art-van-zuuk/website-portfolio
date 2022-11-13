import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";

///Image gallery with horizontal image rows. Requires: project and list of photos
import Gallery from "react-photo-gallery";

///Creates a grid of images in rows. Requires: list of photos with src, width & height and name of project
function ImageGallery(props) {
 
  var imageList = [];
  // /Changes the prefix of source to only enter the file name in the list
  props.photos.map((object) => (
    imageList.push(
      {
        src: "/images/Projects/" + props.project + "/ImageGallery/" + object.src,
        width: object.width,
        height: object.height
      }
    )
  ));

  return (
    <Fade>
      <Container className={"site-width " + props.padding}>
        <Row className="align-items-center justify-content-center gx-5">
          <Col className="col-12">
            <Gallery photos={imageList} key="1" />
          </Col>
        </Row>
      </Container>
    </Fade>
  );} 

  export default ImageGallery;