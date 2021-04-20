import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../styles/login.css";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";

export const RecoverField = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");

	const handlerSubmit = async e => {
		e.preventDefault();
		let token = Math.floor(Math.random() * 1000000);
		let user = await actions.validate(email);
		if (user == "Invalid User") {
			toast.error(" Registro Inválido, intente nuevamente", {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined
			});
		} else {
			emailjs
				.send(
					"pichangapp_s26kmmb",
					"template_8mtz89o",
					{
						user_mail: email,
						user_name: user.name,
						token: process.env.BACKEND_URL + "/recover/" + token
					},
					"user_F3htLlSg7bVzumwkoOdNw"
				)
				.then(
					result => {
						console.log(result.text);
					},
					error => {
						console.log("Hubo un error al procesar su solicitud");
					}
				);
		}

		// actions.recover(
		//     email
		// );
	};

	return (
		<div className="fondo-login justify-content-center">
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
						<div className="card-footer">
							<div className="d-flex justify-content-center links" />
							<div className="d-flex justify-content-center">
								<Link to="/recoverpass" className="text-white">
									¿Ya tienes código? ingresalo aqui.
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecoverField;
