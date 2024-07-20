import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import FullWidthImage from "../../components/ProjectComponents/InformationStrip/FullWidthImage";
import ProjectBanner from "../../components/ProjectComponents/ProjectBanner/ProjectBanner";
import SkillImages from "../../components/ProjectComponents/SkillImages/SkillImages";

import CardColumns from "../../components/ProjectComponents/Card/CardColumns";
import TextImageStrip from "../../components/ProjectComponents/InformationStrip/TextImageStrip";
import TextVideoStrip from "../../components/ProjectComponents/InformationStrip/TextVideoStrip";
import Title from "../../components/ProjectComponents/Title/Title";
import projectList from "../../information/projects";
import GetProjectInfo from "../../scripts/GetProjectInfo";
import HorizonalImageTextCard from "../../components/ProjectComponents/Card/HorizontalImageTextCard";
import SectionLine from "../../components/ProjectComponents/SectionLine/SectionLine";

const Sculp = () => {
	//gets information about project
	var projectInfo = GetProjectInfo(projectList, "Sculp");

	return (
		<>
			<ProjectBanner projectList={projectList} project={projectInfo.name} textColor="white" />
			<SkillImages
				skills={["userresearch", "indesign", "solidworks", "blender", "grasshopper", "3dprinting", "building"]}
			/>
			<HorizonalImageTextCard
				title="Inspired by other adjustable bicycle saddles"
				text="This graduation project drew inspiration from research on bicycle saddles with adjustable geometry (Sequenzia, 2015), as well as from commercial saddles that offer added adjustability. Given the highly personal nature of saddle fit and the common occurrence of saddle sores among cyclists, incorporating this extra adjustability has the potential to greatly improve the cycling experience."
				image="Sculp/InspiringSaddles.png"
				padding="top-bottom-padding"
			/>
			<SectionLine title="Problem definition" padding="top-padding" />
			<TextVideoStrip
				title="Saddle sores by wrong pressure distribution"
				text="During prolonged cycling sessions, over half of cyclists commonly experience discomfort around the sit bones or perineum. This discomfort typically arises from an improper pressure distribution across the saddle, which is often caused by a wrong saddle for the particular pelvic tilt."
				video="https://youtu.be/tAeDJIkhcYE"
				padding="top-bottom-padding"
			/>
			<TextImageStrip
				title="Different people, different needs"
				text="Everyone has a different anatomy, driving style, and preferences on how a saddle should feel. Therefore, a one-size-fits-all approach may not be appropriate for something as intricate as a bicycle saddle."
				image="Sculp/RidingStyle.png"
				padding="bottom-padding"
				reverse={true}
			/>

			<SectionLine title="Understanding the user" padding="top-padding" />
			<TextImageStrip
				title="Interviewing experts"
				text="To gain a deeper understanding of the user and the process of designing a high-quality bicycle saddle, many interviews have been conducted with individuals within the cycling world, like bicycle saddle designers, bike fitters, professional cyclists, and recreational cyclists."
				image="Sculp/ExpertMeeting.jpg"
				padding="top-bottom-padding"
				rounded={true}
			/>
			<TextImageStrip
				title="User testing with adjustable saddles"
				text="Three bicycle saddles were modified to give them a variable geometry. These saddle were then subjected to testing during an indoor cycling test involving 10 participants. The aim was to validate whether individuals could recognize differences in shapes and to determine which shape modification had the greatest impact on comfort. "
				image="Sculp/UserTest.png"
				padding="top-padding"
				imageWidth="6"
				rounded={true}
				reverse={true}
			/>
			<CardColumns
				cardInfo={[
					{
						title: "Variable curvature saddle",
						image: "Sculp/UserTestCurvature.jpg",
						objectFit: "contain",
					},
					{
						title: "Variable profile saddle",
						image: "Sculp/UserTestProfile.jpg",
						objectFit: "contain",
					},
					{
						title: "Variable width saddle",
						image: "Sculp/UserTestWidth.jpg",
						objectFit: "contain",
					},
				]}
				imageHeight="300px"
				cardWidth="4"
				padding="top-padding"
				reverse="false"
			/>

			<SectionLine title="Solution" padding="top-padding" />
			<Title title="A saddle with a variable profile" size="h2" alignment="center" padding="top-padding" />
			<Title
				title="The tests, interviews, and other research conducted concluded that a bicycle saddle with a variable profile significantly improves comfort for cyclists, due to cyclists being able to customize the saddle to suit their anatomy, riding style, and personal preferences. As a result, they can achieve a more ideal pressure distribution on the saddle, thereby reducing the occurrence of saddle sores."
				size="p"
				alignment="center"
				padding=""
			/>
			<FullWidthImage project={projectInfo.name} image="Sideview.jpg" padding="bottom-padding" rounded="true" />
			<FullWidthImage
				project={projectInfo.name}
				image="ExplodedView.jpg"
				padding="bottom-padding"
				rounded="true"
			/>
			<TextImageStrip
				title="Educating the user"
				text="To maximize the effectiveness of the product, it's essential to ensure a proper bicycle and saddle fit. Therefore, a Fit Kit has been created. This kit includes a guide and tools that streamline the fitting process, making it easy for users to achieve an optimal fit at home based on established literature."
				image="Sculp/Educating.jpg"
				padding="top-bottom-padding"
				imageWidth="7"
				rounded={true}
			/>

			<SectionLine title="Prototyping" padding="top-padding" />
			<Title title="Physical design iterations" size="h2" alignment="center" padding="top-padding" />
			<Title
				title="Throughout the process, numerous prototypes were developed for the shell, padding, and rails design."
				size="p"
				alignment="center"
				padding=""
			/>
			<CardColumns
				cardInfo={[
					{
						title: "3D-folding saddle",
						text: "Many different design iterations were done for a compliant saddle with an origami-like folding structure.",
						image: "Sculp/3DFold.jpg",
						objectFit: "contain",
					},
					{
						title: "2D-folding saddle",
						text: "Since the 3D-folding saddle resulted in too little design freedom, a simpler 2D-folding compliant saddle was created.",
						image: "Sculp/2DFold.jpg",
						objectFit: "contain",
					},
					{
						title: "Mechanical saddle",
						text: "In the end, a mechanically hinging saddle was created which resulted in more stiffness and an easier way to constrain the shape.",
						image: "Sculp/Mechanical.jpg",
						objectFit: "contain",
					},
				]}
				imageHeight="200px"
				cardWidth="4"
				padding="bottom-padding"
			/>
			<TextImageStrip
				title="Validation tests"
				text="Many digital and physical tests were performed to validate the theoretical performance of different parts, including compression tests with lattice structures and FEM-analyses."
				image="Sculp/CompressionResults.jpg"
				padding="top-bottom-padding"
				imageWidth="7"
				reverse={true}
			/>
			<Title title="Working prototype" size="h2" alignment="start" padding="top-padding" />
			<Title
				title="An SLS-printed prototype was created to test on cyclists."
				size="h4"
				alignment="start"
				padding=""
			/>
			<FullWidthImage project={projectInfo.name} image="Prototype.jpg" padding="bottom-padding" />

			<SectionLine title="Embodiment" padding="top-padding" />
			<TextImageStrip
				title="Coming soon!"
				text="Currently I am working towards a more optimized design of the saddle that should also be produceable using the intended production methods of the different parts."
				image="Sculp/Embodiment.jpg"
				padding="top-bottom-padding"
			/>
		</>
	);
};

export default Sculp;
