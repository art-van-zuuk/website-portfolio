import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "../../components/Footer/Footer";
import ImageGallery from "../../components/ProjectComponents/ImageGallery/ImageGallery";

import { photos } from "../../components/ProjectComponents/ImageGallery/IGPosters";
import Title from "../../components/ProjectComponents/Title/Title";

import projectList from "../../components/Projects.js";

const Chessboard = () => {
  ///TODO: Make function of this. ALSO IN HIGHLIGHTPROJECT, BANNER and more
  //checks projects and chooses right one
  var chosenProject = "Posters";
  var selectedProject = {};

  projectList.map((project, index) => {
    if (Object.values(project)[0] == chosenProject) {
      selectedProject = projectList[index];
    }
  });

  return (
    <>
      <Title
        title="Posters"
        size="h1"
        alignment="start"
        padding="top-padding"
      />
      <Title
        title={selectedProject.description}
        size="p"
        alignment="start"
        padding=""
      />
      <ImageGallery
        project="Posters"
        photos={photos}
        padding="bottom-padding"
      />
      <Footer />
    </>
  );
};

export default Chessboard;
