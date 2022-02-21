import React from "react";
import { Col, Row } from "react-bootstrap";

function SkillListing({ skill }) {
	return (
		<Row>
			<Col>
				<h1>{skill}</h1>
			</Col>
		</Row>
	);
}

export default SkillListing;
