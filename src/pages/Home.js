import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "../style.css";

import CardCarousel from "../components/CardCarousel/CardCarousel";
import CV from "../components/CV/CV";
import HighlightProject from "../components/HighlightProject/HighlightProject";
import SiteVideoBanner from "../components/SiteVideoBanner/SiteVideoBanner";
import designProjectList from "../information/DesignProjects";
import videoProjectList from "../information/VideoProjects";
import graphicProjectList from "../information/GraphicProjects";

const Home = () => {
	return (
		<>
			<SiteVideoBanner video="Z3PsFc2NEXI" />
			<CV />
			<HighlightProject projectList={designProjectList} project="Sculp" />
			<HighlightProject projectList={designProjectList} project="Lotus" />
			<HighlightProject projectList={designProjectList} project="MARCH VII" />
			<HighlightProject projectList={designProjectList} project="Input Device" />

			<CardCarousel projectList={designProjectList} title={"Design Projects"} />
			{/* <CardCarousel
        projectList={graphicProjectList}
        title={"Graphic Projects"}
      /> */}
			<CardCarousel projectList={videoProjectList} title={"Videography"} />
		</>
	);
};

export default Home;
