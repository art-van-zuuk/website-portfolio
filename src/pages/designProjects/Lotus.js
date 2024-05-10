import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import FullWidthImage from "../../components/ProjectComponents/InformationStrip/FullWidthImage";
import FullWidthVideo from "../../components/ProjectComponents/FullWidthVideo/FullWidthVideo";
import ProjectBanner from "../../components/ProjectComponents/ProjectBanner/ProjectBanner";
import SkillImages from "../../components/ProjectComponents/SkillImages/SkillImages";

import CardColumns from "../../components/ProjectComponents/Card/CardColumns";
import TextImageStrip from "../../components/ProjectComponents/InformationStrip/TextImageStrip";
import TextVideoStrip from "../../components/ProjectComponents/InformationStrip/TextVideoStrip";
import Title from "../../components/ProjectComponents/Title/Title";
import designProjectList from "../../information/DesignProjects";
import GetProjectInfo from "../../scripts/GetProjectInfo";
import HorizonalImageTextCard from "../../components/ProjectComponents/Card/HorizontalImageTextCard";
import TextColumns from "../../components/ProjectComponents/InformationStrip/TextColumns";

const Lotus = () => {
	//gets information about project
	var projectInfo = GetProjectInfo(designProjectList, "Lotus");

	return (
		<>
			<ProjectBanner projectList={designProjectList} project={projectInfo.name} textColor="white" />
			<SkillImages skills={["solidworks", "lasercutting", "building", "arduino", "python"]} />
			<HorizonalImageTextCard
				title="Barbapapa"
				text="In architecture, the Barbapapa movement, led by Winny Maas, is a thought experiment in which spaces could transform to the needs of their occupants rather than the other way around. This formed the inspiration for this novel lighting design."
				image="Lotus/Barbapapa.jpg"
				padding="top-bottom-padding"
			/>
			<TextImageStrip
				title="Context: DOK Library in Delft"
				text="DOK Delft is a library that serves as a place where people come together. The interior is playful with many different types of elements, which is also reflected in the versatile lighting design."
				image="Lotus/DOK.jpg"
				padding="top-bottom-padding"
				rounded={true}
				reverse={true}
			/>
			<TextImageStrip
				title="Multi-purpose table"
				text="The tables in DOK are occupied by many different types of people with different ages and different purposes. Where some are doing homework, others are drinking coffee and chat. Through research, we found that the lighting used in these places is not optimal for all these purposes."
				image="Lotus/MultiPurpose.jpg"
				padding="top-padding"
				rounded={true}
			/>
			<TextColumns
				texts={["", "Drawings by: Lisa Laverman"]}
				columnWidth="6"
				size="p"
				alignment="center"
				padding="bottom-padding"
				marginHeight=""
			/>
			<Title title="From sketches to working prototype" size="h2" alignment="center" padding="top-padding" />
			<FullWidthImage project={projectInfo.name} image="Process.png" padding="bottom-padding" />

			<Title title="Final design" size="h2" alignment="center" padding="top-padding" />
			<Title
				title="A transformable lamp that is context-aware, ideal for every scenario"
				size="h4"
				alignment="center"
				padding="padding"
			/>
			<FullWidthVideo video="etHLSguT5Gk" padding="padding" rounded={true} />
			<CardColumns
				cardInfo={[
					{
						title: "Concentration",
						text: "For studying and reading a focussed light helps to block out unwanted disturbances in the surrounding. The colder colour keeps the person more awake.",
						image: "Lotus/Concentration.jpg",
						objectFit: "cover",
					},
					{
						title: "Cozy",
						text: "Soft and warm lighting gives a sense of coziness and calmness. A soft flickering effect mimics a candle or campfire, adding to this effect.",
						image: "Lotus/Cozy.jpg",
						objectFit: "cover",
					},
					{
						title: "Playful",
						text: "Colourful visual effects that shine through the mechanism create a playful illustration on the table.",
						image: "Lotus/Playful.jpg",
						objectFit: "cover",
					},
				]}
				imageHeight="200px"
				cardWidth="4"
				padding="bottom-padding"
			/>

			<TextImageStrip
				title="Huberman mechanism and Starshade origami"
				text="The lampshade features two mechanisms. Firstly, the Huberman mechanism, which utilizes interconnected rods, that open like an iris, while allowing passage of light. Secondly, the Starshade origami, inspired by NASA's, which offers diffused lighting when unfolded."
				image="Lotus/Mechanism.jpg"
				padding="top-bottom-padding"
				rounded={true}
				reverse={true}
			/>
			<TextImageStrip
				title="Machine Learning for context-awerness"
				text="An Arduino controlled both the movement and lighting of the lamp. It was linked to a Python script, to integrate pose detection and object detection algorithms, thereby making it contextually aware."
				image="Lotus/MachineLearning.jpg"
				padding="top-bottom-padding"
				rounded={true}
			/>
		</>
	);
};

export default Lotus;
