import React from "react";
import { Container, Row } from "react-bootstrap";
import SubHeader from "../SubHeader";
import ExperienceListing from "./ExperienceListing";
import "./index.css";
function Experience() {
	let experience = [
		{
			name: "Zero Distance",
			role: "Lead and Developer",
			type: "Full-time",
			duration: "Feb 2021 - Present",
			experience: "1 yr 1 mo",
			address: "Bangalore Urban, Karnataka,",
			tasks: "Currently working on React, Firebase, Unity,Currently working on React, Firebase, Unity",
		},
		{
			name: "Selvitate Technologies Pvt Ltd",
			role: "Web Software Developer",
			type: "Internship",
			duration: "Jun 2019 - Aug 2019 ",
			experience: "3 mos",
			address: "Karnataka, India,Bengaluru",
			tasks: "Tasks involved Php Full stack development of the Main website and also multiple web applications required for the company were developed",
		},
	];
	return (
		<Container id="experience" className="experience-container">
			<SubHeader title="Experience" />
			<Row>
				{experience.map((item) => {
					return <ExperienceListing name={item.name} role={item.role} type={item.type} duration={item.duration} experience={item.experience} address={item.address} tasks={item.tasks} />;
				})}
			</Row>
		</Container>
	);
}

export default Experience;
