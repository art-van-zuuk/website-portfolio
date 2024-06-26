import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import ImageGallery from "../../components/ProjectComponents/ImageGallery/ImageGallery";
import FullWidthImage from "../../components/ProjectComponents/InformationStrip/FullWidthImage";
import TextImageStrip from "../../components/ProjectComponents/InformationStrip/TextImageStrip";
import ProjectBanner from "../../components/ProjectComponents/ProjectBanner/ProjectBanner";
import SkillImages from "../../components/ProjectComponents/SkillImages/SkillImages";

import CardColumns from "../../components/ProjectComponents/Card/CardColumns";
import FullWidthVideo from "../../components/ProjectComponents/FullWidthVideo/FullWidthVideo";
import { photos } from "../../components/ProjectComponents/ImageGallery/IGLaSelce";
import TextColumns from "../../components/ProjectComponents/InformationStrip/TextColumns";
import Title from "../../components/ProjectComponents/Title/Title";
import projectList from "../../information/projects";
import GetProjectInfo from "../../scripts/GetProjectInfo";

const LaSelce = () => {
	//gets information about project
	var projectInfo = GetProjectInfo(projectList, "La Selce");

	return (
		<>
			<ProjectBanner projectList={projectList} project={projectInfo.name} />
			<SkillImages
				skills={[
					"premierepro",
					"aftereffects",
					"photoshop",
					"indesign",
					"solidworks",
					"arduino",
					"3dprinting",
					"building",
				]}
			/>
			<TextImageStrip
				title="Appassionato as starting point"
				text="Boretti wants to create the kitchen of the future by implementing induction stoves into the kitchen counter, giving the user a lot of freedom. Herefore, Jeroen van Rijnberk created a wireless knob called Appassionato, which controls these stoves. We were asked to improve and work out this concept."
				image="La Selce/Appassionato.png"
				padding="top-bottom-padding"
				rounded="true"
				reverse={true}
			/>
			<TextImageStrip
				title="Passion for cooking "
				text="Boretti is a company that takes passion to the modern kitchen by embracing the Italian lifestyle. This is what we tried to accomplish with ‘La Selce’ the successor of Appassionato. We did this by creating an organic look, satisfying interaction and authentic elements."
				image="La Selce/ImageGallery/TopView.jpg"
				padding="top-bottom-padding"
				rounded="true"
			/>
			<Title title="La Selce" size="h2" alignment="start" padding="top-padding" />
			<Title title="Freedom in the kitchen for the passionate cook" size="h4" alignment="start" padding="" />
			<FullWidthImage project={projectInfo.name} image="Scenario.png" padding="bottom-padding" />
			<Title title="Physical and cognitive ergonomics" size="h2" alignment="center" padding="top-padding" />
			<Title
				title="Performing rigorous user testing for the optimal experience"
				size="h4"
				alignment="center"
				padding=""
			/>
			<CardColumns
				cardInfo={[
					{
						title: "Right size for everyone",
						text: "The rotating knob and touchscreen buttons should be usable for people with a great range in hand sizes. To ensure the optimal fit for most, physical tests with the target group were done.",
						image: "La Selce/ImageGallery/Rotating knob.jpg",
						objectFit: "cover",
					},
					{
						title: "Intuitive interface",
						text: "The layout on the touchscreen mirrors the layout of the stoves, making the selection as easy as possible. The interface is simple and shows only the essential information.",
						image: "La Selce/Interface.jpg",
						objectFit: "cover",
					},
					{
						title: "Light, clicks and vibrations",
						text: "La Selce uses multimodal feedback to create an understandable interaction, even while paying attention to your food. The ring clicks while rotating, the bottom lights up as an indicator of the temperature and a vibration motor gives feedback while using the touchscreen.",
						image: "La Selce/Multimodal Feedback.png",
						objectFit: "cover",
					},
				]}
				imageHeight="200px"
				cardWidth="4"
				padding="bottom-padding"
			/>
			<TextImageStrip
				title="Creating the perfect ring"
				text="The rotating ring is designed to be satisfying and intuitive. Tight tolerances together with an array of magnets create the perfect resistance. After many iterations, we set on a design created from black anodized aluminium."
				image="La Selce/Proto-overview.png"
				padding="top-bottom-padding"
				rounded="true"
				reverse={true}
			/>
			<TextImageStrip
				title="Simulating a stove with a custom PCB"
				text="With La Selce, we wanted to refer to the feeling of cooking on an authentic gas stove. To accomplish this, I designed a custom PCB with LED ring. It shines through a diffused layer of polycarbonate giving an even glow on the countertop. The colour temperature and light intensity could be adjusted to indicate the state of the selected stove."
				image="La Selce/LEDPCB.jpg"
				padding="top-bottom-padding"
				rounded="true"
			/>
			<Title title="Durability testing" size="h2" alignment="center" padding="top-padding" />
			<Title
				title="Extensive testing to find the best parts, materials and sensors for a durable product"
				size="h4"
				alignment="center"
				padding=""
			/>
			<CardColumns
				cardInfo={[
					{
						title: "Temperature resistance",
						text: "Temperature-resistant materials (silicone, PC & aluminium) protect the device against heat. A sensor inside the device helps warn the user when temperatures get too high.",
						image: "La Selce/Temperature.jpg",
						objectFit: "cover",
					},
					{
						title: "Fall resistance",
						text: "Droptests and simulations were performed to find the optimal shape and material to withstand a fall.",
						image: "La Selce/Fall.png",
						objectFit: "cover",
					},
					{
						title: "Watertightness",
						text: "Gaskets and watertight adhesion make sure that the device withstands dropping into water.",
						image: "La Selce/Watertightness.png",
						objectFit: "cover",
					},
				]}
				imageHeight="200px"
				cardWidth="4"
				padding="bottom-padding"
			/>
			<TextImageStrip
				title="Made for repairability"
				text="La Selce is built in a stackable way making it easy to (dis)assemble. The use of screws and electronic connectors means that minimal adhesion is used."
				image="La Selce/Repairability.jpg"
				padding="top-bottom-padding"
				rounded="true"
				reverse={true}
			/>
			<TextImageStrip
				title="Designed for manufacturing"
				text="Through extensive contact between manufacturers and experts, we designed parts that are not only cheap and easy to manufacture, but also look and feel premium."
				image="La Selce/Manufacturing.jpg"
				padding="top-padding"
			/>
			<TextColumns
				texts={["", "Drawings by: Lars Timmerman"]}
				columnWidth="6"
				size="p"
				alignment="center"
				padding="bottom-padding"
				marginHeight=""
			/>
			<FullWidthImage project={projectInfo.name} image="Exploded.png" padding="top-bottom-padding" />
			<ImageGallery project={projectInfo.name} photos={photos} padding="top-padding" />

			<FullWidthVideo video="KijK4G9ukiw" padding="bottom-padding" />
		</>
	);
};

export default LaSelce;
