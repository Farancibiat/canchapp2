// import Tools
import React, { useState, useContext } from "react";
import Datepicker from "react-datepicker";
import emailjs from "emailjs-com";

// import css
import "../styles/agendar.css";
import "react-datepicker/dist/react-datepicker.css";

// import images
import Cancha from "../../img/img_reserva.jpg";

export const ReservationFields = () => {
	const [selectDate, setSelectDate] = useState(null);

	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.send(
				"pichangapp_s26kmmb",
				"rent_u94nq7m",
				{
					complex_name: "Estadio Monumental",
					to_name: "Hector",
					id_reserva: "007",
					fecha: "27/05/2021",
					hora: "21",
					precio: "10.000",
					tshirts: "Si",
					tshirts_price: "1.000",
					ball: "Si",
					ball_price: "1.000",
					referee: "Si",
					referee_price: "15.000",
					precio_final: "27.000",
					complex_mail: "arancibiat.felipe@gmail.com",
					complex_phone: "+5695797420",
					user_mail: "hectorsalas7@gmail.com",
					reply_to: "ces.acevedo.23@gmail.com"
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
		<div className="agendamiento">
			<div className="contenedor_agenda">
				<h2 className="encabezado_pichanga">Reserva</h2>
				<p>
					En este apartado podras elegir la fecha que necesites para jugar tu{" "}
					<span className="text_pichanga">Pichanga:</span>
				</p>
				<form className="formulario_seleccion" onSubmit={sendEmail}>
					<div className="fila">
						<div className="contenedor_verde">
							<h4>Selecciona la fecha:</h4>
							<Datepicker
								className="fecha"
								selected={selectDate}
								onChange={date => setSelectDate(date)}
								dateFormat="dd/MM/yyyy"
								minDate={new Date()}
							/>
							<h4>Horario</h4>
							<input type="time" />
						</div>
						<div className="contenedor_amarillo">
							<h4>Seleccione accesorios</h4>
							<div className="row">
								<input type="checkbox" id="arbitro" />
								<h5> Arbitro</h5>
							</div>
							<div className="row">
								<input type="checkbox" id="arbitro" />
								<h5> Camiseta</h5>
							</div>
							<div className="row">
								<input type="checkbox" id="arbitro" />
								<h5> Balon</h5>
							</div>
						</div>
					</div>
					<button type="submit" className="btn btn-success">
						Procesar
					</button>
					<img src={Cancha} alt="Small Court" />
				</form>
			</div>
		</div>
	);
};

export default ReservationFields;
