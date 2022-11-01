import React, {useContext, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style.css";

import SiteVideoBanner from "../../components/SiteVideoBanner/SiteVideoBanner";
import CV from "../../components/CV/CV";
import CardCarousel from "../../components/CardCarousel/CardCarousel";
import designProjectList from "../../information/DesignProjects";
import HighlightProject from "../../components/HighlightProject/HighlightProject";


const TestCompany = () => {

  return (
    <>
      <SiteVideoBanner
        video="Z3PsFc2NEXI"
        title="Hi Lars!"
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
    </>
  );
};

export default TestCompany;
