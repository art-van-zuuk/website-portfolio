import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import ProjectBanner from "../../components/ProjectComponents/ProjectBanner/ProjectBanner";
import TextImageStrip from "../../components/ProjectComponents/InformationStrip/TextImageStrip";
import ImageTextStrip from "../../components/ProjectComponents/InformationStrip/ImageTextStrip";
import FullWidthImage from "../../components/ProjectComponents/InformationStrip/FullWidthImage";
import ImageGallery from "../../components/ProjectComponents/ImageGallery/ImageGallery";
import SkillImages from "../../components/ProjectComponents/SkillImages/SkillImages";

import { photos } from "../../components/ProjectComponents/ImageGallery/IGBraunParch";
import FullWidthVideo from "../../components/ProjectComponents/FullWidthVideo/FullWidthVideo";
import Title from "../../components/ProjectComponents/Title/Title";
import GetProjectInfo from "../../scripts/GetProjectInfo";
import designProjectList from "../../information/DesignProjects";
import CardColumns from "../../components/ProjectComponents/Card/CardColumns";

const CameraSlider = () => {
  // console.log("list: " + designProjectList);

  //gets information about project
  var projectInfo = GetProjectInfo(designProjectList, "Camera Slider");

  return (
    <>
      <ProjectBanner
        projectList={designProjectList}
        project={projectInfo.name}
      />
      <SkillImages skills={["solidworks", "arduino", "lasercutting"]} />
      <Title
        title="When you can not afford it... make it"
        size="h2"
        alignment="center"
        padding="top-padding"
      />
      <Title
        title="A better design in many ways"
        size="p"
        alignment="center"
        padding="bottom-padding"
      />
      <FullWidthImage
        project={projectInfo.name}
        image="TopView.jpg"
        padding="bottom-padding"
      />
      <FullWidthImage
        project={projectInfo.name}
        image="CloseUp.jpg"
        padding="bottom-padding"
      />
      <FullWidthImage
        project={projectInfo.name}
        image="3Positions.jpg"
        padding="bottom-padding"
      />

      <ImageTextStrip
        title="The electic circuit"
        text="With this assigment, Braun aimed to make a change in the increasing problem of food waste. I found that a big part of this waste happens at the consumption and espesially at the conservation of food"
        image="Camera Slider/CircuitDiagram.jpg"
        padding="top-bottom-padding"
      />
    </>
  );
};

export default CameraSlider;
