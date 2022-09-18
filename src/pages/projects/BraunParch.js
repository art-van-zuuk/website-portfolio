import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ProjectBanner from "../../components/ProjectComponents/ProjectBanner/ProjectBanner";
import TextImageStrip from "../../components/ProjectComponents/InformationStrip/TextImageStrip";
import ImageTextStrip from "../../components/ProjectComponents/InformationStrip/ImageTextStrip";
import FullWidthImage from "../../components/ProjectComponents/InformationStrip/FullWidthImage";



const BraunParch = () => {
  return (
    <>
      <NavBar />
      <ProjectBanner project="Braun Parch" /> 
      <TextImageStrip
        title="Test Test"
        text="With this assigment, Braun aimed to make a change in the increasing problem of food waste. I found that a big part of this waste happens at the consumption and espesially at the conservation of food"
        image="Braun Parch/thumbnail.png"
      />
      <ImageTextStrip
        title="Test Test"
        text="With this assigment, Braun aimed to make a change in the increasing problem of food waste. I found that a big part of this waste happens at the consumption and espesially at the conservation of food"
        image="Braun Parch/exploded_view.png"
      />
      <FullWidthImage image="Braun Parch/step_explaination.png" />
      <Footer />
    </>
  );
};

export default BraunParch;
