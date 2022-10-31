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
      <SiteVideoBanner
        video="Z3PsFc2NEXI"
        title="Hi Lars!"
        text="Dit is mijn portfolio voor jou. Vier van de projecten waar ik het meest trots op ben en waarvan ik graag aan jullie wil laten zien, zijn hieronder gehighlight. Maar als je..."
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
