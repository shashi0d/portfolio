import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import profile from "../Assets/Images/profile.jpg";
import "./index.css";

function Profile() {
	return (
		<Container className="profile-parent">
			<Row>
				<Col className="profile-bg">
					<Row className="profile-container">
						<Col sm={"auto"}>
							<Image src={profile} />
						</Col>
						<Col>
							<h1>I'm a Software Developer</h1>
							{/* <h1>I specialize in Frontend Web Development</h1>
							<h1>My current Practices focus on React,Redux,Html,CSS,Firebase,Vanilla js and strawberry icecreams</h1>
							<h1>Im a very good at Googling (all these animations are googled...:-)</h1>
							<h1>I'd like to learn about other interesting frameworks other than react, also do skydiving</h1>
							<h1>I play carrom , call me for a match if you'd like</h1>
							<h1>I can communicate in 4 different languages </h1> */}
						</Col>
					</Row>
					<Row className="profile-container1">
						<h1>Shashidhara N</h1>
						<h2>React|Redux|Bootstrap 5|Firebase</h2>
						<h2>Bengaluru,Karnataka,India</h2>
						<h2>Currently working at Zero Distance Solutions</h2>
					</Row>
				</Col>
			</Row>
		</Container>
	);
}

export default Profile;
