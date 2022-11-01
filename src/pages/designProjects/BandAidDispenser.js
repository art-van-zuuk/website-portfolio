import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import ProjectBanner from "../../components/ProjectComponents/ProjectBanner/ProjectBanner";
import FullWidthImage from "../../components/ProjectComponents/InformationStrip/FullWidthImage";
import SkillImages from "../../components/ProjectComponents/SkillImages/SkillImages";

import Title from "../../components/ProjectComponents/Title/Title";
import GetProjectInfo from "../../scripts/GetProjectInfo";
import designProjectList from "../../information/DesignProjects";
import CardColumns from "../../components/ProjectComponents/Card/CardColumns";
import TextImageStrip from "../../components/ProjectComponents/InformationStrip/TextImageStrip";

const BandAidDispenser = () => {
  // console.log("list: " + designProjectList);

  //gets information about project
  var projectInfo = GetProjectInfo(designProjectList, "Band-Aid Dispenser");

  return (
    <>
      <ProjectBanner
        projectList={designProjectList}
        project={projectInfo.name}
      />
      <SkillImages skills={["solidworks", "building", "userresearch"]} />
      <TextImageStrip
        title="User testing: From shape to model"
        text="To create a Band-Aid Dispenser with the optimal user experience, we created several foam and 3D-printed models. Each model was tested to create a new iteration with a better interactive experience."
        image="Band-Aid Dispenser/Prototype cut out.jpg"
        padding="top-bottom-padding"
        reverse={true}
      />
      <CardColumns
        cardInfo={[
          {
            title: "Interaction prototypes",
            text: "Testing what different shapes do to the meaning and way of using the product",
            image: "Band-Aid Dispenser/UserTest1.jpg",
            objectFit: "cover",
          },
          {
            title: "Ergonomics prototypes",
            text: "Figuring out what shapes are most comfortable for the user",
            image: "Band-Aid Dispenser/UserTest2.jpg",
            objectFit: "cover",
          },
          {
            title: "Detailed prototype",
            text: "Validating whether the complete model is used as intended",
            image: "Band-Aid Dispenser/UserTest3.jpg",
            objectFit: "cover",
          },
        ]}
        imageHeight="200px"
        cardWidth="4"
        padding="top-bottom-padding"
      />

      <Title
        title="Make it as intuitive as possible"
        size="h2"
        alignment="center"
        padding="top-padding"
      />
      <Title
        title="How are 'use cues' used to indicate the functions of the product"
        size="h4"
        alignment="center"
        padding="bottom-padding"
      />
      <FullWidthImage
        project={projectInfo.name}
        image="Action elements.jpg"
        padding="bottom-padding"
      />
      <FullWidthImage
        project={projectInfo.name}
        image="Product render.jpg"
        padding="top-padding"
      />
      <FullWidthImage
        project={projectInfo.name}
        image="Render close-up.png"
        padding="top-bottom-padding"
      />
    </>
  );
};

export default BandAidDispenser;
