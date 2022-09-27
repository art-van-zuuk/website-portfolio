import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import ProjectBanner from "../../components/ProjectComponents/ProjectBanner/ProjectBanner";
import GetProjectInfo from "../../scripts/GetProjectInfo";
import designProjectList from "../../information/DesignProjects";
import SkillImages from "../../components/ProjectComponents/SkillImages/SkillImages";
import TextImageStrip from "../../components/ProjectComponents/InformationStrip/TextImageStrip";
import ImageTextStrip from "../../components/ProjectComponents/InformationStrip/ImageTextStrip";
import FullWidthImage from "../../components/ProjectComponents/InformationStrip/FullWidthImage";
import ImageGallery from "../../components/ProjectComponents/ImageGallery/ImageGallery";
import Title from "../../components/ProjectComponents/Title/Title";
import HorizonalImageTextCard from "../../components/ProjectComponents/Card/HorizontalImageTextCard";
import { photos } from "../../components/ProjectComponents/ImageGallery/IGMARCHVII";
import FullWidthVideo from "../../components/ProjectComponents/FullWidthVideo/FullWidthVideo";
import CardColumns from "../../components/ProjectComponents/Card/CardColumns";
import TextVideoStrip from "../../components/ProjectComponents/InformationStrip/TextVideoStrip";

const InputDevice = () => {
  //gets information about project
  var projectInfo = GetProjectInfo(designProjectList, "Input Device");

  return (
    <>
      <ProjectBanner
        projectList={designProjectList}
        project={projectInfo.name}
      />
      <SkillImages skills={["solidworks", "blender", "3dprinting", "arduino"]} />
      <HorizonalImageTextCard
        title="What is Project MARCH?"
        text="Project MARCH is a non-profit DreamTeam. The goal of the team is to make someone with a spinal-cord-injury walk again by building an exoskeleton. The team, consisting of 26 students with different deciplines and background, work full time on this project for over a year. We were the seventh team."
        image="MARCH VII/TeamPhoto.jpg"
        padding="bottom-padding"
      />
      
    </>
  );
};

export default InputDevice;
