import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../styles/login.css";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const RecoverField = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [token, setToken] = useState("");

	useEffect(() => {}, [toast]);
	const result = () => {
		return new Promise(resolve => {
			actions.validate(email).then(response => resolve(response));
		});
	};
	const handlerSubmit = e => {
		e.preventDefault();
		setToken(Math.floor(Math.random() * 1000000));

		result().then(response => {
			console.log(response);
			if (response) {
				console.log("entro a emailjs");
				emailjs.send(
					"pichangapp_s26kmmb",
					"template_8mtz89o",
					{
						user_mail: email,
						user_name: store.recoveryUser,
						token: "https://3000-apricot-mongoose-dqy31ho2.ws-us03.gitpod.io/recover/" + token
					},
					"user_F3htLlSg7bVzumwkoOdNw"
				);
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
		});
	};

	return (
		<div className="fondo-login justify-content-center">
			<ToastContainer />
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
