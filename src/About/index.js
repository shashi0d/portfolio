import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./index.css";
function About() {
	return (
		<Container id="about" className="about-us-parent">
			<Row>
				<Col>
					<h1>I'm a Software Developer</h1>
					<h1>I specialize in Frontend Web Development</h1>
					<h1>My current Practices focus on React,Redux,Html,CSS,Firebase,Vanilla js and strawberry icecreams</h1>
					<h1>Im a very good at Googling (all these animations are googled...:-)</h1>
					<h1>I'd like to learn about other interesting frameworks other than react, also do skydiving</h1>
					<h1>I play carrom , call me for a match if you'd like</h1>
					<h1>I can communicate in 4 different languages </h1>
				</Col>
			</Row>
		</Container>
	);
}

export default About;
