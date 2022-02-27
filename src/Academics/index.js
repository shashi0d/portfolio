import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SubHeader from "../SubHeader";
import AcademicListing from "./AcademicListing";
import "./index.css";

function Academics() {
	let academics = [
		{
			name: "Kammavari Sangh Group & Institutions",
			address: "BANGALORE SOUTHKammavari Sangh Group & Institutions, BANGALORE SOUTH",
			course: "Bachelor of Engineering - BE, Computer ScienceBachelor of Engineering - BE",
			grade: 7.32,
			year: "2017 - 2020",
			label: "B.E. (CSE)",
			max: 10,
		},
		{
			name: "S.G.P.T.A PU College",
			course: "PU",
			grade: 83.83,
			year: "2014 - 2016",
			label: "PU",
			max: 100,
		},
		{
			name: "Swami Vivekananda High School",
			course: "SSLC",
			grade: 83.84,
			year: "2014 - 2016",
			label: "SSLC",
			max: 100,
		},
	];
	return (
		<Container id="education" className="academics-container">
			<SubHeader title="Academics" />
			<Row>
				{academics.map((item) => {
					return <AcademicListing name={item.name} course={item.course} grade={item.grade} year={item.year} label={item.label} max={item.max} />;
				})}
			</Row>
		</Container>
	);
}

export default Academics;
