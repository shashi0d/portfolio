import React from "react";
import { Col, Row } from "react-bootstrap";

function ExperienceListing({ name, role, type, duration, experience, address, tasks }) {
	return (
		<Col xs={12} lg={6} className="mb-4">
			<Row>
				<Col xs={4}>
					<h1>Company:</h1>
				</Col>
				<Col xs={8}>
					<h2>{name}</h2>
				</Col>
			</Row>
			<Row>
				<Col xs={4}>
					<h1>Role:</h1>
				</Col>
				<Col xs={8}>
					<h2>{role}</h2>
				</Col>
			</Row>
			<Row>
				<Col xs={4}>
					<h1>Type:</h1>
				</Col>
				<Col xs={8}>
					<h2>{type}</h2>
				</Col>
			</Row>
			<Row>
				<Col xs={4}>
					<h1>Duration:</h1>
				</Col>
				<Col xs={8}>
					<h2>{duration}</h2>
				</Col>
			</Row>
			<Row>
				<Col xs={4}>
					<h1>Location:</h1>
				</Col>
				<Col xs={8}>
					<h2>{address}</h2>
				</Col>
			</Row>
			<Row>
				<Col xs={4}>
					<h1>Tech Stack:</h1>
				</Col>
				<Col xs={8}>
					<h2>{tasks}</h2>
				</Col>
			</Row>
		</Col>
	);
}

export default ExperienceListing;
