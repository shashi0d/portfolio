import React from "react";
import { Navbar, Offcanvas, Form, FormControl, Button, Container, NavDropdown, Nav } from "react-bootstrap";
import "./index.css";
function Header() {
	return (
		<Navbar bg="light" expand={false}>
			<Container fluid>
				<Navbar.Brand href="#" className="navbar-heading">
					Our PortFolio
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="offcanvasNavbar" />
				<Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end" className="offcanvas-container">
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
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
}

export default Header;
