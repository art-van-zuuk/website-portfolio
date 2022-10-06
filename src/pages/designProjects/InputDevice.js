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
import TextColumns from "../../components/ProjectComponents/InformationStrip/TextColumns";

const InputDevice = () => {
  //gets information about project
  var projectInfo = GetProjectInfo(designProjectList, "Input Device");

  return (
    <>
      <ProjectBanner
        projectList={designProjectList}
        project={projectInfo.name}
      />
      <SkillImages
        skills={["solidworks", "blender", "3dprinting", "arduino"]}
      />
      <HorizonalImageTextCard
        title="What is Project MARCH?"
        text="Project MARCH is a non-profit DreamTeam, that aims to make someone with a spinal-cord-injury walk again by building an exoskeleton. The group, consisting of 26 students with different disciplines and backgrounds, worked full-time on this project for over a year. We were the seventh team."
        image="MARCH VII/TeamPhoto.jpg"
        padding="bottom-padding"
      />
      <ImageTextStrip
        title="Previous design"
        text="The design of the input device stayed the same for many years. As a new team, we soon realized that it was outdated and too difficult to use for both the user as well as the team."
        image="Input Device/OldDesign.jpg"
        rounded={true}
        padding="top-bottom-padding"
      />
      <Title
        title="How we improved"
        size="h2"
        alignment="center"
        padding="top-padding"
      />
      <CardColumns
        cardInfo={[
          {
            title: "Integrated smartphone",
            text: "We decided to use a smartphone since it has a great screen, stable wireless connectivity, integrated actuators such as a vibration motor and speakers and allows for easy to program interfaces.",
            image: "MARCH VII/thumbnail.png",
            objectFit: "contain",
          },
          {
            title: "Ergonomic input",
            text: "By testing, we found that the index finger is the most free-moving finger, while putting pressure on the crutches. To move through and select the options on the screen, the new input device uses a custom clickable scroll wheel placed at the index finger.",
            image: "Input Device/ErgonomicsKoen.jpg",
            objectFit: "cover",
          },
          {
            title: "Keeping it simple",
            text: "The base of the new design is built from one piece. Since it is made from flexible TPU, it directly functions as a phone case. All electronics are connected to a plate, which can be screwed onto the base. Taking it apart now only takes minutes instead of hours.",
            image: "MARCH VII/CAD.jpg",
            objectFit: "cover",
          },
        ]}
        imageHeight="200px"
        cardWidth="4"
        padding="bottom-padding"
      />
      <ImageTextStrip
        title="Repairability"
        text="The design of the input device stayed the same for many years. As a new team, we soon realized that it was outdated and too difficult to use for both the user as well as the team."
        image="Input Device/RepairableIPD.jpg"
        rounded={true}
        padding="top-bottom-padding"
      />
      <TextImageStrip
        title="Interface, only the essentials"
        text="The design of the input device stayed the same for many years. As a new team, we soon realized that it was outdated and too difficult to use for both the user as well as the team."
        image="Input Device/Interface.jpg"
        rounded={true}
        padding="top-bottom-padding"
      />
      <Title
        title="Prototyping"
        size="h2"
        alignment="center"
        padding="top-padding"
      />
      <CardColumns
        cardInfo={[
          {
            title: "Proof of concept",
            text: "",
            image: "Input Device/Prototype1.jpg",
            objectFit: "cover",
          },
          {
            title: "Minimal Viable Product",
            text: "In the past, putting on the covers was a tidious task. By implementing magnets inside of the covers, this was made a lot easier. The team could put a cover at the right place and it would snap into place. Another big frustration was caused by the lack of cable managment. We greatly improved this by rethinking cable routes and tighening them down to the frame.",
            image: "Input Device/Prototype2.jpg",
            objectFit: "cover",
          },
          {
            title: "Final prototype",
            text: "The base of the new design is built from one piece. Since it is made from flexible TPU, it directly functions as a phone case. All electronics are connected to a plate, which can be screwed onto the base. Taking it apart now only takes minutes instead of hours.",
            image: "Input Device/Prototype3.jpg",
            objectFit: "cover",
          },
        ]}
        imageHeight="200px"
        cardWidth="4"
        padding="bottom-padding"
      />
      <ImageTextStrip
        title="User testing"
        text="The design of the input device stayed the same for many years. As a new team, we soon realized that it was outdated and too difficult to use for both the user as well as the team."
        image="Input Device/ErgonomicsKoen.jpg"
        rounded={true}
        padding="top-bottom-padding"
      />
      <TextImageStrip
        title="Flexible SLS-printing"
        text=""
        image="Input Device/OldDesign.jpg"
        rounded={true}
        padding="top-bottom-padding"
      />

      <FullWidthImage
        project={projectInfo.name}
        image="IPDInNature.jpg"
        rounded={true}
        padding="top-padding"
      />
      <Title title="Image by: Dreux" size="p" alignment="start" padding="" />
    </>
  );
};

export default InputDevice;
