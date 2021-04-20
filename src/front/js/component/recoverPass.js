import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../styles/login.css";
import { Link } from "react-router-dom";

export const RecoverPass = () => {
	const { store, actions } = useContext(Context);
	const [pass2, setPass2] = useState("");
	const [token, setToken] = useState(location.pathname.split("/")[2]);
	const [pass1, setPass1] = useState("");

	const handlerSubmit = e => {
		e.preventDefault();
		actions.recoverPass({
			password: password
		});
	};

	return (
		<div className="fondo-login justify-content-center">
			<div className="con1">
				<div className="d-flex justify-content-center h-100">
					<div className="card-login rounded-lg">
						<div className="card-header">
							<h3>Crear Contraseña</h3>
						</div>
						<div className="card-body">
							<form onSubmit={e => handlerSubmit(e)}>
								<div className="form-group input-group">
									<div className="input-group-prepend">
										<span className="input-group-text">
											{" "}
											<i className="fa fa-lock" />{" "}
										</span>
									</div>
								</div>
								<div className="input-group form-group">
									<div className="input-group-prepend">
										<span className="input-group-text">
											<i className="fas fa-key" />
										</span>
									</div>
									<input
										type="password"
										value={pass1}
										className="form-control"
										placeholder="Contraseña"
										onChange={e => setPass1(e.target.value)}
									/>
								</div>
								<div className="input-group form-group">
									<div className="input-group-prepend">
										<span className="input-group-text">
											<i className="fas fa-key" />
										</span>
									</div>
									<input
										type="password"
										value={pass2}
										className="form-control"
										placeholder="Reingrese Contraseña"
										onChange={e => setPass2(e.target.value)}
									/>
								</div>
								<div className=" form-group">
									<input type="submit" value="Crear" className="btn float-right login_btn" />
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecoverPass;
