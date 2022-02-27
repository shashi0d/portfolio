import React from "react";
import { Navbar, Offcanvas, Form, FormControl, Button, Container, NavDropdown, Nav, Image } from "react-bootstrap";
import Logo from "../Assets/Images/Logo.jpg";
import "./index.css";
function Header() {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="#" className="navbar-heading">
					<div className="brand-image-parent">
						<Image src={Logo} />
					</div>
				</Navbar.Brand>
				{/* <Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse> */}
				{/* <Nav>
					<Nav.Item>
						<Nav.Link href="#experience">Experience</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="#projects">Projects</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="#education">Education</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="#certifications">Certifications</Nav.Link>
					</Nav.Item>
				</Nav> */}
				{/* </Navbar.Collapse> */}

				{/* <Navbar.Toggle aria-controls="offcanvasNavbar" /> */}
				{/* <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end" className="offcanvas-container">
					<div className="centered-div">
						<Offcanvas.Header closeButton></Offcanvas.Header>
						<Offcanvas.Body>
							<div className="menu-holder">
								<div className="menu-item">
									<h1>Me</h1>
								</div>
								<div className="menu-item">
									<h1>Me in B.E</h1>
								</div>
								<div className="menu-item">
									<h1>Me Now</h1>
								</div>
							</div>
						</Offcanvas.Body>
					</div>
				</Navbar.Offcanvas> */}
			</Container>
		</Navbar>
	);
}

export default Header;
