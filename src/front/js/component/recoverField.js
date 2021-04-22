import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../styles/login.css";
import { Link, Redirect } from "react-router-dom";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const RecoverField = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [redirect, setRedirect] = useState(false);

	useEffect(() => {}, [toast]);

	const handlerSubmit = e => {
		e.preventDefault();
		let token = 1000000 + Math.floor(Math.random() * 9000000);
		actions.validate(email);
		setTimeout(() => {
			if (store.validateState) {
				actions.createToken(token, email);
				setTimeout(() => {
					console.log("entro a emailjs");
					emailjs
						.send(
							"pichangapp_s26kmmb",
							"template_8mtz89o",
							{
								user_mail: email,
								user_name: store.recoveryUser,
								token: "https://3000-maroon-thrush-pikf52z8.ws-us03.gitpod.io/recover/" + token
							},
							"user_F3htLlSg7bVzumwkoOdNw"
						)
						.then(response => {
							console.log("wena wena!");
							toast.success("¡Correo enviado exitosamente! ", {
								position: "top-center",
								autoClose: 5000,
								hideProgressBar: false,
								closeOnClick: true,
								pauseOnHover: true,
								draggable: true,
								progress: undefined
							});
							setTimeout(() => setRedirect(true), 10000);
						});
				}, 4000);
			} else {
				console.log("entro al toast");
				toast.error(store.recoveryUser + ", intente nuevamente", {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined
				});
			}
		}, 4000);
	};

	return (
		<div className="fondo-login justify-content-center">
			<ToastContainer />
			{redirect ? <Redirect to="/" /> : ""}
			<div className="con1">
				<div className="d-flex justify-content-center h-100">
					<div className="card-login rounded-lg">
						<div className="card-header">
							<h3>Recuperar</h3>
						</div>
						<div className="card-body">
							<form onSubmit={e => handlerSubmit(e)}>
								<div className="input-group form-group py-5">
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
								<div className=" form-group">
									<input type="submit" value="Enviar" className="btn float-right login_btn" />
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecoverField;
