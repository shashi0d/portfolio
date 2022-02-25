import React from "react";
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

const Homepage = () => {
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
				<Languages />
				<ColorPicker />
			</Container>
			<Footer />
		</>
	);
};

export default Homepage;
