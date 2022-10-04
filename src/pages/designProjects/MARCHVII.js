import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import ProjectBanner from "../../components/ProjectComponents/ProjectBanner/ProjectBanner";
import GetProjectInfo from "../../scripts/GetProjectInfo";
import designProjectList from "../../information/DesignProjects";
import SkillImages from "../../components/ProjectComponents/SkillImages/SkillImages";
import TextImageStrip from "../../components/ProjectComponents/InformationStrip/TextImageStrip";
import ImageTextStrip from "../../components/ProjectComponents/InformationStrip/ImageTextStrip";
import FullWidthImage from "../../components/ProjectComponents/InformationStrip/FullWidthImage";
import ImageGallery from "../../components/ProjectComponents/ImageGallery/ImageGallery";
import Title from "../../components/ProjectComponents/Title/Title";
import HorizonalImageTextCard from "../../components/ProjectComponents/Card/HorizontalImageTextCard";
import { photos } from "../../components/ProjectComponents/ImageGallery/IGMARCHVII";
import FullWidthVideo from "../../components/ProjectComponents/FullWidthVideo/FullWidthVideo";
import CardColumns from "../../components/ProjectComponents/Card/CardColumns";
import TextVideoStrip from "../../components/ProjectComponents/InformationStrip/TextVideoStrip";
import AnimatedCardColumns from "../../components/ProjectComponents/Card/AnimatedCardColumns";





const MARCHVII = () => {
  //gets information about project
  var projectInfo = GetProjectInfo(designProjectList, "MARCH VII");

  return (
    <>
      <ProjectBanner
        projectList={designProjectList}
        project={projectInfo.name}
      />
      <SkillImages skills={["photoshop", "catia", "blender", "3dprinting"]} />
      <HorizonalImageTextCard
        title="What is Project MARCH?"
        text="Project MARCH is a non-profit DreamTeam, that aims to make someone with a spinal-cord-injury walk again by building an exoskeleton. The group, consisting of 26 students with different deciplines and background, work full time on this project for over a year. We were the seventh team."
        image="MARCH VII/TeamPhoto.jpg"
        padding="top-bottom-padding"
      />
      <TextImageStrip
        title="Designing the covers of an exoskeleton"
        text="As one of the two design engineers I was asked to design, test and build the covers for the new exoskeleton. Our goal was to create a good look and feel, a safe design for the user and team and a better user experience."
        image="MARCH VII/CAD.jpg"
        padding="top-bottom-padding"
        rounded={true}
      />
      <Title
        title="A different design every year"
        size="h3"
        alignment="start"
        padding="top-padding"
      />
      <Title
        title="From 2015 on, the MARCH exoskeletons have developed to be more functional and human centered"
        size="h4"
        alignment="start"
        padding=""
      />
      <AnimatedCardColumns
        cardInfo={[
          {
            title: "MARCH I",
            image: "MARCH VII/Old Exos/MARCH I.jpg",
            objectFit: "contain",
          },
          {
            title: "MARCH II",
            image: "MARCH VII/Old Exos/MARCH II.jpg",
            objectFit: "cover",
          },
          {
            title: "MARCH III",
            image: "MARCH VII/Old Exos/MARCH III.jpg",
            objectFit: "cover",
          },
          {
            title: "MARCH IV",
            image: "MARCH VII/Old Exos/MARCH IV.jpg",
            objectFit: "contain",
          },
          {
            title: "MARCH V",
            image: "MARCH VII/Old Exos/MARCH V.jpg",
            objectFit: "cover",
          },
          {
            title: "MARCH VI",
            image: "MARCH VII/Old Exos/MARCH VI.jpg",
            objectFit: "cover",
          },
        ]}
        imageHeight="150px"
        cardWidth="2"
        padding="bottom-padding"
      />
      <Title
        title="Starting over, with knowledge from last years"
        size="h3"
        alignment="start"
        padding="top-padding"
      />
      <Title title="Idea sketches" size="h4" alignment="start" padding="" />
      <FullWidthImage
        project={projectInfo.name}
        image="Drawings.jpg"
        padding=""
      />
      <Title
        title="With inspiration from last years exoskeletons and exoskeletons that were already on the market, we created some ideas on what look and feel our exoskeleton should express."
        size="p"
        alignment="start"
        padding="bottom-padding"
      />

      <Title title="Concept sketches" size="h4" alignment="start" padding="" />
      <FullWidthImage
        project={projectInfo.name}
        image="Concepts.jpg"
        padding=""
      />
      <Title
        title="To get a better understanding of how these details would translate to a full exoskeleton, we made four different concepts. For each style we created a collage for inspiration. The final design took inspiration from different elements of the concepts. Two of these concepts were made by Iza Bosch. "
        size="p"
        alignment="start"
        padding="bottom-padding"
      />
      <Title
        title="Main focus points"
        size="h2"
        alignment="center"
        padding="top-padding"
      />
      <CardColumns
        cardInfo={[
          {
            title: "Organic and small design",
            text: "The internal size of the exoskeleton has been increasing year after year, and with that the bulkiness. We aimed to visually overcome this by making use of a black innerline. Next to that, smart use of organic curves and details also create an illusion, making the covers appear smaller than they are.",
            image: "MARCH VII/thumbnail.png",
            objectFit: "contain",
          },
          {
            title: "Focus on the user",
            text: "In the past, putting on the covers was a tidious task. By implementing magnets inside of the covers, this was made a lot easier. The team could put a cover at the right place and it would snap into place. Another big frustration was caused by the lack of cable managment. We greatly improved this by rethinking cable routes and tighening them down to the frame.",
            image: "MARCH VII/CAD.jpg",
            objectFit: "cover",
          },
          {
            title: "Eye on safety",
            text: "One of the main functions of the covers is protecting both the team, the user and the electronics. A lot of testing was done to ensure the ergomics for the user, strength of the covers and protection for the components.",
            image: "MARCH VII/CAD.jpg",
            objectFit: "cover",
          },
        ]}
        imageHeight="200px"
        cardWidth="4"
        padding="bottom-padding"
      />
      <TextVideoStrip
        title="Making it visible"
        text="During the year, I wanted to challenge myself by learning to render in Blender. I spend a full month learning the program and rendering shot by shot. For a better experience turn on the music and watch on full-screen!"
        video="sgKixViuUBE"
        padding="top-bottom-padding"
        rounded={true}
      />
      <ImageTextStrip
        title="Testing with 3D-printed prototypes"
        text="As one of the two design engineers I was asked to design, test and build the covers for the new exoskeleton. Our goal was to create a good look and feel, a safe design for the user and team and a better user user experience."
        image="MARCH VII/PuttingOnCovers.jpg"
        padding="top-bottom-padding"
        rounded={true}
      />
      <Title
        title="It's all in the details"
        size="h2"
        alignment="center"
        padding="top-padding"
      />
      <FullWidthImage
        project={projectInfo.name}
        image="Drawings.jpg"
        padding=""
      />
      <Title
        title="Image of design last years | 4 concepts Iza and me, with design goals: thinner looking | Prototyping | Render video, with explaination | The details | Better User experience: Magnets, cable management | Safety | Images | Final video"
        size="p"
        alignment="center"
        padding="bottom-padding"
      />
      <Title
        title="Image of design last years | 4 concepts Iza and me, with design goals: thinner looking | Prototyping | Render video, with explaination | The details | Better User experience: Magnets, cable management | Safety | Images | Final video"
        size="p"
        alignment="center"
        padding="bottom-padding"
      />
      <ImageGallery
        project={projectInfo.name}
        photos={photos}
        padding="top-padding"
      />
      <FullWidthVideo video="Bm6ndmPpysY" padding="" />
      <Title
        title="Video by: Dreux"
        size="p"
        alignment="start"
        padding="bottom-padding"
      />
    </>
  );
};

export default MARCHVII
