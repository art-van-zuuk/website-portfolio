import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "../../components/Footer/Footer";
import ImageGallery from "../../components/ProjectComponents/ImageGallery/ImageGallery";

import { photos } from "../../components/ProjectComponents/ImageGallery/IGPosters";
import Title from "../../components/ProjectComponents/Title/Title";

import GetProjectInfo from "../../scripts/GetProjectInfo";
import graphicProjectList from "../../information/GraphicProjects";

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
        title={projectInfo.explanation}
        size="p"
        alignment="start"
        padding=""
      />
    </>
  );
};

export default WebsiteIOFestival;
