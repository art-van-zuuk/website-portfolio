import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ProjectBanner from "../../components/ProjectComponents/ProjectBanner/ProjectBanner";

const SlideToLight = () => {
  return (
    <>
      <NavBar />
      <ProjectBanner project="Slide to Light" />
      <Footer />
    </>
  );
};

export default SlideToLight;
