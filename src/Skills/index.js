import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SkillListing from "./SkillListing";
import "./index.css";
import SubHeader from "../SubHeader";
function Skills() {
	let skills = [
		{
			name: "MERN Stack",
		},
		{
			name: "Blockchain",
		},
		{
			name: "Ethereum",
		},
		{
			name: "Python (Programming Language)",
		},
		{
			name: "Smart Contracts",
		},
		{
			name: "PHP",
		},
		{
			name: "Firebase RTDB",
		},
		{
			name: "React Hooks",
		},
		{
			name: "React redux",
		},
		{
			name: "React Babylon",
		},
		{
			name: "Bootstrap 5",
		},
	];
	return (
		<Container id="skills" className="skills-container">
			<SubHeader title="Skills" />
			<Row>
				{skills.map((item) => {
					return <SkillListing skill={item.name} />;
				})}
			</Row>
		</Container>
	);
}

export default Skills;
