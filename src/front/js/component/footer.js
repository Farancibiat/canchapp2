import React, { Component } from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import logo from "/workspace/canchapp2/src/front/img/logo_navbar.png";

export const Footer = () => {
	return (
		<>
			<footer className="bg-warning text-white py-5 mb-0 pb-0">
				<div className="container">
					<div className="row">
						<div className="col-md-3 text-white text-uppercase d-flex justify-content-center">
							<p className="p_footer text-capitalize align-text-bottom">contacto: info@pichangapp.cl</p>
						</div>

						<div className="col-md-6 text-white text-uppercase d-flex justify-content-center">
							<section className="mb-4">
								<a
									className="btn btn-outline-light btn-floating m-1 align-middle"
									href="#!"
									role="button">
									<i className="fab fa-facebook-f" />
								</a>

								<a
									className="btn btn-outline-light btn-floating m-1 align-middle"
									href="#!"
									role="button">
									<i className="fab fa-google" />
								</a>

								<a
									className="btn btn-outline-light btn-floating m-1 align-middle"
									href="#!"
									role="button">
									<i className="fab fa-instagram" />
								</a>
							</section>
						</div>
						<div className="col-md-3 text-white text-uppercase d-flex align-items-center justify-content-center">
							<img
								src={logo}
								width="90px"
								alt="Logo Pichangapp"
								className="img-logo mr-2 align-items-center mt-0 pt-0"
							/>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};
