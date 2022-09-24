import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "../../components/Footer/Footer";
import ImageGallery from "../../components/ProjectComponents/ImageGallery/ImageGallery";

import { photos } from "../../components/ProjectComponents/ImageGallery/IGPosters";
import Title from "../../components/ProjectComponents/Title/Title";

import GetProjectInfo from "../../scripts/GetProjectInfo";

const Posters = () => {

  //gets information about project
  var projectInfo = GetProjectInfo("Posters");

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
      <Footer />
    </>
  );
};

export default Posters;
