import React, { useContext, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style.css'

import SiteVideoBanner from "../components/SiteVideoBanner/SiteVideoBanner";
import CV from '../components/CV/CV';
import CardCarousel from '../components/CardCarousel/CardCarousel';
import designProjectList from "../information/DesignProjects";
import graphicProjectList from "../information/GraphicProjects";
import Footer from '../components/Footer/Footer';
import HighlightProject from '../components/HighlightProject/HighlightProject';


const Home = () => {

  

  return (
    <>
      <SiteVideoBanner company="reader" />
      <CV />
      <HighlightProject projectList={designProjectList} project="MARCH VII" />
      <HighlightProject
        projectList={designProjectList}
        project="Input Device"
      />
      <HighlightProject
        projectList={designProjectList}
        project="La Selce"
      />
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