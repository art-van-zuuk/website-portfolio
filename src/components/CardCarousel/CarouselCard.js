import { motion } from "framer-motion";
import React, { useState } from "react";
import HandleURL from "../../scripts/HandleURL";
import "../../style.css";
import "./CarouselCard.css";

///Card inside the carousel. Requires: name of project
function CarouselCard(props) {
	//changes name of project to URL format
	var URLLink = props.project.name.replace(/\s/g, "-");
	URLLink = URLLink.toLowerCase();

	//Checks if carousel is dragged or card is pressed
	const mouseDownCoords = (e) => {
		window.checkForDrag = e.clientX;
	};
	const clickOrDrag = (e) => {
		const mouseUp = e.clientX;
		if (mouseUp < window.checkForDrag + 5 && mouseUp > window.checkForDrag - 5) {
			HandleURL(
				props.project.url != null ? props.project.url : URLLink,
				props.project.url != null ? "_blank" : "_self",
				!props.project.video
			);
		}
	};

	var backgroundColor2 = props.project.backgroundColor;
	if (props.project.backgroundColor2 != null) {
		backgroundColor2 = props.project.backgroundColor2;
	}

	// Change transparency of image on hover
	const [hover, setHover] = useState(false);

	const onMouseEnter = () => {
		setHover(true);
	};

	const onMouseLeave = () => {
		setHover(false);
	};

	return (
		<>
			<div className="App">
				{/* Animates while hover */}
				<motion.div
					className="text-start smallCard"
					whileHover={{ scale: 1.03 }}
					whileTap={{ scale: 0.97 }}
					onMouseDown={(e) => mouseDownCoords(e)}
					onMouseUp={(e) => clickOrDrag(e)}
					onMouseEnter={onMouseEnter}
					onMouseLeave={onMouseLeave}
				>
					<div
						className="imgDiv"
						style={{
							background:
								"linear-gradient(" + props.project.backgroundColor + ", " + backgroundColor2 + ")",
						}}
					>
						{props.project.video ? (
							// If video show different thumbnail
							<>
								<img
									alt=""
									draggable="false"
									className="image"
									style={{
										opacity: hover ? "1" : "0.5",
										transition: "all 0.3s ease",
									}}
									src={"/images/Projects/Videos/" + props.project.name + ".png"}
								/>

								<img
									style={{
										position: "absolute",
										opacity: hover ? "0" : "0.8",
										transition: "all 0.3s ease",
									}}
									className="image"
									alt=""
									draggable="false"
									src={"/images/website/PlayButton.png"}
								/>
							</>
						) : (
							<img
								alt=""
								draggable="false"
								className="image"
								src={"/images/Projects/" + props.project.name + "/thumbnail.png"}
							/>
						)}
					</div>

					<div className="text">
						<h5 className="text-center"> {props.project.name} </h5>
						<p className="text-center">
							{props.project.type}
							{props.project.year != "" ? " in " + props.project.year : ""}{" "}
						</p>
					</div>
				</motion.div>
			</div>
		</>
	);
}

export default CarouselCard;
