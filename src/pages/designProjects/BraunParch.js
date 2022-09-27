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

const BraunParch = () => {
  // console.log("list: " + designProjectList);

  //gets information about project
  var projectInfo = GetProjectInfo(designProjectList, "Braun Parch");

  return (
    <>
      <ProjectBanner
        projectList={designProjectList}
        project={projectInfo.name}
      />
      <SkillImages
        skills={["photoshop", "illustrator", "solidworks", "3dprinting"]}
      />
      <TextImageStrip
        title="Food waste..."
        text="With this assignment Braun asked us to design something to lower the consumer's food waste. A big portion of this waste happens during the conservation or even worse, lack of conservation of leftover food."
        image="Braun Parch/FoodWaste.jpg"
        padding="top-bottom-padding"
        rounded={true}
      />
      <ImageTextStrip
        title="Good taste..."
        text="This leftover food often still is an excellent source of nutritions. An ancient but mostly forgotten method to preserve this is by dehydration. Braun Parch brings new life to the word of food dehydration at home by using vacuum."
        image="Braun Parch/GoodTaste.jpg"
        padding="top-bottom-padding"
        rounded={true}
      />
      <Title
        title="Drying food with the power of vacuum..."
        size="h2"
        alignment="center"
        padding="top-padding"
      />
      <Title
        title="This leftover food often still is an excellent source of nutritions. Therefore, preserving it"
        size="p"
        alignment="center"
        padding="bottom-padding"
      />
      <FullWidthImage
        project={projectInfo.name}
        image="step_explaination.png"
        padding="top-bottom-padding"
      />

      <Title
        title="A better design in many ways"
        size="h2"
        alignment="center"
        padding="top-padding"
      />
      <CardColumns
        cardInfo={[
          {
            title: "Quick",
            text: "By using vacuum, the process can be sped up while keeping the temperature relatively low.",
            image: "Braun Parch/quick.png",
            objectFit: "contain",
          },
          {
            title: "Nutricious",
            text: "Because of the low temperature, the nutricients in the food stay intact keeping it more healthy.",
            image: "Braun Parch/nutricious.png",
            objectFit: "contain",
          },
          {
            title: "Easy",
            text: "The pre-programmed settings per type of food make this tedious task as simple as it could be.",
            image: "Braun Parch/easy.png",
            objectFit: "contain",
          },
        ]}
        imageHeight="150px"
        imagePadding="3"
        cardWidth="4"
        padding="bottom-padding"
      />
      <ImageTextStrip
        title="Form follows functions"
        text="With this assigment, Braun aimed to make a change in the increasing problem of food waste. I found that a big part of this waste happens at the consumption and espesially at the conservation of food"
        image="Braun Parch/exploded_view.png"
        padding="top-bottom-padding"
      />
      <ImageTextStrip
        title="Old heritage, new style"
        text="With this assigment, Braun aimed to make a change in the increasing problem of food waste. I found that a big part of this waste happens at the consumption and espesially at the conservation of food"
        image="Braun Parch/thumbnail.png"
        padding="bottom-padding"
      />
      <FullWidthImage
        project={projectInfo.name}
        image="inspiration.jpg"
        padding=""
      />
      <Title
        title="Source: Braun"
        size="p"
        alignment="start"
        padding="padding-bottom"
      />
      <FullWidthImage
        project={projectInfo.name}
        image="sketches.png"
        padding="bottom-padding"
      />
      <ImageGallery
        project={projectInfo.name}
        photos={photos}
        padding="top-padding"
      />
      <FullWidthVideo video="cGzrci__Vho" padding="bottom-padding" />
    </>
  );
};

export default BraunParch;
