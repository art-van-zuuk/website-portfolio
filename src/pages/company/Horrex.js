import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "../../style.css";

import CardCarousel from "../../components/CardCarousel/CardCarousel";
import CV from "../../components/CV/CV";
import HighlightProject from "../../components/HighlightProject/HighlightProject";
import SiteVideoBanner from "../../components/SiteVideoBanner/SiteVideoBanner";
import videoList from "../../information/VideoProjects";
import projectList from "../../information/projects";

const Horrex = () => {
	return (
		<>
			<SiteVideoBanner
				video="Z3PsFc2NEXI"
				title="Hi Horrex!"
				text="Welkom op mijn portfolio website! Hier beneden vind je mijn CV en een aantal projecten die ik graag aan jullie laat zien. Ik hoop hiermee mijn skills in techniek, CAD, prototypen en meer te kunnen laten zien. Als u interesse heeft om meer projecten te zien, of wat van mijn videografie werk, scroll naar beneden. Veel leesplezier!"
			/>
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

export default Horrex;
