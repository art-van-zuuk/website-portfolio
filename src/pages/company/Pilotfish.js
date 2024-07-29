import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "../../style.css";

import CardCarousel from "../../components/CardCarousel/CardCarousel";
import CV from "../../components/CV/CV";
import HighlightProject from "../../components/HighlightProject/HighlightProject";
import SiteVideoBanner from "../../components/SiteVideoBanner/SiteVideoBanner";
import videoList from "../../information/VideoProjects";
import projectList from "../../information/projects";

const Pilotfish = () => {
	return (
		<>
			<SiteVideoBanner
				video="Z3PsFc2NEXI"
				title="Hi Pilotfish!"
				text="Welcome to my portfolio website! Below, you'll find my CV and four highlighted projects that showcase my skills in design, including UX/UI, human centered design, engineering, CAD, prototyping and more. If you're interested to see more projects or some of my video work, feel free to check out the bottom of the page. Enjoy reading!"
			/>
			<CV />
			<HighlightProject projectList={projectList} project="Sculp" />
			<HighlightProject projectList={projectList} project="Weerwater Track App" />
			<HighlightProject projectList={projectList} project="MARCH VII" />
			<HighlightProject projectList={projectList} project="Input Device" />

			<CardCarousel projectList={projectList} title={"Design Projects"} />
			<CardCarousel projectList={videoList} title={"Videography"} />
		</>
	);
};

export default Pilotfish;
