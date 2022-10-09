import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "../../components/Footer/Footer";
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

const HANA = () => {

  //gets information about project
  var projectInfo = GetProjectInfo(designProjectList, "HANA");

  return (
    <>
      <ProjectBanner
        projectList={designProjectList}
        project={projectInfo.name}
      />
      <SkillImages
        skills={["photoshop", "indesign", "solidworks", "3dprinting"]}
      />
      <Title
        title="Problem with todays navigation"
        size="h2"
        alignment="center"
        padding="top-padding"
      />
      <CardColumns
        cardInfo={[
          {
            title: "Inaccuracy",
            text: "The first prototype was a simple 3D-printed model in which a phone could be clamped. Using Protopie, an app prototyping program, I made a simple interface, which was controllable via scroll wheel from a mouse.",
            image: "HANA/Inaccurate.jpg",
            objectFit: "contain",
          },
          {
            title: "Occupy hearing sense",
            text: "After multiple iterations, a design was made that would closely resemble the shape of the final model. Therefore, ergonomics could be tested. Experiments with TPU were done and the electronics were almost finalized.",
            image: "HANA/Hearing.jpg",
            objectFit: "contain",
          },
          {
            title: "Unintuitive",
            text: "A few iterations later, we ordered the first SLS-printed model, which could be used during trainings. Based on this model, the final improvements were made.",
            image: "HANA/Intuitive.jpg",
            objectFit: "contain",
          },
        ]}
        imageHeight="200px"
        cardWidth="4"
        padding="bottom-padding"
      />
      <Title
        title="Empowerment > exploring unfamiliar environments... quote I am proud of me and my dog when I easily walk a difficult route | 
        3 Problem with todays navigation | 
        Solution: On demand info & Using orientation points |
        Solution: introduction to the concept | 
        Concept: step by step image |
        Testing: tactile dot prototypes |
        Testing: graphs? | 
        Final model photos, exploded view?
        
        "
        size="p"
        alignment="center"
        padding="top-padding"
      />

      <FullWidthVideo video="jTybKpj1jgA" padding="bottom-padding" />
    </>
  );
};

export default HANA;
