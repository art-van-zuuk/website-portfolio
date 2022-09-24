import React, {useContext, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style.css";

import SiteVideoBanner from "../../components/SiteVideoBanner/SiteVideoBanner";
import CV from "../../components/CV/CV";
import CardCarousel from "../../components/CardCarousel/CardCarousel";
import designProjectList from "../../information/DesignProjects";
import Footer from "../../components/Footer/Footer";
import HighlightProject from "../../components/HighlightProject/HighlightProject";
import { useLocation } from "react-router-dom";


const TestCompany = () => {

  return (
    <>
      <SiteVideoBanner />
      <CV />
      <HighlightProject project="Braun Parch" />
      <HighlightProject project="Slide to Light" />
      <HighlightProject project="Camera Slider" />
      <CardCarousel projectList={designProjectList} title={"designProjectsTitle"} />
      {/* <CardCarousel projectList={projectList}/>
        <CardCarousel projectList={projectList}/> */}
      <Footer />
    </>
  );
};

export default TestCompany;
