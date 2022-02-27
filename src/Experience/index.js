import React from "react";
import { Container } from "react-bootstrap";
import ExperienceListing from "./ExperienceListing";
import "./index.css";
function Experience() {
	let experience = [
		{
			name: "Zero Distance",
			role: "Software Developer",
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
			{experience.map((item) => {
				return <ExperienceListing name={item.name} role={item.role} type={item.type} duration={item.duratoin} experience={item.experience} address={item.address} tasks={item.tasks} />;
			})}
		</Container>
	);
}

export default Experience;
