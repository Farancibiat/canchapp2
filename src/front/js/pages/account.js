import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../styles/account.css";

export const Account = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="fondo-account">
			<div className="card-account card ">
				<article className="account-style card-body mx-auto rounded-lg">
					<h4 className="card-title mt-3 text-center">Crea Tu Cuenta</h4>
					<p className="text-center" />

					<p className="divider-text">
						<span className="bg-transparent" />
					</p>
					<form>
						<div className="form-group input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									{" "}
									<i className="fa fa-user" />{" "}
								</span>
							</div>
							<input name="" className="form-control" placeholder="Nombre" type="text" />
						</div>
						<div className="form-group input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									{" "}
									<i className="fa fa-user" />{" "}
								</span>
							</div>
							<input name="" className="form-control" placeholder="Apellido" type="text" />
						</div>
						<div className="form-group input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									{" "}
									<i className="fa fa-envelope" />{" "}
								</span>
							</div>
							<input name="" className="form-control" placeholder="Email" type="email" />
						</div>
						<div className="form-group input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									{" "}
									<i className="fa fa-phone" />{" "}
								</span>
							</div>
							<select className="account-style2 custom-select">
								<option selected="">+569</option>
							</select>
							<input name="" className="form-control" placeholder="Teléfono" type="text" />
						</div>

						<div className="form-group input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									{" "}
									<i className="fa fa-lock" />{" "}
								</span>
							</div>
							<input className="form-control" placeholder="Crea tu Contraseña" type="password" />
						</div>
						<div className="form-group input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									{" "}
									<i className="fa fa-lock" />{" "}
								</span>
							</div>
							<input className="form-control" placeholder="Repite tu Contraseña" type="password" />
						</div>
						<div className="form-group">
							<button type="submit" className="btn btn-primary btn-block">
								{" "}
								Create Account{" "}
							</button>
						</div>
					</form>
				</article>
			</div>
		</div>
	);
};
