import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import ImageGallery from "../../components/ProjectComponents/ImageGallery/ImageGallery";

import { photos } from "../../components/ProjectComponents/ImageGallery/IGPosters";
import Title from "../../components/ProjectComponents/Title/Title";

import graphicProjectList from "../../information/GraphicProjects";
import GetProjectInfo from "../../scripts/GetProjectInfo";

const Posters = () => {

  //gets information about project
  var projectInfo = GetProjectInfo(graphicProjectList, "Posters");

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
      <ImageGallery
        project={projectInfo.name}
        photos={photos}
        padding="bottom-padding"
      />
    </>
  );
};

export default Posters;
