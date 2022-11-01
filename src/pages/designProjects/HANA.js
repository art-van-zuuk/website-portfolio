import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import { photos } from "../../components/ProjectComponents/ImageGallery/IGHANA";
import ImageGallery from "../../components/ProjectComponents/ImageGallery/ImageGallery";
import FullWidthImage from "../../components/ProjectComponents/InformationStrip/FullWidthImage";
import TextColumns from "../../components/ProjectComponents/InformationStrip/TextColumns";
import TextImageStrip from "../../components/ProjectComponents/InformationStrip/TextImageStrip";
import ProjectBanner from "../../components/ProjectComponents/ProjectBanner/ProjectBanner";
import SkillImages from "../../components/ProjectComponents/SkillImages/SkillImages";

import CardColumns from "../../components/ProjectComponents/Card/CardColumns";
import HorizonalImageTextCard from "../../components/ProjectComponents/Card/HorizontalImageTextCard";
import FullWidthVideo from "../../components/ProjectComponents/FullWidthVideo/FullWidthVideo";
import TextVideoStrip from "../../components/ProjectComponents/InformationStrip/TextVideoStrip";
import SectionLine from "../../components/ProjectComponents/SectionLine/SectionLine";
import Title from "../../components/ProjectComponents/Title/Title";
import designProjectList from "../../information/DesignProjects";
import GetProjectInfo from "../../scripts/GetProjectInfo";

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
        skills={["photoshop", "indesign", "solidworks", "3dprinting", "userresearch"]}
      />
      <HorizonalImageTextCard
        title="Research on the visually impaired with a guide dog"
        text="This assignment started off with a research phase. Together with 4 other students, we discovered what the main hurdles are for visually impaired people in terms of mobility. We did this by interviewing and observing them. The next phase was individual. I decided to focus on visually impaired people with a guide dog."
        image="HANA/Braille.jpg"
        padding="top-bottom-padding"
      />
      <SectionLine title="Research" padding="top-padding" />
      <TextImageStrip
        title="Exploring unfamiliar environments"
        text="People with a guide dog are relatively mobile. The guide dog can lead them to known environments, watch the traffic and move around obstacles. However, exploring new environments is difficult. A guide dog is no navigator on its own and navigation technologies are currently not good enough."
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
        title="Problems with today's navigation"
        size="h2"
        alignment="center"
        padding="top-padding"
      />
      <CardColumns
        cardInfo={[
          {
            title: "Inaccuracy",
            text: "GPS can be very inaccurate in urban environments. Especially for blind people, that have no visual confirmation. Taking the wrong turn at the wrong moment could be very confusing.",
            image: "HANA/Inaccurate.jpg",
            objectFit: "contain",
          },
          {
            title: "Occupy hearing sense",
            text: "Relying on your ears can be difficult and dangerous. It might be hard to hear the navigation when traffic is loud and it might be hard to hear traffic when the navigation is talking.",
            image: "HANA/Hearing.jpg",
            objectFit: "contain",
          },
          {
            title: "Unintuitive",
            text: "Sometimes it is hard to understand what the navigation means. ‘Go south’ or ‘head towards Churchstreet’ means nothing to a visually impaired person that cannot rely on a screen.",
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
        title="On-demand information"
        text="To make the navigation process less interruptive in traffic, on-demand information can be used. The visually impaired person decides when to get or not to get directions."
        image="HANA/onDemand.jpg"
        padding="top-bottom-padding"
        maxWidth="400px"
        maxHeight="400px"
        reverse={true}
      />
      <TextImageStrip
        title="Using orientation points"
        text="People with guide dogs walk from one orientation point to the next. This way the route is divided into smaller parts making it easier to comprehend and easier to understand where they are. Therefore, this is the bases for the HANA concept."
        image="HANA/OrientationPoints.jpg"
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
        text="HANA makes use of a tactile dot located underneath a circular piece of fabric at the index finger. This dot represents the location of the next orientation point compared to the user (static dot on fabric). Two motors make the dot move in 2D space."
        image="HANA/TactileDot.jpg"
        padding="top-bottom-padding"
        maxHeight="350px"
        reverse={true}
      />
      <TextVideoStrip
        title="GPS and camera vision"
        text="For general localization GPS is used, but to create a sub-meter accuracy, a camera recognizes orientation points on the route. Experts were consulted and a custom AI classification model was made to validate this principle."
        image="Braun Parch/exploded_view.png"
        videoWidth="5"
        padding="top-bottom-padding"
        video="2_CDSOufP1c"
        rounded={true}
        aspectRatio= "720/1000"
        maxWidth= "250px"
      />
      <SectionLine title="Validation" padding="top-padding" />
      <TextVideoStrip
        title="Prototyping a tactile dot"
        text="To validate the concept a working prototype was made. This was tested on a number of sighted and visually impaired people."
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
            text: "A number of visually impaired people were asked to describe the direction that the working prototype was giving.",
            image: "HANA/CognitiveErgonomics.png",
            objectFit: "cover",
          },
          {
            title: "Physical Ergonomics",
            text: "Extensive research was done on the placement, material and shape of the tactile surface.",
            image: "HANA/PhysicalErgonomics.png",
            objectFit: "cover",
          },
          {
            title: "The details",
            text: "Visually impaired people were asked to give their opinion about the overall concept and details of the final prototype.",
            image: "HANA/EaseOfUse.png",
            objectFit: "cover",
          },
        ]}
        imageHeight="200px"
        cardWidth="4"
        padding="bottom-padding"
      />
      <ImageGallery
        project={projectInfo.name}
        photos={photos}
        padding="top-padding"
      />
      <FullWidthVideo video="jTybKpj1jgA" padding="bottom-padding" />
    </>
  );
};

export default HANA;
