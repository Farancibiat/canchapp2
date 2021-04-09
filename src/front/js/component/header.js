import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../styles/header.css";

export const Header = () => {
	const { store, actions } = useContext(Context);
	const [comunas, setComunas] = useState(["-"]);
	const [complex, setComplex] = useState(["-"]);
	const [url, setUrl] = useState("");

	function change_commune(event) {
		const selRegion = event.target.value;
		if (selRegion != "Región") {
			setComunas(store.searchEng[selRegion].communes);
		}
	}
	function change_complex(event) {
		const selComuna = event.target.value;
		if (selComuna == "Comuna") {
			setComplex(["Comuna"]);
		} else if (selComuna == "Castro") {
			setComplex(["Donde Manolo", "Sport 7", "Municipal 2"]);
		}
	}
	function change_url(e) {
		const aux = window.location.pathname.split("/");
		if (aux[1] == "reserve") {
			setUrl(`${e.target.value}`);
			actions.setComplexId(e.target.value);
		} else {
			setUrl(`reserve/${e.target.value}`);
			actions.setComplexId(e.target.value);
		}
	}
	return (
		<div className="fondo_header d-flex">
			<div className="card text-center formulario w-50 mx-auto my-auto">
				<form>
					<div className="form-group mb-0">
						<div className="card-body p-3">
							<div className="row">
								<div className="col-1" />
								<div className="col-3 px-1">
									<select
										className="custom-select"
										id="selectRegion"
										onChange={e => change_commune(e)}>
										<option selected>Región</option>
										{// Renderizado de regiones en Store
										store.searchEng.map((region, index) => {
											return (
												<option key={index} value={index}>
													{region.name}
												</option>
											);
										})}
									</select>
								</div>
								<div className="col-3 px-1">
									<select
										className="custom-select"
										id="selectComuna"
										onChange={e => change_complex(e)}>
										<option selected>Comuna</option>
										{// Renderizado de regiones en Store
										comunas.map((commune, index) => {
											return (
												<option key={index} value={commune}>
													{commune}
												</option>
											);
										})}
									</select>
								</div>
								<div className="col-2 px-1">
									<select className="custom-select" id="selectCancha" onChange={e => change_url(e)}>
										<option selected>Cancha</option>
										{// Renderizado de complejos(recintos)
										complex.map((complexName, index) => {
											return (
												<option key={index} value={index}>
													{complexName}
												</option>
											);
										})}
									</select>
								</div>
								<div className="col-2 px-0">
									<Link to={`${url}`}>
										<button type="submit" id="reservePage" className="btn btn-success my-0">
											Reservar
										</button>
									</Link>
								</div>
								<div className="col-1" />
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Header;
