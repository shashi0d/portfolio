import React from "react";
import { Col, Row } from "react-bootstrap";

function CertificationListing({ name, institution, issuetime, credentialid }) {
	return (
		<Col xs={12} lg={6} className="mb-4">
			<Row>
				<Col xs={4}>
					<h1>Course:</h1>
				</Col>
				<Col xs={8}>
					<h2>{name}</h2>
				</Col>
			</Row>

			<Row>
				<Col xs={4}>
					<h1>Institution :</h1>
				</Col>
				<Col xs={8}>
					<h2>{institution}</h2>
				</Col>
			</Row>
			<Row>
				<Col xs={4}>
					<h1>Issued</h1>
				</Col>
				<Col xs={8}>
					<h2>{issuetime}</h2>
				</Col>
			</Row>
			<Row>
				<Col xs={4}>
					<h1>Credentialid</h1>
				</Col>
				<Col xs={8}>
					<h2>{credentialid}</h2>
				</Col>
			</Row>
		</Col>
	);
}

export default CertificationListing;
