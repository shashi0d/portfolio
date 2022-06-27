import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import About from "../About";
import Academics from "../Academics";
import Certifications from "../Certifications";
import Experience from "../Experience";
import ExtraCurriculars from "../Languages";
import Footer from "../Footer";
import Header from "../Header";
import Profile from "../Profile";
import Skills from "../Skills";
import "./index.css";
import Languages from "../Languages";
import ColorPicker from "../ColorPicker";
import SocialLinkCube from "../SocialLinksCube";

const Homepage = () => {
	useEffect(() => {
		setInterval(function () {
			let theme = document.documentElement.style.setProperty("--root-bg", "rgb(112, 112, 112)");
			if (theme === "black") {
				document.documentElement.style.setProperty("--root-bg", "rgb(112, 112, 112)");
				document.documentElement.style.setProperty("--site-font-color", "white");
				document.documentElement.style.setProperty("--card-bg", "black");
			} else {
				document.documentElement.style.setProperty("--root-bg", "#f3f2ef");
				document.documentElement.style.setProperty("--site-font-color", "black");
				document.documentElement.style.setProperty("--card-bg", "white");
			}
		}, 60 * 1000);
	}, []);
	return (
		<>
			<Header />
			<Container>
				<Profile />
				{/* <About /> */}
				<Academics />
				<Experience />
				<Certifications />
				<Skills />
				<SocialLinkCube />
				{/* <Languages /> */}
				{/* <ColorPicker /> */}
			</Container>
			{/* <Footer /> */}
		</>
	);
};

export default Homepage;
