import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import FullWidthVideo from "../../components/ProjectComponents/FullWidthVideo/FullWidthVideo";
import ProjectBanner from "../../components/ProjectComponents/ProjectBanner/ProjectBanner";
import SkillImages from "../../components/ProjectComponents/SkillImages/SkillImages";
import AnimatedCardColumns from "../../components/ProjectComponents/Card/AnimatedCardColumns";
import TextImageStrip from "../../components/ProjectComponents/InformationStrip/TextImageStrip";
import Title from "../../components/ProjectComponents/Title/Title";
import projectList from "../../information/projects";
import GetProjectInfo from "../../scripts/GetProjectInfo";

const WeerwaterTrackApp = () => {
	//gets information about project
	var projectInfo = GetProjectInfo(projectList, "Weerwater Track App");

	return (
		<>
			<ProjectBanner projectList={projectList} project={projectInfo.name} />
			<SkillImages skills={["coding", "photoshop", "illustrator"]} />

			<TextImageStrip
				title="Activities around the Weerwater"
				text="In Almere there is a new track around the central lake called ‘Rondje Weerwater’. The manicupality of Almere wants to stimulate activities around it. Therefore, they asked us to create an app that encourages people to sport or explore around the lake."
				image="Weerwater Track App/RondjeWeerwater.jpg"
				padding="top-bottom-padding"
				rounded={true}
				reverse={true}
			/>
			<Title title="An app to sport and explore" size="h2" alignment="center" padding="top-padding" />
			<AnimatedCardColumns
				cardInfo={[
					{
						image: "Weerwater Track App/Challenge.png",
						objectFit: "contain",
					},
					{
						image: "Weerwater Track App/Workout.png",
						objectFit: "cover",
					},
					{
						image: "Weerwater Track App/Tour.png",
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
				image="Weerwater Track App/Workouts.jpg"
				padding="top-bottom-padding"
				maxHeight="400px"
				rounded={true}
				reverse={true}
			/>
			<TextImageStrip
				title="Over 50 tour locations"
				text="More than 50 special locations around the lake are highlighted on the map. At each of these spots, visitors can explore a short story, which can also be narrated aloud for an immersive experience."
				image="Weerwater Track App/Tours.jpg"
				padding="bottom-padding"
				maxHeight="400px"
				rounded={true}
			/>
			<TextImageStrip
				title="For IOS and Android"
				text="The app is developed using Dart (Flutter), enabling us to seamlessly create both iOS and Android versions simultaneously."
				image="Weerwater Track App/Flutter.jpg"
				padding="top-bottom-padding"
				reverse={true}
			/>
			<FullWidthVideo video="xSj5mr6vJgw" padding="top-bottom-padding" rounded={true} />
		</>
	);
};

export default WeerwaterTrackApp;
