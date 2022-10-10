import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "../../components/Footer/Footer";
import ProjectBanner from "../../components/ProjectComponents/ProjectBanner/ProjectBanner";
import TextImageStrip from "../../components/ProjectComponents/InformationStrip/TextImageStrip";
import ImageTextStrip from "../../components/ProjectComponents/InformationStrip/ImageTextStrip";
import FullWidthImage from "../../components/ProjectComponents/InformationStrip/FullWidthImage";
import TextColumns from "../../components/ProjectComponents/InformationStrip/TextColumns";
import ImageGallery from "../../components/ProjectComponents/ImageGallery/ImageGallery";
import SkillImages from "../../components/ProjectComponents/SkillImages/SkillImages";

import { photos } from "../../components/ProjectComponents/ImageGallery/IGBraunParch";
import FullWidthVideo from "../../components/ProjectComponents/FullWidthVideo/FullWidthVideo";
import Title from "../../components/ProjectComponents/Title/Title";
import GetProjectInfo from "../../scripts/GetProjectInfo";
import designProjectList from "../../information/DesignProjects";
import CardColumns from "../../components/ProjectComponents/Card/CardColumns";
import HorizonalImageTextCard from "../../components/ProjectComponents/Card/HorizontalImageTextCard";
import SectionLine from "../../components/ProjectComponents/SectionLine/SectionLine";

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
      <HorizonalImageTextCard
        title="Research on visually impaired with guide dog"
        text="Project MARCH is a non-profit DreamTeam, that aims to make someone with a spinal-cord-injury walk again by building an exoskeleton. The group, consisting of 26 students with different disciplines and backgrounds, worked full-time on this project for over a year. We were the seventh team."
        image="MARCH VII/TeamPhoto.jpg"
        padding="top-bottom-padding"
      />
      <SectionLine title="Research" padding="top-padding" />
      <ImageTextStrip
        title="Exploring unfamiliar environments"
        text="say something about empowerment"
        image="HANA/GDOnCrossing.jpg"
        padding="top-bottom-padding"
        rounded="true"
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
        padding="padding"
      />
      <TextColumns
        texts={[
          "When I have to turn right, I am still often not sure if I can or if the turn is in 5 meters, then I have to ask someone",
          "Sometimes it is hard to hear the navigation system, and if you use headphones you don’t hear the traffic",
          "Google Maps doesn’t give enough information and BlindSquare gives to much information",
        ]}
        columnWidth="4"
        size="h6"
        alignment="center"
        marginHeight="5"
      />
      <TextColumns
        texts={[
          "- Gregory (blind with guide dog), 2020",
          "- Erik (blind with guide dog), 2020",
          "- Erik (blind with guide dog), 2020",
        ]}
        columnWidth="4"
        size="p"
        alignment="end"
      />
      <SectionLine title="Solution" padding="top-padding" />
      <ImageTextStrip
        title="On demand information"
        text="Say something about on-demand info"
        image="Braun Parch/exploded_view.png"
        padding="top-bottom-padding"
      />
      <TextImageStrip
        title="Using orientation points"
        text="Say something about on-demand info"
        image="Braun Parch/exploded_view.png"
        padding="bottom-padding"
      />
      <SectionLine title="The concept" padding="top-padding" />
      <Title title="HANA" size="h2" alignment="center" padding="top-padding" />
      <Title
        title="Navigation on the tip of your finger"
        size="h4"
        alignment="center"
        padding=""
      />
      <FullWidthImage
        project={projectInfo.name}
        image="HANAScenario.png"
        padding="bottom-padding"
      />
      <ImageTextStrip
        title="A tactile dot"
        text="Tactile dot underneath fabric "
        image="Braun Parch/exploded_view.png"
        padding="top-bottom-padding"
      />
      <TextImageStrip
        title="GPS and camera vision"
        text="Tactile dot underneath fabric "
        image="Braun Parch/exploded_view.png"
        padding="bottom-padding"
      />
      <SectionLine title="Validation" padding="top-padding" />

      <ImageTextStrip
        title="Prototyping a tactile dot"
        text="Tactile dot underneath fabric "
        image="HANA/TactileDotPrototype.jpg"
        padding="top-bottom-padding"
        rounded="true"
      />
      <Title
        title="User testing"
        size="h2"
        alignment="center"
        padding="top-padding"
      />
      <Title
        title="Co-creating a product with visually impaired people"
        size="h4"
        alignment="center"
        padding=""
      />
      <CardColumns
        cardInfo={[
          {
            title: "Cognitive Ergonomics",
            text: "The first prototype was a simple 3D-printed model in which a phone could be clamped. Using Protopie, an app prototyping program, I made a simple interface, which was controllable via scroll wheel from a mouse.",
            image: "HANA/CognitiveErgonomics.png",
            objectFit: "cover",
          },
          {
            title: "Physical Ergonomics",
            text: "After multiple iterations, a design was made that would closely resemble the shape of the final model. Therefore, ergonomics could be tested. Experiments with TPU were done and the electronics were almost finalized.",
            image: "HANA/PhysicalErgonomics.png",
            objectFit: "cover",
          },
          {
            title: "The details",
            text: "A few iterations later, we ordered the first SLS-printed model, which could be used during trainings. Based on this model, the final improvements were made.",
            image: "HANA/EaseOfUse.png",
            objectFit: "cover",
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
