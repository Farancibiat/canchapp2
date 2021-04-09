// import Tools
import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Datepicker from "react-datepicker";
import emailjs from "emailjs-com";

// import css
import "../styles/agendar.css";
import "react-datepicker/dist/react-datepicker.css";

// import images
import Cancha from "../../img/img_reserva.jpg";

export const ReservationFields = () => {
	const { store, actions } = useContext(Context);
	const [selectDate, setSelectDate] = useState(null);

	useEffect(() => {
		actions.cargarComplejo();
	}, []);

	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.send(
				"pichangapp_s26kmmb",
				"rent_u94nq7m",
				{
					complex_name: "Estadio Monumental",
					to_name: `${store.logedUser.firstName} ${store.logedUser.lastName}`,
					id_reserva: "007",
					fecha: "27/05/2021",
					hora: "21",
					precio: "20.000",
					tshirts_price: "3.000",
					ball_price: "1.000",
					referee_price: "15.000",
					precio_final: "27.000",
					complex_mail: "arancibiat.felipe@gmail.com",
					complex_phone: "+5695797420",
					user_mail: store.logedUser.email,
					reply_to: "pichangapp.corp@gmail.com"
				},
				"user_F3htLlSg7bVzumwkoOdNw"
			)
			.then(
				result => {
					console.log(result.text);
				},
				error => {
					console.log(error.text);
				}
			);
	}

	return (
		<>
			<div className="container text-center d-flex flex-column justify-content-center my-5">
				<h5 className="display-4 lead encabezado_pichanga">Reserva tu cancha</h5>
				<p className="lead">
					Selecciona la fecha, horario y si necesitas algún accesorio, puedes selecionarlo:
				</p>

				<form onSubmit={sendEmail}>
					<div className="row">
						<article className="col-12 col-md-6">
							<div className="contenedor_verde">
								<h5>Selecciona la fecha:</h5>
								<Datepicker
									className="fecha"
									selected={selectDate}
									onChange={date => setSelectDate(date)}
									dateFormat="dd/MM/yyyy"
									minDate={new Date()}
								/>
								<h6 className="mt-2">Horario</h6>
								<input type="time" />
							</div>
						</article>
						<article className="col-12 col-md-6">
							<div className="contenedor_amarillo">
								<h5 className="mb-3">Seleccione accesorios</h5>
								<div className="row justify-content-center">
									<input type="checkbox" id="arbitro" className="mr-2" />
									<h6>Arbitro</h6>
								</div>
								<div className="row justify-content-center">
									<input type="checkbox" id="arbitro" className="mr-2" />
									<h6>Camiseta</h6>
								</div>
								<div className="row justify-content-center">
									<input type="checkbox" id="arbitro" className="mr-2" />
									<h6>Balon</h6>
								</div>
							</div>
						</article>
					</div>
					<p className="mt-4">
						Haz click en reservar y te haremos llegar un correo con los detalles de tu reserva:
					</p>
					<div className="row my-3 mx-1 justify-content-center">
						<button type="submit" className="btn btn-primary btn-lg">
							Reservar
						</button>
					</div>
				</form>
				<div className="row my-2 mx-1 justify-content-center">
					<img src={Cancha} alt="Small Court" />
				</div>
			</div>
		</>
	);
};

export default ReservationFields;
