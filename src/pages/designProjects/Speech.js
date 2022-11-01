import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import AnimatedCardColumns from "../../components/ProjectComponents/Card/AnimatedCardColumns";
import { photos } from "../../components/ProjectComponents/ImageGallery/IGGoogleSpeech";
import ImageGallery from "../../components/ProjectComponents/ImageGallery/ImageGallery";
import FullWidthImage from "../../components/ProjectComponents/InformationStrip/FullWidthImage";
import TextImageStrip from "../../components/ProjectComponents/InformationStrip/TextImageStrip";
import ProjectBanner from "../../components/ProjectComponents/ProjectBanner/ProjectBanner";
import SkillImages from "../../components/ProjectComponents/SkillImages/SkillImages";
import Title from "../../components/ProjectComponents/Title/Title";
import designProjectList from "../../information/DesignProjects";
import GetProjectInfo from "../../scripts/GetProjectInfo";

const Speech = () => {
  //gets information about project
  var projectInfo = GetProjectInfo(designProjectList, "Speech");
  return (
    <>
      <ProjectBanner
        projectList={designProjectList}
        project={projectInfo.name}
      />
      <SkillImages skills={["photoshop", "illustrator", "3dprinting"]} />
      <TextImageStrip
        title="Integrating refugees using speech"
        text="The big gap in culture and language most refugees experience holds back their integration and can be perceived as unpolite. Speech as a part of their integration course helps refugees overcome this gap in a quick and enjoyable way."
        image="Speech/Scenario.jpg"
        padding="top-bottom-padding"
        maxHeight="600px"
        maxWidth="100%"
      />
      <TextImageStrip
        title="Finding the optimal shape"
        text="With inspiration from similar products, user research on body placement and comfort, and modelling in clay and 3D prints we found the optimal shape for the product."
        image="Speech/Drawings.jpg"
        padding="top-bottom-padding"
        maxHeight="600px"
        maxWidth="350px"
        reverse={true}
      />
      <Title
        title="How it's made"
        size="h2"
        alignment="center"
        padding="top-padding"
      />
      <Title
        title="Speech has a display that is hidden behind an ultrathin layer of plastic foil. By using two-component injection moulding the foil and the housing melt together. The housing holds all the components and is joined together by snap fits."
        size="p"
        alignment="center"
        padding=""
      />
      <FullWidthImage
        project={projectInfo.name}
        image="Exploded view.jpg"
        padding="bottom-padding"
      />

      <AnimatedCardColumns
        cardInfo={[
          {
            title: "Cross section of injection mould",
            image: "Speech/Spuitgieten.jpg",
            objectFit: "contain",
          },
          {
            title: "Cross section of product",
            image: "Speech/Section Speech.jpg",
            objectFit: "contain",
          },
        ]}
        imageHeight="150px"
        cardWidth="6"
        padding="bottom-padding"
      />
      <ImageGallery
        project={projectInfo.name}
        photos={photos}
        padding="top-padding"
      />
      <FullWidthImage
        project={projectInfo.name}
        image="ImageGallery/Render 2.jpg"
        padding="bottom-padding"
      />
    </>
  );
};

export default Speech;
