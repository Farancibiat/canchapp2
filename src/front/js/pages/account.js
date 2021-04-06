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
					{/* <p>
						<a href="" className="btn btn-block btn-twitter">
							{" "}
							<i className="fab fa-twitter" />Login via Twitter
						</a>
						<a href="" className="btn btn-block btn-facebook">
							{" "}
							<i className="fab fa-facebook-f" />   Login via facebook
						</a>
					</p> */}
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
							<input name="" className="form-control" placeholder="Nombre Completo" type="text" />
						</div>
						<div className="form-group input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									{" "}
									<i className="fa fa-user" />{" "}
								</span>
							</div>
							<input name="" className="form-control" placeholder="Nombre de Usuario" type="text" />
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
								{/* <option value="1">+972</option>
								<option value="2">+198</option>
								<option value="3">+701</option> */}
							</select>
							<input name="" className="form-control" placeholder="Teléfono" type="text" />
						</div>
						{/* <div className="form-group input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									{" "}
									<i className="fa fa-building" />{" "}
								</span>
							</div>
							<select className="form-control">
								<option selected=""> Select job type</option>
								<option>Designer</option>
								<option>Manager</option>
								<option>Accaunting</option>
							</select>
						</div> */}
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
						{/* <p className="text-center">
							Have an account? <a href="">Log In</a>{" "}
						</p> */}
					</form>
				</article>
			</div>
		</div>
	);
};
