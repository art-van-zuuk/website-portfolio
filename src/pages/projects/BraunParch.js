import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ProjectBanner from "../../components/ProjectComponents/ProjectBanner/ProjectBanner";
import TextImageStrip from "../../components/ProjectComponents/InformationStrip/TextImageStrip";
import ImageTextStrip from "../../components/ProjectComponents/InformationStrip/ImageTextStrip";
import FullWidthImage from "../../components/ProjectComponents/InformationStrip/FullWidthImage";
import ImageGallery from "../../components/ProjectComponents/ImageGallery/ImageGallery";
import SkillImages from "../../components/ProjectComponents/SkillImages/SkillImages";

import { photos } from "../../components/ProjectComponents/ImageGallery/IGBraunParch";
import FullWidthVideo from "../../components/ProjectComponents/FullWidthVideo/FullWidthVideo";
import MediumTitle from "../../components/ProjectComponents/Titles/MediumTitle";



const BraunParch = () => { 
  return (
    <>
      <NavBar />
      <ProjectBanner project="Braun Parch" />
      <SkillImages
        skills={["photoshop", "illustrator", "solidworks", "3dprinting"]}
      />
      <TextImageStrip
        title="Food waste..."
        text="With this assignment Braun asked us to design something to lower the consumers food waste. A big portion of this waste happens during the conservation or even worse, lack of conservation of leftover food."
        image="Braun Parch/thumbnail.png"
        padding="top-bottom-padding"
      />
      <ImageTextStrip
        title="Good taste..."
        text="With this assignment Braun asked us to design something to lower the consumers food waste. A big portion of this waste happens during the conservation or even worse, lack of conservation of food."
        image="Braun Parch/thumbnail.png"
        padding="bottom-padding"
      />
      <MediumTitle title="How does it work?" alignment="center" padding="" />
      <FullWidthImage
        project="Braun Parch"
        image="step_explaination.png"
        padding="bottom-padding"
      />
      <ImageTextStrip
        title="Form follows functions"
        text="With this assigment, Braun aimed to make a change in the increasing problem of food waste. I found that a big part of this waste happens at the consumption and espesially at the conservation of food"
        image="Braun Parch/exploded_view.png"
        padding="bottom-padding"
      />
      <ImageTextStrip
        title="Old heritage, new style"
        text="With this assigment, Braun aimed to make a change in the increasing problem of food waste. I found that a big part of this waste happens at the consumption and espesially at the conservation of food"
        image="Braun Parch/thumbnail.png"
        padding="bottom-padding"
      />
      <ImageGallery
        project="Braun Parch"
        photos={photos}
        padding="top-padding"
      />
      <FullWidthVideo
        video="https://www.youtube.com/embed/cGzrci__Vho"
        padding="bottom-padding"
      />
      <Footer />
    </>
  );
};

export default BraunParch;
