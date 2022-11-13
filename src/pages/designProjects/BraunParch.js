import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import { photos } from "../../components/ProjectComponents/ImageGallery/IGBraunParch";
import ImageGallery from "../../components/ProjectComponents/ImageGallery/ImageGallery";
import FullWidthImage from "../../components/ProjectComponents/InformationStrip/FullWidthImage";
import TextImageStrip from "../../components/ProjectComponents/InformationStrip/TextImageStrip";
import ProjectBanner from "../../components/ProjectComponents/ProjectBanner/ProjectBanner";
import SkillImages from "../../components/ProjectComponents/SkillImages/SkillImages";

import CardColumns from "../../components/ProjectComponents/Card/CardColumns";
import FullWidthVideo from "../../components/ProjectComponents/FullWidthVideo/FullWidthVideo";
import Title from "../../components/ProjectComponents/Title/Title";
import designProjectList from "../../information/DesignProjects";
import GetProjectInfo from "../../scripts/GetProjectInfo";

const BraunParch = () => {
  // console.log("list: " + designProjectList);

  //gets information about project
  var projectInfo = GetProjectInfo(designProjectList, "Braun Parch");

  console.log('BP')
  console.log(photos)

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
        text="More than 50 per cent of food waste happens during consumption in Europe. A big portion of this comes from the lack of conservation of leftover food. Often this food is still perfectly edible and a good source of nutrition."
        image="Braun Parch/FoodWaste.jpg"
        padding="top-bottom-padding"
        rounded={true}
      />
      <TextImageStrip
        title="Good taste..."
        text="An ancient but mostly forgotten method to preserve food is dehydration. Braun Parch brings new life to the world of food dehydration at home by using a vacuum."
        image="Braun Parch/GoodTaste.jpg"
        padding="top-bottom-padding"
        rounded={true} 
        reverse={true}
      />
      <Title
        title="Drying food with the power of vacuum..."
        size="h2"
        alignment="center"
        padding="top-padding"
      />
      <Title
        title="A vacuum makes it possible to evaporate water at a lower temperature. At a certain under pressure, water evaporates even at room temperature. At 0.12 Bar, water evaporates at 50 degrees C. So food can dry a lot quicker at a lower temperature, making the process faster and more nutritious."
        size="p"
        alignment="center"
        padding=""
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
            text: "By using a vacuum, the process can be sped up while keeping the temperature relatively low.",
            image: "Braun Parch/quick.png",
            objectFit: "contain",
          },
          {
            title: "Nutricious",
            text: "Because of the low temperature, the nutrients in the food stay intact keeping it more healthy.",
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
      <FullWidthImage
        project={projectInfo.name}
        image="sketches.png"
        padding="top-bottom-padding"
      />
      <TextImageStrip
        title="Form follows functions"
        text="The stainless steel container is rounded to withstand the pressure. These incorporate ribs to hold the trays in place. The plastic shell follows the shape of the container, but has a protrusion in the back to hold the electronics. The top has a big glass plate, so you could easily look in."
        image="Braun Parch/exploded_view.png"
        padding="top-bottom-padding"
        reverse={true}
      />
      <FullWidthImage
        project={projectInfo.name}
        image="inspiration.jpg"
        padding="top-padding"
      />
      <Title
        title="Images by: Braun"
        size="p"
        alignment="start"
        padding="bottom-padding"
      />
      <TextImageStrip
        title="Old heritage, new style"
        text="This design creates a balance between using the old ‘Braun Style’ and my own. The horizontal patterns, button colours and materials refer to the old style, while the organic shell is not often seen in Braun products."
        image="Braun Parch/thumbnail.png"
        padding="top-bottom-padding"
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
