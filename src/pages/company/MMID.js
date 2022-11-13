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
        text="Dit is mijn portfolio website voor jou. Hieronder heb ik vier projecten gehighlight die ik graag aan jou wil laten zien. En dan nog een kort stukie text voor het bedrijf"
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
