import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../style.css";
import "./CarouselCard.css";

///Card inside the carousel. Requires: name of project
function CarouselCard(props) {
  //opens link
  const open = (url) => {
    window.open(url, "_self", "noopener,noreferrer");
  };

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
      open(URLLink);
    }
  };

  return (
    <div className="App">
      {/* Animates while hover */}
      <motion.div
        className="text-start card"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onMouseDown={(e) => mouseDownCoords(e)}
        onMouseUp={(e) => clickOrDrag(e)}
      >
        <div
          className="imgDiv"
          style={{ backgroundColor: props.project.backgroundColor }}
        >
          <img
            draggable="false"
            className="image"
            src={"/images/Projects/" + props.project.name + "/thumbnail.png"}
          ></img>
        </div>

        <div className="text">
          <h4 className="bold-text"> {props.project.name} </h4>
          <p> {props.project.explanation} </p>
          <b>
            {" "}
            {props.project.type} in {props.project.year}{" "}
          </b>
        </div>
      </motion.div>
    </div>
  );
};

export default CarouselCard;
