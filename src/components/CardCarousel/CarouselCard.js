import { motion } from "framer-motion";
import React from "react";
import HandleURL from "../../scripts/HandleURL";
import "../../style.css";
import "./CarouselCard.css";

///Card inside the carousel. Requires: name of project
function CarouselCard(props) {

  //changes name of project to URL format
  var URLLink = props.project.name.replace(/\s/g, "-");
  URLLink = URLLink.toLowerCase();

  //Checks if carousel is dragged or card is pressed
  const mouseDownCoords = (e) => {
    window.checkForDrag = e.clientX;
  };
  const clickOrDrag = (e) => {
    const mouseUp = e.clientX;
    if (
      mouseUp < window.checkForDrag + 5 &&
      mouseUp > window.checkForDrag - 5
    ) {
      HandleURL(props.project.url != null? props.project.url: URLLink, props.project.url != null? '_blank' : '_self');
      // setShowVideo(true);
    }
  };

  var backgroundColor2 = props.project.backgroundColor;
  if (props.project.backgroundColor2 != null) {
    backgroundColor2 = props.project.backgroundColor2;
  }

  return (
    <>
      <div className="App">
        {/* Animates while hover */}
        <motion.div
          className="text-start smallCard"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onMouseDown={(e) => mouseDownCoords(e)}
          onMouseUp={(e) => clickOrDrag(e)}
        >
          <div
            className="imgDiv"
            style={{
              background:
                "linear-gradient(" +
                props.project.backgroundColor +
                ", " +
                backgroundColor2 +
                ")",
            }}
          >
            <img
              alt=""
              draggable="false"
              className="image"
              src={"/images/Projects/" + props.project.name + "/thumbnail.png"}
            ></img>
          </div>

          <div className="text">
            <h5 className="text-center"> {props.project.name} </h5>
            <p className="text-center">
              {" "}
              {props.project.type} in {props.project.year}{" "}
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default CarouselCard;
