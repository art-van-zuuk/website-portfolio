import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "../../style.css";

import CardCarousel from "../../components/CardCarousel/CardCarousel";
import CV from "../../components/CV/CV";
import HighlightProject from "../../components/HighlightProject/HighlightProject";
import SiteVideoBanner from "../../components/SiteVideoBanner/SiteVideoBanner";
import videoProjectList from "../../information/VideoProjects";
import designProjectList from "../../information/DesignProjects";

const BBB = () => {
	return (
		<>
			<SiteVideoBanner
				video="Z3PsFc2NEXI"
				title="Hallo BBB!"
				text="Welkom op mijn portfolio website! Hier beneden vind je mijn CV en een aantal projecten die ik graag aan jullie laat zien. Vooral Sculp is interessant voor BBB. Ik hoop hiermee mijn skills in mensgericht ontwerpen, techniek, CAD, prototypen en meer te kunnen laten zien. Als je interesse hebt om meer projecten te zien, of wat van mijn videografie werk, scroll naar beneden. Veel leesplezier!"
			/>
			<CV />
			<HighlightProject projectList={designProjectList} project="Sculp" />
			<HighlightProject projectList={designProjectList} project="MARCH VII" />
			<HighlightProject projectList={designProjectList} project="Input Device" />
			<HighlightProject projectList={designProjectList} project="La Selce" />

			<CardCarousel projectList={designProjectList} title={"Design Projects"} />
			<CardCarousel projectList={videoProjectList} title={"Videography"} />
		</>
	);
};

export default BBB;
