import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../component/header";
import { Context } from "../store/appContext";
import Datepicker from "react-datepicker";
import Cancha from "../../img/img_reserva.jpg";

import "../styles/agendar.css";
import "react-datepicker/dist/react-datepicker.css";

export const Reserve = () => {
	const { store, actions } = useContext(Context);

	const [selectDate, setSelectDate] = useState(null);

	return (
		<>
			<Header />
			<div className="agendamiento">
				<div className="contenedor_agenda">
					<h2 className="encabezado_pichanga">Reserva</h2>
					<p>
						En este apartado podras elegir la fecha que necesites para jugar tu{" "}
						<span className="text_pichanga">Pichanga:</span>
					</p>
					<div className="fila">
						<form className="formulario_seleccion">
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
						</form>
					</div>
					<button className="btn btn-success">Procesar</button>
					<img src={Cancha} alt="Sad Player" />
				</div>
			</div>
		</>
	);
};
