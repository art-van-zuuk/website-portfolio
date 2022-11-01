import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import ImageGallery from "../../components/ProjectComponents/ImageGallery/ImageGallery";

import { photos } from "../../components/ProjectComponents/ImageGallery/IGChessboard";
import Title from "../../components/ProjectComponents/Title/Title";
import designProjectList from "../../information/DesignProjects";
import GetProjectInfo from "../../scripts/GetProjectInfo";


const Chessboard = () => {

  //gets information about project
  var projectInfo = GetProjectInfo(designProjectList,"Chessboard");

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
      <ImageGallery
        project={projectInfo.name}
        photos={photos}
        padding="bottom-padding"
      />
    </>
  );
};

export default Chessboard;
