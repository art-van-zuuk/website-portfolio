import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "../../style.css";

import CardCarousel from "../../components/CardCarousel/CardCarousel";
import CV from "../../components/CV/CV";
import HighlightProject from "../../components/HighlightProject/HighlightProject";
import SiteVideoBanner from "../../components/SiteVideoBanner/SiteVideoBanner";
import videoProjectList from "../../information/VideoProjects";
import designProjectList from "../../information/DesignProjects";


const MMID = () => {

  return (
    <>
      <SiteVideoBanner
        video="Z3PsFc2NEXI"
        title="Hi MMID!"
        text="This is my portfolio website for you. I selected four projects that I would love for you to see. These are more of the mechanical and technological projects I did. With this, I hope to show the skills required to work at MMID. If you are interested in more, you can have a look at the bottom of this page. Enjoy reading!"
      />
      <CV />
      <HighlightProject projectList={designProjectList} project="MARCH VII" />
      <HighlightProject
        projectList={designProjectList}
        project="Input Device"
      />
      <HighlightProject projectList={designProjectList} project="La Selce" />
      <HighlightProject projectList={designProjectList} project="HANA" />

      <CardCarousel projectList={designProjectList} title={"Design Projects"} />
      <CardCarousel projectList={videoProjectList} title={"Videography"} />
    </>
  );
};

export default MMID;
