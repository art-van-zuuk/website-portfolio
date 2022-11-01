import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";


import Title from "../../components/ProjectComponents/Title/Title";

import LaptopMockup from "../../components/ProjectComponents/Mockup/LaptopMockup";
import graphicProjectList from "../../information/GraphicProjects";
import GetProjectInfo from "../../scripts/GetProjectInfo";

const WebsiteIOFestival = () => {
  //gets information about project
  var projectInfo = GetProjectInfo(graphicProjectList, "Website IOFestival");

  return (
    <>
      <Title
        title={projectInfo.name}
        size="h1"
        alignment="start"
        padding="top-padding"
      />
      <Title
        title={projectInfo.description}
        size="h4"
        alignment="start"
        padding=""
      />
      <Title
        title={projectInfo.explanation}
        size="p"
        alignment="start"
        padding=""
      />
      <LaptopMockup project={projectInfo.name} image="test.jpeg" />
    </>
  );
};

export default WebsiteIOFestival;
