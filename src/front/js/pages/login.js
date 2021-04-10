import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../styles/login.css";
import { Link, Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [remember, setRemember] = useState(false);
	const [redirect, setRedirect] = useState(null);

	useEffect(() => {
		if (store.loginToast) {
			actions.setToast(false);
			toast.success("¡Registro exitoso! ", {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined
			});
		}
	}, []);

	const handlerSubmit = e => {
		e.preventDefault();
		if (email != "" && password != "") {
			actions.setLogin(
				{
					email: email,
					password: password
				},
				remember
			);
			actions.setRegisterToast(true);
			setRedirect(true);
		} else {
			toast.error(" ¡Complete todos los campos!", {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined
			});
		}
	};
	function handleChange(event) {
		const input = event.target;
		const value = input.type === "checkbox" ? input.checked : input.value;
		setRemember(value);
	}

	return (
		<div className="fondo-login justify-content-center">
			{redirect ? <Redirect to="/" /> : ""}
			<ToastContainer />
			<div className="con1">
				<div className="d-flex justify-content-center h-100">
					<div className="card-login rounded-lg">
						<div className="card-header">
							<h3>Sign In</h3>
						</div>
						<div className="card-body">
							<form onSubmit={e => handlerSubmit(e)}>
								<div className="input-group form-group">
									<div className="input-group-prepend">
										<span className="input-group-text">
											<i className="fas fa-envelope" />
										</span>
									</div>
									<input
										type="email"
										value={email}
										className="form-control"
										placeholder="Email"
										onChange={e => setEmail(e.target.value)}
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
										value={password}
										className="form-control"
										placeholder="Contraseña"
										onChange={e => setPassword(e.target.value)}
									/>
								</div>
								<div className="row align-items-center remember">
									<div className="col-12 d-flex">
										<input
											name="remember"
											checked={remember}
											onChange={e => handleChange(e)}
											type="checkbox"
											id="RememberMe"
										/>
										<p>Recordar contraseña</p>
									</div>
								</div>
								<div className=" form-group pb-3">
									<input type="submit" value="Login" className="btn float-right login_btn" />
								</div>
							</form>
						</div>
						<div className="card-footer">
							<div className="d-flex justify-content-center links" />
							<div className="d-flex justify-content-center">
								<Link to="/recover" className="text-white">
									Olvidaste tu contraseña?
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
// onClick={setRemember(!remember)}
