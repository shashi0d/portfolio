import React from "react";
import { Col, Row } from "react-bootstrap";

function SkillListing({ skill }) {
	return (
		<Col xs={"auto"} lg={4} className="mb-2">
			<h1 className="skill-list">{skill}</h1>
		</Col>
	);
}

export default SkillListing;
