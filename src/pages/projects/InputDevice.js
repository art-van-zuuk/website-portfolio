import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import CardColumns from "../../components/ProjectComponents/Card/CardColumns";
import HorizonalImageTextCard from "../../components/ProjectComponents/Card/HorizontalImageTextCard";
import FullWidthImage from "../../components/ProjectComponents/InformationStrip/FullWidthImage";
import TextImageStrip from "../../components/ProjectComponents/InformationStrip/TextImageStrip";
import ProjectBanner from "../../components/ProjectComponents/ProjectBanner/ProjectBanner";
import SkillImages from "../../components/ProjectComponents/SkillImages/SkillImages";
import Title from "../../components/ProjectComponents/Title/Title";
import projectList from "../../information/projects";
import GetProjectInfo from "../../scripts/GetProjectInfo";

const InputDevice = () => {
	//gets information about project
	var projectInfo = GetProjectInfo(projectList, "Input Device");

	return (
		<>
			<ProjectBanner projectList={projectList} project={projectInfo.name} />
			<SkillImages skills={["solidworks", "blender", "3dprinting", "arduino"]} />
			<HorizonalImageTextCard
				title="What is Project MARCH?"
				text="Project MARCH is a non-profit DreamTeam, that aims to make someone with a spinal cord injury walk again by building an exoskeleton. The group consists of 26 students with different disciplines and backgrounds who worked full-time on this project for over a year. We were the seventh team."
				image="MARCH VII/TeamPhoto.jpg"
				padding="bottom-padding"
			/>
			<TextImageStrip
				title="Previous design"
				text="The design of the input device stayed the same for many years. As a new team, we soon realized that it was outdated and too difficult to use for both the user as well as the team."
				image="Input Device/OldDesign.jpg"
				rounded={true}
				padding="top-bottom-padding"
				reverse={true}
			/>
			<Title title="How we improved" size="h2" alignment="center" padding="top-padding" />
			<CardColumns
				cardInfo={[
					{
						title: "Integrated smartphone",
						text: "We decided to use a smartphone since it has a great screen, stable wireless connectivity, integrated actuators such as a vibration motor and speakers and allows for easy to program interfaces.",
						image: "Input Device/Smartphone.jpg",
						objectFit: "contain",
					},
					{
						title: "Ergonomic input",
						text: "By testing, we found that the index finger is the most free-moving finger, while putting pressure on the crutches. To move through and select the options on the screen, the new input device uses a custom clickable scroll wheel placed at the index finger.",
						image: "Input Device/Ergonomics.jpg",
						objectFit: "contain",
					},
					{
						title: "Keeping it simple",
						text: "The base of the new design is built from a single piece. Since it is made from flexible TPU, it directly functions as a phone case. All electronics are connected to a framework, which can be screwed onto the base. Taking it apart now only takes minutes instead of hours.",
						image: "Input Device/Simple.jpg",
						objectFit: "contain",
					},
				]}
				imageHeight="200px"
				cardWidth="4"
				padding="bottom-padding"
			/>
			<TextImageStrip
				title="Simple electronics, easy to repair"
				text="A rotary encoder and push-button are connected to an Arduino. Via a USB-cable the Arduino is connected to the smartphone using a keyboard protocol. This simple arrangement, together with the fact that only mechanical fastening methods are used, makes it very easy to repair."
				image="Input Device/RepairableIPD.jpg"
				imageWidth={7}
				maxHeight="400px"
				rounded={true}
				padding="top-bottom-padding"
			/>
			<TextImageStrip
				title="Interface, only the essentials"
				text="Together with one of the Software Engineers from MARCH, we designed a more intuitive interface. It showed more information while being less cluttered with unnecessary details. The left-hand side shows only the possible movements the user can do, and the right-hand side shows its status."
				image="Input Device/Interface.jpg"
				imageWidth={7}
				maxHeight="400px"
				rounded={true}
				padding="top-bottom-padding"
			/>
			<Title title="Prototyping" size="h2" alignment="center" padding="top-padding" />
			<CardColumns
				cardInfo={[
					{
						title: "Proof of concept",
						text: "The first prototype was a simple 3D-printed model in which a phone could be clamped. Using Protopie, an app prototyping program, I made a simple interface, which was controllable via a scroll wheel from a mouse.",
						image: "Input Device/Prototype1.jpg",
						objectFit: "cover",
					},
					{
						title: "Minimal Viable Product",
						text: "After multiple iterations, a design was made that would closely resemble the shape of the final model. Therefore, ergonomics could be tested. Experiments with TPU were done and the electronics were almost finalized.",
						image: "Input Device/Prototype2.jpg",
						objectFit: "cover",
					},
					{
						title: "Final prototype",
						text: "A few iterations later, we ordered the first SLS-printed model, which could be used during training. Based on this model, the final improvements were made.",
						image: "Input Device/Prototype3.jpg",
						objectFit: "cover",
					},
				]}
				imageHeight="200px"
				cardWidth="4"
				padding="bottom-padding"
			/>
			<TextImageStrip
				title="User testing"
				text="All of these prototypes were tested and improved with the end user. Based on this, changes were made in terms of safety and cognitive & physical ergonomics."
				image="Input Device/ErgonomicsKoen.jpg"
				rounded={true}
				padding="top-bottom-padding"
				reverse={true}
			/>
			<TextImageStrip
				title="Flexible SLS-printing"
				text="This was the first black flexible model the SLS-printing company made. An experiment that turned out to work well. A lot of their expertise and consultancy were used to finalize the model."
				image="Input Device/Powder.jpg"
				rounded={true}
				padding="top-bottom-padding"
			/>

			<FullWidthImage project={projectInfo.name} image="IPDInNature.jpg" padding="top-padding" />
			<Title title="Image by: Dreux" size="p" alignment="start" padding="" />
		</>
	);
};

export default InputDevice;
