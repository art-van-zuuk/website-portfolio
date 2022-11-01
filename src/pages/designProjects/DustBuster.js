import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import ProjectBanner from "../../components/ProjectComponents/ProjectBanner/ProjectBanner";
import designProjectList from "../../information/DesignProjects";
import SkillImages from "../../components/ProjectComponents/SkillImages/SkillImages";
import FullWidthImage from "../../components/ProjectComponents/InformationStrip/FullWidthImage";
import GetProjectInfo from "../../scripts/GetProjectInfo";
import Title from "../../components/ProjectComponents/Title/Title";
import TextImageStrip from "../../components/ProjectComponents/InformationStrip/TextImageStrip";
import { photos } from "../../components/ProjectComponents/ImageGallery/IGDustBuster.js";
import ImageGallery from "../../components/ProjectComponents/ImageGallery/ImageGallery";

const DustBuster = () => {
  //gets information about project
  var projectInfo = GetProjectInfo(designProjectList, "Dust Buster");
  return (
    <>
      <ProjectBanner
        projectList={designProjectList}
        project={projectInfo.name}
      />
      <SkillImages skills={["photoshop", "illustrator", "building"]} />
      <Title
        title="From armadillo to dust buster"
        size="h2"
        alignment="center"
        padding="top-padding"
      />
      <FullWidthImage
        project={projectInfo.name}
        image="Armadillo transform.jpg"
        padding="bottom-padding"
      />
      <TextImageStrip
        title="Inspiration from shape and texture"
        text="The most apparent visual features of an armadillo are the big scales, downward facing snout and tough appearance. From there I tried to translate this into a dust buster."
        image="Dust Buster/Inspiration.jpg"
        padding="top-bottom-padding"
        maxHeight="400px"
        maxWidth="100%"
        reverse={true}
        rounded="true"
      />

      <FullWidthImage
        project={projectInfo.name}
        image="Wireframe.jpg"
        padding="top-bottom-padding"
      />

      <ImageGallery
        project={projectInfo.name}
        photos={photos}
        padding="top-padding"
      />
      <FullWidthImage
        project={projectInfo.name}
        image="DustBuster.jpg"
        padding="bottom-padding"
      />
    </>
  );
};

export default DustBuster;
