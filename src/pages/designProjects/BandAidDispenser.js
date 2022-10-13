import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import ProjectBanner from "../../components/ProjectComponents/ProjectBanner/ProjectBanner";
import ImageTextStrip from "../../components/ProjectComponents/InformationStrip/ImageTextStrip";
import FullWidthImage from "../../components/ProjectComponents/InformationStrip/FullWidthImage";
import SkillImages from "../../components/ProjectComponents/SkillImages/SkillImages";

import Title from "../../components/ProjectComponents/Title/Title";
import GetProjectInfo from "../../scripts/GetProjectInfo";
import designProjectList from "../../information/DesignProjects";
import CardColumns from "../../components/ProjectComponents/Card/CardColumns";

const BandAidDispenser = () => {
  // console.log("list: " + designProjectList);

  //gets information about project
  var projectInfo = GetProjectInfo(designProjectList, "Band Aid Dispenser");

  return (
    <>
      <ProjectBanner
        projectList={designProjectList}
        project={projectInfo.name}
      />
      <SkillImages skills={["solidworks", "arduino", "lasercutting"]} />
      <ImageTextStrip
        title="User testing: From shape to model"
        text="With this assigment, Braun aimed to make a change in the increasing problem of food waste. I found that a big part of this waste happens at the consumption and espesially at the conservation of food"
        image="Band Aid Dispenser/Prototype cut out.jpg"
        padding="top-bottom-padding"
      />
      <CardColumns
        cardInfo={[
          {
            text: "Interaction prototypes",
            image: "Band Aid Dispenser/UserTest1.jpg",
            objectFit: "cover",
          },
          {
            text: "Ergonomics prototypes",
            image: "Band Aid Dispenser/UserTest2.jpg",
            objectFit: "cover",
          },
          {
            text: "Detailed prototype",
            image: "Band Aid Dispenser/UserTest3.jpg",
            objectFit: "cover",
          },
        ]}
        imageHeight="200px"
        cardWidth="4"
        padding="bottom-padding"
      />

      <Title
        title="Make it as intuitive as possible"
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
        image="Action elements.jpg"
        padding="bottom-padding"
      />
      <FullWidthImage
        project={projectInfo.name}
        image="Product render.jpg"
        padding="top-bottom-padding"
      />
    </>
  );
};

export default BandAidDispenser;
