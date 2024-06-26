import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "../style.css";

import CardCarousel from "../components/CardCarousel/CardCarousel";
import CV from "../components/CV/CV";
import HighlightProject from "../components/HighlightProject/HighlightProject";
import SiteVideoBanner from "../components/SiteVideoBanner/SiteVideoBanner";
import projectList from "../information/projects";
import videoList from "../information/VideoProjects";

const Home = () => {
	return (
		<>
			<SiteVideoBanner video="Z3PsFc2NEXI" />
			<CV />
			<HighlightProject projectList={projectList} project="Sculp" />
			<HighlightProject projectList={projectList} project="Lotus" />
			<HighlightProject projectList={projectList} project="MARCH VII" />
			<HighlightProject projectList={projectList} project="Input Device" />

			<CardCarousel projectList={projectList} title={"Design Projects"} />
			<CardCarousel projectList={videoList} title={"Videography"} />
		</>
	);
};

export default Home;
