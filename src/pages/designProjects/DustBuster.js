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
      <SkillImages skills={["photoshop", "illustrator", "3dprinting"]} />
      <Title
        title="From armadillo to dust buster"
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
        image="Armadillo transform.jpg"
        padding="bottom-padding"
      />
      <ImageTextStrip
        title="Inspiration from shape and texture"
        text="With inspiration from existing Google products, user research on body placement and comfort, and modelling in clay and 3D prints we found the optimal shape for the product."
        image="Dust Buster/Inspiration.jpg"
        padding="top-bottom-padding"
        rounded="true"
        maxHeight="400px"
        maxWidth="100%"
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
