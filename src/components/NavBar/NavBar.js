import React, { useState } from "react";

import HandleURL from "../../scripts/HandleURL";
import "../../style.css";
import "./NavBar.css";
import projectList from "../../information/projects";
import GetProjectInfo from "../../scripts/GetProjectInfo";

///Navigation bar on the top of the site
const NavBar = () => {
	// Get text color
	var page = window.location.pathname;
	page = page.split("/").join("");
	page = page.split("-").join(" ");

	//gets information about project
	var projectInfo = GetProjectInfo(projectList, page);

	// Change nav color when scrolling
	const [color, setColor] = useState(false);
	const changeColor = () => {
		if (window.scrollY >= 5) {
			setColor(true);
		} else {
			setColor(false);
		}
	};

	window.addEventListener("scroll", changeColor);

	return (
		<nav className={color ? "nav-bg" : null}>
			<img
				className="website-logo"
				style={{ cursor: "pointer" }}
				alt=""
				src={
					projectInfo.textColor != null && !color
						? "images/website/website-logo-white.png"
						: "images/website/website-logo.png"
				}
				onClick={() => HandleURL("/")}
			/>
			<div className="navbar-text">
				<div
					className={"custom-round-button"}
					onClick={() => HandleURL("/")}
					style={{
						cursor: "pointer",
						color: projectInfo.textColor != null && !color ? projectInfo.textColor : "black",
						backgroundColor: color ? "rgba(255, 255, 255, 0)" : "",
					}}
				>
					{" "}
					All projects{" "}
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
