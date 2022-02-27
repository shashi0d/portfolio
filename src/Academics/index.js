import React from "react";
import { Col, Container, Row } from "react-bootstrap";
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
		},
		{
			name: "S.G.P.T.A PU College",
			course: "PU",
			grade: 84.83,
			year: "2014 - 2016",
		},
	];
	return (
		<Container id="education" className="academics-container">
			{academics.map((item) => {
				return <AcademicListing name={item.name} course={item.course} grade={item.grade} year={item.year} />;
			})}
		</Container>
	);
}

export default Academics;
