import React, { useContext, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style.css'

import SiteVideoBanner from "../components/SiteVideoBanner/SiteVideoBanner";
import CV from '../components/CV/CV';
import CardCarousel from '../components/CardCarousel/CardCarousel';
import projectList from "../components/Projects";
import Footer from '../components/Footer/Footer';
import HighlightProject from '../components/HighlightProject/HighlightProject';


const Home = () => {

  

  return (
    <>
      <SiteVideoBanner company="VanMoof" />
      <CV />
      <HighlightProject projectList={projectList} project="Braun Parch" />
      <HighlightProject projectList={projectList} project="Slide to Light" />
      <HighlightProject projectList={projectList} project="Camera Slider" />
      <CardCarousel projectList={projectList} title={"designProjectsTitle"} />
      {/* <CardCarousel projectList={projectList}/>
        <CardCarousel projectList={projectList}/> */}
      <Footer />
    </>
  );
}

export default Home;