import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import Title from "../../components/ProjectComponents/Title/Title";

import AnimatedCardColumns from "../../components/ProjectComponents/Card/AnimatedCardColumns";
import graphicProjectList from "../../information/GraphicProjects";
import GetProjectInfo from "../../scripts/GetProjectInfo";

const OnLocked = () => {
  //gets information about project
  var projectInfo = GetProjectInfo(graphicProjectList, "OnLocked");

  return (
    <>
      <Title
        title={projectInfo.name}
        size="h1"
        alignment="start"
        padding="top-padding"
      />
      <Title
        title={projectInfo.explanation}
        size="p"
        alignment="start"
        padding=""
      />

      <AnimatedCardColumns
        cardInfo={[
          {
            title: "Stopwatch",
            image: "OnLocked/Onlocked Clock.png",
            objectFit: "contain",
          },
          {
            title: "Playful",
            image: "OnLocked/Onlocked Goofy.png",
            objectFit: "cover",
          },
          {
            title: "Laptop",
            image: "OnLocked/Onlocked Laptop.png",
            objectFit: "cover",
          },
          {
            title: "Square",
            image: "OnLocked/Onlocked Modern square.png",
            objectFit: "contain",
          },
          {
            title: "Space",
            image: "OnLocked/Onlocked space.png",
            objectFit: "cover",
          },
          {
            title: "Spooky",
            image: "OnLocked/Onlocked Spooky World Lock.png",
            objectFit: "cover",
            shadow: "true",
          },
        ]}
        imageHeight="150px"
        cardWidth="2"
        scale={1.5}
        shadow={true}
        padding="bottom-padding"
      />
    </>
  );
};

export default OnLocked;
