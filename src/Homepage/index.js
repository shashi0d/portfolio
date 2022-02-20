import React from "react";
import { Container } from "react-bootstrap";
import About from "../About";
import Header from "../Header";
import Profile from "../Profile";
import "./index.css";

const Homepage = () => {
	return (
		<Container>
			<Header />
			<Profile />
			<About />
		</Container>
	);
};

export default Homepage;
