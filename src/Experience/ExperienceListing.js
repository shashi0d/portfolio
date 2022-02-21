import React from "react";
import { Col, Row } from "react-bootstrap";

function ExperienceListing({ name, role, type, duration, experience, address, tasks }) {
	return (
		<Row>
			<Col>
				<h1>{name}</h1>
				<h2>{role}</h2>
				<h1>{type}</h1>
				<h2>{duration}</h2>
				<h1>{experience}</h1>
				<h2>{address}</h2>
				<h1>{tasks}</h1>
			</Col>
		</Row>
	);
}

export default ExperienceListing;
