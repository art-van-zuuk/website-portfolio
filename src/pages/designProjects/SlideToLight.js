import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import ProjectBanner from "../../components/ProjectComponents/ProjectBanner/ProjectBanner";
import designProjectList from "../../information/DesignProjects";
import SkillImages from "../../components/ProjectComponents/SkillImages/SkillImages";
import FullWidthImage from "../../components/ProjectComponents/InformationStrip/FullWidthImage";
import GetProjectInfo from "../../scripts/GetProjectInfo";
import Title from "../../components/ProjectComponents/Title/Title";
import ImageTextStrip from "../../components/ProjectComponents/InformationStrip/ImageTextStrip";
import TextImageStrip from "../../components/ProjectComponents/InformationStrip/TextImageStrip";


const SlideToLight = () => {
  //gets information about project
  var projectInfo = GetProjectInfo(designProjectList, "Slide to Light");
  return (
    <>
      <ProjectBanner projectList={designProjectList} project="Slide to Light" />
      <SkillImages skills={["phototshop", "buidling", "lasercutting"]} />
      <ImageTextStrip
        title="Goalll...."
        text="People with a guide dog are relatively mobile. The guide dog can lead them to known environments, watch the traffic and move around obstacles. However, exploring new environments is difficult. This is something the guide dog has to learn and navigation is currently not good enough."
        image="La Selce/Appassionato.png"
        padding="top-bottom-padding"
        rounded="true"
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
      <ImageTextStrip
        title="Many levels to play"
        text="People with a guide dog are relatively mobile. The guide dog can lead them to known environments, watch the traffic and move around obstacles. However, exploring new environments is difficult. This is something the guide dog has to learn and navigation is currently not good enough."
        image="Slide to Light/Cards.png"
        padding="top-bottom-padding"
        rounded="true"
      />
      <TextImageStrip
        title="Many configurations"
        text="People with a guide dog are relatively mobile. The guide dog can lead them to known environments, watch the traffic and move around obstacles. However, exploring new environments is difficult. This is something the guide dog has to learn and navigation is currently not good enough."
        image="Slide to light/Blocks.png"
        padding="top-bottom-padding"
        rounded="true"
      />
    </>
  );
};

export default SlideToLight;
