import React from "react";
import { Col, Row } from "react-bootstrap";

function CertificationListing({ name, institution, issuetime, credentialid }) {
	return (
		<Row>
			<Col>
				<h1>{name}</h1>
				<h2>{institution}</h2>
				<h1>{issuetime}</h1>
				<h2>{credentialid}</h2>
			</Col>
		</Row>
	);
}

export default CertificationListing;
