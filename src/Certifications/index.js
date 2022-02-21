import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CertificationListing from "./CertificationListing";
import "./index.css";
function Certifications() {
	let certifications = [
		{
			name: "Introduction to Git and GitHubIntroduction to Git and GitHub ",
			institute: "Coursera",
			issuetime: "Issued Jul 2020",
			credentialid: "3QSD8XSCHBJX",
		},
		{
			name: "Blockchain Specialization",
			institute: "Coursera",
			issuetime: "Issued Jun 2020",
			credentialid: "LAFTS6RU9FYG",
		},
	];
	return (
		<Container className="certification-container">
			{certifications.map((item) => {
				return <CertificationListing name={item.name} institution={item.institute} issuetime={item.issuetime} credentialid={item.credentialid} />;
			})}
		</Container>
	);
}

export default Certifications;
