import React, { Component } from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import logo from "/workspace/canchapp2/src/front/img/logo_navbar.png";

export const Footer = () => {
	return (
		<footer className="text-center text-white bg-warning">
			<div className="row">
				<div className="contact-footer text-dark col-4">
					<p>Contáctanos</p>
					<p>Email: pichangapp@app.com</p>
					<p>Tel: 555-44-22</p>
				</div>
				<div className="iconos-rrss col-4">
					<div className="container pt-4">
						<section className=" iconos mb-4">
							<a
								className="btn-face btn btn-link btn-floating btn-lg text-dark m-1"
								href="https://www.facebook.com/"
								role="button"
								data-mdb-ripple-color="dark">
								<i className="fab fa-facebook-f" />
							</a>

							<a
								className="btn-twitter btn btn-link btn-floating btn-lg text-dark m-1"
								href="https://twitter.com/?lang=es"
								role="button"
								data-mdb-ripple-color="dark">
								<i className="fab fa-twitter" />
							</a>

							<a
								className="btn-insta btn btn-link btn-floating btn-lg text-dark m-1"
								href="https://www.instagram.com/?hl=es"
								role="button"
								data-mdb-ripple-color="dark">
								<i className="fab fa-instagram" />
							</a>
						</section>
						<div className="text-center text-dark p-3">© 2021 Copyright: Pichangapp</div>
					</div>
				</div>
				<div className="logo-footer col-4">
					<Link className=" logo-footer navbar-brand" to="/">
						<img src={logo} alt="" width="150" height="80" />
					</Link>
				</div>
			</div>
		</footer>
	);
};
