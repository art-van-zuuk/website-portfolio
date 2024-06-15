import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "../../style.css";

import CardCarousel from "../../components/CardCarousel/CardCarousel";
import CV from "../../components/CV/CV";
import HighlightProject from "../../components/HighlightProject/HighlightProject";
import SiteVideoBanner from "../../components/SiteVideoBanner/SiteVideoBanner";
import videoProjectList from "../../information/VideoProjects";
import projectList from "../../information/projects";

const Manometric = () => {
	return (
		<>
			<SiteVideoBanner
				video="Z3PsFc2NEXI"
				title="Hi Manometric!"
				text="Welcome to my portfolio website! Below, you'll find my CV and four highlighted projects that showcase my skills in human-centred design, engineering, CAD, and prototyping — qualities I believe fit to the work at Manometric. If you're interested in exploring more or viewing some of my video work, feel free to check out the bottom of the page. Enjoy reading!"
			/>
			<CV />
			<HighlightProject projectList={projectList} project="Sculp" />
			<HighlightProject projectList={projectList} project="Lotus" />
			<HighlightProject projectList={projectList} project="MARCH VII" />
			<HighlightProject projectList={projectList} project="Input Device" />

			<CardCarousel projectList={projectList} title={"Design Projects"} />
			<CardCarousel projectList={videoProjectList} title={"Videography"} />
		</>
	);
};

export default Manometric;
