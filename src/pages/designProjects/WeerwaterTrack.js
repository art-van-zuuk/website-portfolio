import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import FullWidthImage from "../../components/ProjectComponents/InformationStrip/FullWidthImage";
import FullWidthVideo from "../../components/ProjectComponents/FullWidthVideo/FullWidthVideo";
import ProjectBanner from "../../components/ProjectComponents/ProjectBanner/ProjectBanner";
import SkillImages from "../../components/ProjectComponents/SkillImages/SkillImages";
import AnimatedCardColumns from "../../components/ProjectComponents/Card/AnimatedCardColumns";
import CardColumns from "../../components/ProjectComponents/Card/CardColumns";
import TextImageStrip from "../../components/ProjectComponents/InformationStrip/TextImageStrip";
import TextVideoStrip from "../../components/ProjectComponents/InformationStrip/TextVideoStrip";
import Title from "../../components/ProjectComponents/Title/Title";
import designProjectList from "../../information/DesignProjects";
import GetProjectInfo from "../../scripts/GetProjectInfo";
import HorizonalImageTextCard from "../../components/ProjectComponents/Card/HorizontalImageTextCard";
import TextColumns from "../../components/ProjectComponents/InformationStrip/TextColumns";

const WeerwaterTrack = () => {
	//gets information about project
	var projectInfo = GetProjectInfo(designProjectList, "Weerwater Track");

	return (
		<>
			<ProjectBanner projectList={designProjectList} project={projectInfo.name} />
			<SkillImages skills={["coding", "photoshop", "illustrator"]} />

			<TextImageStrip
				title="Activities around the Weerwater"
				text="In Almere there is a new track around the central lake called ‘Rondje Weerwater’. The manicupality of Almere wants to stimulate activities around it. Therefore, they asked us to create an app that encourages people to sport or explore around the lake."
				image="Weerwater Track/RondjeWeerwater.jpg"
				padding="top-bottom-padding"
				rounded={true}
				reverse={true}
			/>
			<Title title="An app to sport and explore" size="h2" alignment="center" padding="top-padding" />
			<AnimatedCardColumns
				cardInfo={[
					{
						image: "Weerwater Track/Challenge.png",
						objectFit: "contain",
					},
					{
						image: "Weerwater Track/Workout.png",
						objectFit: "cover",
					},
					{
						image: "Weerwater Track/Tour.png",
						objectFit: "cover",
					},
				]}
				imageHeight="400px"
				cardWidth="4"
				padding="bottom-padding"
			/>
			<TextImageStrip
				title="18 Animated workouts"
				text="The app has 18 animated workouts. Each time you pass a bridge, a new set of workouts is presented creating a new experience every time."
				image="Weerwater Track/Workouts.jpg"
				padding="top-bottom-padding"
				maxHeight="400px"
				rounded={true}
				reverse={true}
			/>
			<TextImageStrip
				title="Over 50 tour locations"
				text="More than 50 special locations around the lake are highlighted on the map. At each of these spots, visitors can explore a short story, which can also be narrated aloud for an immersive experience."
				image="Weerwater Track/Tours.jpg"
				padding="bottom-padding"
				maxHeight="400px"
				rounded={true}
			/>
			<TextImageStrip
				title="For IOS and Android"
				text="The app is developed using Dart (Flutter), enabling us to seamlessly create both iOS and Android versions simultaneously."
				image="Weerwater Track/Flutter.jpg"
				padding="top-bottom-padding"
				reverse={true}
			/>
			<FullWidthVideo video="xSj5mr6vJgw" padding="top-bottom-padding" rounded={true} />
		</>
	);
};

export default WeerwaterTrack;
