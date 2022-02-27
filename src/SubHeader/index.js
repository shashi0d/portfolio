import React from "react";
import { Row } from "react-bootstrap";
import "./index.css";

function SubHeader({ title }) {
	return (
		<Row className="sub-header">
			<h1>{title}</h1>
		</Row>
	);
}

export default SubHeader;
