import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import FullWidthImage from "../../components/ProjectComponents/InformationStrip/FullWidthImage";
import TextImageStrip from "../../components/ProjectComponents/InformationStrip/TextImageStrip";
import ProjectBanner from "../../components/ProjectComponents/ProjectBanner/ProjectBanner";
import SkillImages from "../../components/ProjectComponents/SkillImages/SkillImages";

import Title from "../../components/ProjectComponents/Title/Title";
import projectList from "../../information/projects";
import GetProjectInfo from "../../scripts/GetProjectInfo";

const CameraSlider = () => {
	// console.log("list: " + designProjectList);

	//gets information about project
	var projectInfo = GetProjectInfo(projectList, "Camera Slider");

	return (
		<>
			<ProjectBanner projectList={projectList} project={projectInfo.name} />
			<SkillImages skills={["solidworks", "arduino", "lasercutting"]} />
			<Title title="When you can not afford it... make it" size="h2" alignment="center" padding="top-padding" />
			<Title title="A better design in many ways" size="p" alignment="center" padding="bottom-padding" />
			<FullWidthImage project={projectInfo.name} image="TopView.jpg" padding="bottom-padding" />
			<FullWidthImage project={projectInfo.name} image="CloseUp.jpg" padding="bottom-padding" />
			<FullWidthImage project={projectInfo.name} image="3Positions.jpg" padding="bottom-padding" />

			<TextImageStrip
				title="The electric circuit"
				text="With this assigment, Braun aimed to make a change in the increasing problem of food waste. I found that a big part of this waste happens at the consumption and espesially at the conservation of food"
				image="Camera Slider/CircuitDiagram.jpg"
				padding="top-bottom-padding"
				reverse={true}
			/>
		</>
	);
};

export default CameraSlider;
