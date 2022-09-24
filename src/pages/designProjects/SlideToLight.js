import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "../../components/Footer/Footer";
import ProjectBanner from "../../components/ProjectComponents/ProjectBanner/ProjectBanner";
import designProjectList from "../../information/DesignProjects";

const SlideToLight = () => {
  return (
    <>
      <ProjectBanner projectList={designProjectList} project="Slide to Light" />
      <Footer />
    </>
  );
};

export default SlideToLight;
