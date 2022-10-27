import React, { useContext, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style.css'

import SiteVideoBanner from "../components/SiteVideoBanner/SiteVideoBanner";
import CV from '../components/CV/CV';
import CardCarousel from '../components/CardCarousel/CardCarousel';
import designProjectList from "../information/DesignProjects";
import graphicProjectList from "../information/GraphicProjects";
import HighlightProject from '../components/HighlightProject/HighlightProject';


const Home = () => {

  

  return (
    <>
      <SiteVideoBanner
        video="I-A6p4wQRxs"
        title="Hi Spark!"
        text="Dit is mijn portfolio voor jullie. Allereerst kun je mijn CV lezen, daarna heb ik vier projecten gehighlight die ik graag aan jullie laat zien."
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
      <CardCarousel
        projectList={graphicProjectList}
        title={"Graphic Projects"}
      />
    </>
  );
}

export default Home;