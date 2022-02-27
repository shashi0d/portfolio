import React from "react";
import { Col, ProgressBar, Row } from "react-bootstrap";
import { Chart } from "react-google-charts";

function AcademicListing({ name, course, grade, year, address, label, max }) {
	const data = [
		["Percentage", "Course"],
		[label, grade],
	];
	const options = {
		title: name,
		is3D: true,
		greenFrom: 70,
		greenTo: 100,
		redFrom: 0,
		redTo: 35,
		yellowFrom: 36,
		yellowTo: 69,
	};
	return (
		<Col xs={12} lg={4} className="academic-listing mb-4">
			<Row>
				<Col xs={4}>
					<h1>Institution :</h1>
				</Col>
				<Col>
					<h2>{name}</h2>
				</Col>
			</Row>
			<Row>
				<Col xs={4}>
					<h1>Course :</h1>
				</Col>

				<Col xs={8}>
					<h2>{label}</h2>
				</Col>
			</Row>
			<Row>
				<Col xs={4}>
					<h1>Year :</h1>
				</Col>

				<Col xs={8}>
					<h2>{year}</h2>
				</Col>
			</Row>

			<Row>
				<Col xs={4}>
					<h1>{"Grade :"} </h1>
				</Col>

				<Col xs={8}>
					<h2>
						{grade}
						{max > 10 ? "%" : " GPA"}
					</h2>
				</Col>
			</Row>
			<ProgressBar variant="info" max={max} now={grade} animated></ProgressBar>
		</Col>
	);
}

export default AcademicListing;
