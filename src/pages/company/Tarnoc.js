import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "../../style.css";

import CardCarousel from "../../components/CardCarousel/CardCarousel";
import CV from "../../components/CV/CV";
import HighlightProject from "../../components/HighlightProject/HighlightProject";
import SiteVideoBanner from "../../components/SiteVideoBanner/SiteVideoBanner";
import videoList from "../../information/VideoProjects";
import projectList from "../../information/projects";

const Tarnoc = () => {
	return (
		<>
			<SiteVideoBanner
				video="Z3PsFc2NEXI"
				title="Hi Tarnoc!"
				text="Welcome to my portfolio website! Below, you'll find my CV and five highlighted projects that showcase my skills in design, including engineering, CAD, and prototyping and more — qualities I believe fit to the work at Tarnoc. If you're interested in exploring more projects or to see some of my video work, feel free to check out the bottom of the page. Enjoy reading!"
			/>
			<CV />
			<HighlightProject projectList={projectList} project="Sculp" />
			<HighlightProject projectList={projectList} project="Lotus" />
			<HighlightProject projectList={projectList} project="MARCH VII" />
			<HighlightProject projectList={projectList} project="Input Device" />
			<HighlightProject projectList={projectList} project="La Selce" />

			<CardCarousel projectList={projectList} title={"Design Projects"} />
			<CardCarousel projectList={videoList} title={"Videography"} />
		</>
	);
};

export default Tarnoc;
