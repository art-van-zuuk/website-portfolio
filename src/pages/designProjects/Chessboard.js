import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "../../components/Footer/Footer";
import ImageGallery from "../../components/ProjectComponents/ImageGallery/ImageGallery";

import { photos } from "../../components/ProjectComponents/ImageGallery/IGChessboard";
import Title from "../../components/ProjectComponents/Title/Title";
import GetProjectInfo from "../../scripts/GetProjectInfo";
import designProjectList from "../../information/DesignProjects";


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
