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
	const [polera, setPolera] = useState(0);
	const [pelota, setPelota] = useState(0);
	const [arbitro, setArbitro] = useState(0);
	const [fecha, setFecha] = useState(null);

	useEffect(() => {
		actions.cargarComplejo();
	}, []);

	function sendEmail(e) {
		e.preventDefault();
		setFecha(`${selectDate.getYear}/${selectDate.getMonth}/${selectDate.getDay}`);
		emailjs
			.send(
				"pichangapp_s26kmmb",
				"rent_u94nq7m",
				{
					complex_name: store.complejo.nameRecinto,
					to_name: `${store.logedUser.firstName} ${store.logedUser.lastName}`,
					id_reserva: store.reserve.reserveId,
					fecha: fecha,
					hora: "21",
					precio: "20000",
					tshirts_price: `${polera ? 3000 : 0}`,
					ball_price: `${pelota ? 2000 : 0}`,
					referee_price: `${arbitro ? 15000 : 0}`,
					precio_final: `${(polera ? 3000 : 0) + (pelota ? 2000 : 0) + (arbitro ? 15000 : 0) + 20000}`,
					complex_mail: store.complejo.email,
					complex_phone: store.complejo.phone,
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
	function handleChange(event) {
		const input = event.target;
		const value = input.type === "checkbox" ? input.checked : input.value;
		if (event.target.id == "polera") {
			setPolera(value);
		} else if (event.target.id == "pelota") {
			setPelota(value);
		} else {
			setArbitro(value);
		}
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
									id="datepicker"
									className="fecha"
									selected={selectDate}
									onChange={date => setSelectDate(date)}
									dateFormat="dd/MM/yyyy"
									minDate={new Date()}
								/>

								<h6 className="mt-2">Horario</h6>
								<div class="input-group-prepend">
									<label class="input-group-text" for="inputGroupSelect01">
										Options
									</label>
								</div>
								<select class="custom-select" id="inputGroupSelect01">
									<option selected>Choose...</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</select>
							</div>
						</article>
						<article className="col-12 col-md-6">
							<div className="contenedor_amarillo">
								<h5 className="mb-3">Servicios Adicionales</h5>
								<div className="row justify-content-center">
									<input
										name="arbitro"
										checked={arbitro}
										onChange={e => handleChange(e)}
										type="checkbox"
										id="arbitro"
									/>
									<h6>Árbitro</h6>
								</div>
								<div className="row justify-content-center">
									<input
										name="polera"
										checked={polera}
										onChange={e => handleChange(e)}
										type="checkbox"
										id="polera"
									/>
									<h6>Camiseta</h6>
								</div>
								<div className="row justify-content-center">
									<input
										name="pelota"
										checked={pelota}
										onChange={e => handleChange(e)}
										type="checkbox"
										id="pelota"
									/>
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
