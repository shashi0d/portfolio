import React from "react";
import { Col, Container, Form, FormControl, Nav, Navbar, NavDropdown, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";

function Footer() {
	return (
		<Navbar className="footer" bg="light" expand="lg" sticky="bottom">
			<Container fluid>
				<Navbar.Brand href="#">Shashidhara N</Navbar.Brand>
				{/* <Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll"> */}
				<Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
					<Link className="nav-link" to={{ pathname: "https://github.com/shashi0d" }} target="_blank">
						Github
					</Link>
					<Link className="nav-link" to={{ pathname: "https://www.linkedin.com/in/meetshashi/" }} target="_blank">
						Linked In
					</Link>
				</Nav>
				{/* </Navbar.Collapse> */}
			</Container>
		</Navbar>
	);
}

export default Footer;
