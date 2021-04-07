import React, { useContext } from "react";
import logo from "../../img/logo_navbar.png";
import "../styles/navigationbar.css";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const NavigationBar = () => {
	const { store, actions } = useContext(Context);
	const cerrarSesion = () => {
		actions.cerrarSesion();
	};
	return (
		<>
			<Navbar bg="warning" expand="lg">
				<div className="container">
					<Navbar.Brand href="/">
						<img src={logo} alt="" width="150" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Link href="/">
								<button type="button" className="btn btn-primary">
									Home
								</button>
							</Nav.Link>
							{store.loginStatus ? (
								<>
									<Nav.Link href="/">
										<button type="button" className="btn btn-danger" onClick={cerrarSesion}>
											Cerrar Sesion
										</button>
									</Nav.Link>
								</>
							) : (
								<>
									<Nav.Link href="/login">
										<button type="button" className="btn btn-info">
											Login
										</button>
									</Nav.Link>
									<Nav.Link href="/account">
										<button type="button" className="btn btn-success">
											Registrate
										</button>
									</Nav.Link>
								</>
							)}
						</Nav>
					</Navbar.Collapse>
				</div>
			</Navbar>
		</>
	);
};
