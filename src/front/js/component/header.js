import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../styles/header.css";

export const Header = () => {
	const { store, actions } = useContext(Context);
	const [selRegion, setRegion] = useState(0);
	const [selComuna, setComuna] = useState(0);
	const [comunas, setComunas] = useState(["-"]);
	const [complejos, setComplex] = useState(["-"]);
	const [url, setUrl] = useState("");

	// Se usa useEffect para activar useState asociados a selRegion y selComuna, de lo contrario
	// cambian de valor al segundo llamado de su función y el código falla.
	useEffect(
		() => {
			// action required when a diferent Region it's selected
			setComunas(store.searchEng[selRegion].communes);

			// action required when a diferent Commune it's selected

			if (parseInt(selComuna) < store.searchEng[selRegion].communes.length) {
				setComplex(store.searchEng[selRegion].communes[selComuna].complex);
			}
		},
		[selRegion, selComuna]
	);
	function change_commune(event) {
		setRegion(event.target.value);
	}

	function change_complex(event) {
		setComuna(event.target.value);
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
					<div className="form-group mb-0 p-2">
						<div className="card-body p-3">
							<div className="row">
								<div className="col-12 col-sm-4 px-1">
									<select
										className="custom-select"
										id="selectRegion"
										defaultValue="Región"
										onChange={e => change_commune(e)}>
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
								<div className="col-12 col-sm-4 px-1">
									<select
										className="custom-select"
										id="selectComuna"
										defaultValue="Comuna"
										onChange={e => change_complex(e)}>
										{// Renderizado de regiones en Store
										comunas.map((commune, index) => {
											return (
												<option key={index} value={index}>
													{commune.name}
												</option>
											);
										})}
									</select>
								</div>
								<div className="col-12 col-sm-4 px-1">
									<select
										className="custom-select"
										id="selectCancha"
										defaultValue="Cancha"
										onChange={e => change_url(e)}>
										{// Renderizado de complejos(recintos)

										complejos.map((cancha, index) => {
											return (
												<option key={index} value={index}>
													{cancha.name}
												</option>
											);
										})}
									</select>
								</div>
							</div>
							<div className="row pt-3">
								<div className="col-12 col-sm-12 px-0">
									<Link to={`${url}`}>
										<button type="submit" id="reservePage" className="btn btn-success my-0">
											Reservar
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Header;
