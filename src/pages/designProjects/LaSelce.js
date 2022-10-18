import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
        text="Boretti wants to create the kitchen of the future by implementing induction stoves into the kitchen counter, giving the user a lot of freedom. Herefore, Jeroen van Rijnberk created a wireless knob called Appassionato, which controls these stoves. We were asked to improve and work out this concept."
        image="La Selce/Appassionato.png"
        padding="top-bottom-padding"
        rounded="true"
      />
      <TextImageStrip
        title="Passion for cooking "
        text="Boretti is a company that takes passion to the modern kitchen by embracing the Italian lifestyle. This is what we tried to accomplish with ‘La Selce’ the successor of Appassionato. We accomplished this by creating an organic and natural look and a professional and satisfying interaction."
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
            text: "The rotating knob and touchscreen buttons should be usable for people with a great range in hand sizes. To ensure the optimal fit for most, physical tests with the target group were done.",
            image: "La Selce/ImageGallery/Rotating knob.jpg",
            objectFit: "cover",
          },
          {
            title: "Intuitive interface",
            text: "The layout on the touchscreen mirrors the stove layout of the stoves, making the selection as easy as possible. The interface is simple and shows only the essential information.",
            image: "La Selce/Interface.jpg",
            objectFit: "cover",
          },
          {
            title: "Light, clicks and vibrations",
            text: "La Selce uses multimodal feedback to create an understandable interaction, even while paying attention to your food. The ring clicks while rotating, the bottom light shines brighter when putting the stoves higher and a vibration motor gives feedback while using the touchscreen.",
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
        text="We spend a long time perfecting the rotating ring. The turn had to feel satisfying, with the perfect amount of resistance, an array of magnets create 18 clicks per rotation, corresponding with the number of grooves on the outside, and the material had to feel comfortable and premium. After many iterations, we set on a design created from black anodized aluminium."
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
        padding="top-bottom-padding"
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
