import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import ProjectBanner from "../../components/ProjectComponents/ProjectBanner/ProjectBanner";
import designProjectList from "../../information/DesignProjects";
import SkillImages from "../../components/ProjectComponents/SkillImages/SkillImages";
import FullWidthImage from "../../components/ProjectComponents/InformationStrip/FullWidthImage";
import GetProjectInfo from "../../scripts/GetProjectInfo";
import Title from "../../components/ProjectComponents/Title/Title";
import TextImageStrip from "../../components/ProjectComponents/InformationStrip/TextImageStrip";
import { photos } from "../../components/ProjectComponents/ImageGallery/IGSlideToLight";
import ImageGallery from "../../components/ProjectComponents/ImageGallery/ImageGallery";



const SlideToLight = () => {
  //gets information about project
  var projectInfo = GetProjectInfo(designProjectList, "Slide to Light");
  return (
    <>
      <ProjectBanner projectList={designProjectList} project="Slide to Light" />
      <SkillImages skills={["phototshop", "buidling", "lasercutting"]} />
      <TextImageStrip
        title="Take a break..."
        text="Many people tend to take too few breaks while working. This can lead to a loss of concentration while working, less motivation and fysical fatigue like RSI. Slight to Light is a puzzle game that helps with this by letting you do something not work related."
        image="Slide to Light/working.jpg"
        padding="top-bottom-padding"
        rounded="true"
        reverse={true}
      />
      <Title
        title="How to play"
        size="h2"
        alignment="center"
        padding="top-padding"
      />
      <FullWidthImage
        project={projectInfo.name}
        image="HowToPlay.png"
        padding="bottom-padding"
      />
      <TextImageStrip
        title="Many configurations"
        text="Each block has their own characteristics. Some just let energy flow from one side to the other, another has a switch, and some are not moveable. Lastly, there is a lamp block that has a light that shines when the circuit is closed."
        image="Slide to Light/Blocks.png"
        padding="top-bottom-padding"
        rounded="true"
      />
      <TextImageStrip
        title="Many levels to play"
        text="There are a lot of configurations possible with the different types of blocks. The further you come, the more difficult the levels become."
        image="Slide to Light/Cards.png"
        padding="top-bottom-padding"
        rounded="true"
        reverse={true}
      />
      <ImageGallery
        project={projectInfo.name}
        photos={photos}
        padding="top-padding"
      />
    </>
  );
};

export default SlideToLight;
