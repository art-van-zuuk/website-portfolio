import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "../../components/Footer/Footer";
import ProjectBanner from "../../components/ProjectComponents/ProjectBanner/ProjectBanner";
import TextImageStrip from "../../components/ProjectComponents/InformationStrip/TextImageStrip";
import ImageTextStrip from "../../components/ProjectComponents/InformationStrip/ImageTextStrip";
import FullWidthImage from "../../components/ProjectComponents/InformationStrip/FullWidthImage";
import ImageGallery from "../../components/ProjectComponents/ImageGallery/ImageGallery";
import SkillImages from "../../components/ProjectComponents/SkillImages/SkillImages";

import { photos } from "../../components/ProjectComponents/ImageGallery/IGLaSelce";
import FullWidthVideo from "../../components/ProjectComponents/FullWidthVideo/FullWidthVideo";
import Title from "../../components/ProjectComponents/Title/Title";
import GetProjectInfo from "../../scripts/GetProjectInfo";
import designProjectList from "../../information/DesignProjects";
import CardColumns from "../../components/ProjectComponents/Card/CardColumns";
import SectionLine from "../../components/ProjectComponents/SectionLine/SectionLine";
import TextColumns from "../../components/ProjectComponents/InformationStrip/TextColumns";

const LaSelce = () => {
  //gets information about project
  var projectInfo = GetProjectInfo(designProjectList, "La Selce");

  return (
    <>
      <ProjectBanner
        projectList={designProjectList}
        project={projectInfo.name}
      />
      <SkillImages
        skills={[
          "photoshop",
          "indesign",
          "solidworks",
          "arduino",
          "3dprinting",
          "manufacturing",
        ]}
      />
      <ImageTextStrip
        title="Appassionato as starting point"
        text="People with a guide dog are relatively mobile. The guide dog can lead them to known environments, watch the traffic and move around obstacles. However, exploring new environments is difficult. This is something the guide dog has to learn and navigation is currently not good enough."
        image="La Selce/Appassionato.png"
        padding="top-bottom-padding"
        rounded="true"
      />
      <TextImageStrip
        title="Passion for cooking "
        text="People with a guide dog are relatively mobile. The guide dog can lead them to known environments, watch the traffic and move around obstacles. However, exploring new environments is difficult. This is something the guide dog has to learn and navigation is currently not good enough."
        image="La Selce/ImageGallery/TopView.jpg"
        padding="top-bottom-padding"
        rounded="true"
      />
      <Title
        title="La Selce"
        size="h2"
        alignment="start"
        padding="top-padding"
      />
      <Title
        title="Freedom in the kitchen for the passionate cook"
        size="h4"
        alignment="start"
        padding=""
      />
      <FullWidthImage
        project={projectInfo.name}
        image="Scenario.png"
        padding="bottom-padding"
      />
      <Title
        title="Physical and cognitive ergonomics"
        size="h2"
        alignment="center"
        padding="top-padding"
      />
      <Title
        title="Performing rigorous user testing for the optimal experience"
        size="h4"
        alignment="center"
        padding=""
      />
      <CardColumns
        cardInfo={[
          {
            title: "Right size for everyone",
            text: "The first prototype was a simple 3D-printed model in which a phone could be clamped. Using Protopie, an app prototyping program, I made a simple interface, which was controllable via scroll wheel from a mouse.",
            image: "La Selce/ImageGallery/Rotating knob.jpg",
            objectFit: "cover",
          },
          {
            title: "Intuitive interface",
            text: "A few iterations later, we ordered the first SLS-printed model, which could be used during trainings. Based on this model, the final improvements were made.",
            image: "La Selce/Interface.jpg",
            objectFit: "cover",
          },
          {
            title: "Light, clicks and vibrations",
            text: "Multimodal",
            image: "La Selce/Multimodal Feedback.png",
            objectFit: "cover",
          },
        ]}
        imageHeight="200px"
        cardWidth="4"
        padding="bottom-padding"
      />
      <ImageTextStrip
        title="Creating the perfect ring"
        text="People with a guide dog are relatively mobile. The guide dog can lead them to known environments, watch the traffic and move around obstacles. However, exploring new environments is difficult. This is something the guide dog has to learn and navigation is currently not good enough."
        image="La Selce/Ring.png"
        padding="top-bottom-padding"
        rounded="true"
      />
      <TextImageStrip
        title="Simulating a stove with a custom PCB"
        text="People with a guide dog are relatively mobile. The guide dog can lead them to known environments, watch the traffic and move around obstacles. However, exploring new environments is difficult. This is something the guide dog has to learn and navigation is currently not good enough."
        image="La Selce/LEDPCB.jpg"
        padding="top-bottom-padding"
        rounded="true"
      />
      <Title
        title="Durability testing"
        size="h2"
        alignment="center"
        padding="top-padding"
      />
      <CardColumns
        cardInfo={[
          {
            title: "Temperature resistance",
            text: "The first prototype was a simple 3D-printed model in which a phone could be clamped. Using Protopie, an app prototyping program, I made a simple interface, which was controllable via scroll wheel from a mouse.",
            image: "La Selce/Temperature.jpg",
            objectFit: "cover",
          },
          {
            title: "Fall resistance",
            text: "After multiple iterations, a design was made that would closely resemble the shape of the final model. Therefore, ergonomics could be tested. Experiments with TPU were done and the electronics were almost finalized.",
            image: "La Selce/Fall.png",
            objectFit: "cover",
          },
          {
            title: "Watertightness",
            text: "A few iterations later, we ordered the first SLS-printed model, which could be used during trainings. Based on this model, the final improvements were made.",
            image: "La Selce/Watertightness.png",
            objectFit: "cover",
          },
        ]}
        imageHeight="200px"
        cardWidth="4"
        padding="bottom-padding"
      />
      <ImageTextStrip
        title="Made for repairability"
        text="People with a guide dog are relatively mobile. The guide dog can lead them to known environments, watch the traffic and move around obstacles. However, exploring new environments is difficult. This is something the guide dog has to learn and navigation is currently not good enough."
        image="La Selce/Repairability.jpg"
        padding="top-bottom-padding"
        rounded="true"
      />
      <TextImageStrip
        title="Designed for manufacuring"
        text="People with a guide dog are relatively mobile. The guide dog can lead them to known environments, watch the traffic and move around obstacles. However, exploring new environments is difficult. This is something the guide dog has to learn and navigation is currently not good enough."
        image="La Selce/Manufacturing.jpg"
        padding="top-padding"
      />
      <TextColumns
        texts={["", "Drawings by: Lars Timmerman"]}
        columnWidth="6"
        size="p"
        alignment="center"
        padding="bottom-padding"
        marginHeight=""
      />
      <FullWidthImage
        project={projectInfo.name}
        image="Exploded.png"
        padding="bottom-padding"
      />
      <ImageGallery
        project={projectInfo.name}
        photos={photos}
        padding="top-padding"
      />

      <FullWidthVideo video="KijK4G9ukiw" padding="bottom-padding" />
    </>
  );
};

export default LaSelce;
