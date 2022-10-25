import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import ProjectBanner from "../../components/ProjectComponents/ProjectBanner/ProjectBanner";
import TextImageStrip from "../../components/ProjectComponents/InformationStrip/TextImageStrip";
import FullWidthImage from "../../components/ProjectComponents/InformationStrip/FullWidthImage";
import TextColumns from "../../components/ProjectComponents/InformationStrip/TextColumns";
import ImageGallery from "../../components/ProjectComponents/ImageGallery/ImageGallery";
import SkillImages from "../../components/ProjectComponents/SkillImages/SkillImages";

import FullWidthVideo from "../../components/ProjectComponents/FullWidthVideo/FullWidthVideo";
import Title from "../../components/ProjectComponents/Title/Title";
import GetProjectInfo from "../../scripts/GetProjectInfo";
import designProjectList from "../../information/DesignProjects";
import CardColumns from "../../components/ProjectComponents/Card/CardColumns";
import HorizonalImageTextCard from "../../components/ProjectComponents/Card/HorizontalImageTextCard";
import SectionLine from "../../components/ProjectComponents/SectionLine/SectionLine";
import TextVideoStrip from "../../components/ProjectComponents/InformationStrip/TextVideoStrip";

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
        title="Research on the visually impaired with a guide dog"
        text="This assignment started off with a research phase. Together with 4 other students we discovered what the main hurdles are for visually impaired people in their mobility. We did this by interviewing and observing them. The next phase was individual. I decided to focus on visually impaired people with a guide dog."
        image="MARCH VII/TeamPhoto.jpg"
        padding="top-bottom-padding"
      />
      <SectionLine title="Research" padding="top-padding" />
      <TextImageStrip
        title="Exploring unfamiliar environments"
        text="People with a guide dog are relatively mobile. The guide dog can lead them to known environments, watch the traffic and move around obstacles. However, exploring new environments is difficult. This is something the guide dog has to learn and navigation is currently not good enough."
        image="HANA/GDOnCrossing.jpg"
        padding="top-padding"
        rounded="true"
        reverse={true}
      />
      <TextColumns
        texts={["Image by: LightFieldStudios", ""]}
        columnWidth="6"
        size="p"
        alignment="center"
        padding="bottom-padding"
        marginHeight=""
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
      <TextImageStrip
        title="On demand information"
        text="Say something about on-demand info"
        image="Braun Parch/exploded_view.png"
        padding="top-bottom-padding"
        reverse={true}
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
      <TextImageStrip
        title="A tactile dot"
        text="Tactile dot underneath fabric "
        image="Braun Parch/exploded_view.png"
        padding="top-bottom-padding"
        reverse={true}
      />
      <TextImageStrip
        title="GPS and camera vision"
        text="Tactile dot underneath fabric "
        image="Braun Parch/exploded_view.png"
        padding="bottom-padding"
      />
      <SectionLine title="Validation" padding="top-padding" />
      <TextVideoStrip
        title="Prototyping a tactile dot"
        text="During the year, I wanted to challenge myself by learning to render in Blender. I spent a full month learning the program and rendering shot by shot. For a better experience turn on the music and watch it on full screen!"
        video="jVQsnZeGv9E"
        videoWidth="6"
        padding="top-bottom-padding"
        rounded={true}
        reverse={true}
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
