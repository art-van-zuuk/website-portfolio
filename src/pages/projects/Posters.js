import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import ImageGallery from "../../components/ProjectComponents/ImageGallery/ImageGallery";

import { photos } from "../../components/ProjectComponents/ImageGallery/IGPosters";
import Title from "../../components/ProjectComponents/Title/Title";

import projectList from "../../information/projects";
import GetProjectInfo from "../../scripts/GetProjectInfo";

const Posters = () => {
	//gets information about project
	var projectInfo = GetProjectInfo(projectList, "Posters");
	console.log("projectInfo");

	return (
		<>
			<Title title={projectInfo.name} size="h1" alignment="start" padding="top-padding" />
			<ImageGallery project={projectInfo.name} photos={photos} padding="bottom-padding" />
		</>
	);
};

export default Posters;
