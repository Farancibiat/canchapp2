import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../styles/login.css";
import { Link } from "react-router-dom";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="fondo-login justify-content-center">
			<div className="con1">
				<div className="d-flex justify-content-center h-100">
					<div className="card-login">
						<div className="card-header">
							<h3>Sign In</h3>
							{/* <div className="d-flex justify-content-end social_icon">
								<span>
									<i className="fab fa-facebook-square" />
								</span>
								<span>
									<i className="fab fa-instagram" />
								</span>
								<span>
									<i className="fab fa-twitter-square" />
								</span>
							</div> */}
						</div>
						<div className="card-body">
							<form>
								<div className="input-group form-group">
									<div className="input-group-prepend">
										<span className="input-group-text">
											<i className="fas fa-user" />
										</span>
									</div>
									<input type="text" className="form-control" placeholder="Nombre de Usuario" />
								</div>
								<div className="input-group form-group">
									<div className="input-group-prepend">
										<span className="input-group-text">
											<i className="fas fa-key" />
										</span>
									</div>
									<input type="password" className="form-control" placeholder="Contraseña" />
								</div>
								<div className="row align-items-center remember">
									<input type="checkbox" />
									Remember Me
								</div>
								<div className="form-group">
									<input type="submit" value="Login" className="btn float-right login_btn" />
								</div>
							</form>
						</div>
						<div className="card-footer">
							<div className="d-flex justify-content-center links">
								{/* <Link to="#">Don't have an account?</Link> */}
							</div>
							<div className="d-flex justify-content-center">
								<Link to="#">Olvidaste tu contraseña?</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
