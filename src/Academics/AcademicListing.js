import React from "react";
import { Col, Row } from "react-bootstrap";

function AcademicListing({ name, course, grade, year, address }) {
	return (
		<Row>
			<Col>
				<h1>{name}</h1>
				<h2>{course}</h2>
				<h1>{grade}</h1>
				<h2>{year}</h2>
			</Col>
		</Row>
	);
}

export default AcademicListing;
