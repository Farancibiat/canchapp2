import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../styles/header.css";

export const Header = () => {
	const { store, actions } = useContext(Context);
	const [comunas, setComunas] = useState(["-"]);
	const [region, setRegion] = useState("Región");
	const [complex, setComplex] = useState(["-"]);

	function change_commune(event) {
		const aux = event.target.value;
		if (aux != "Región") {
			setComunas(
				store.searchEng[aux].communes.map(element => {
					setRegion(event.target.value);
					return element.name;
				})
			);
		}
		console.log(region);
	}
	function change_complex(event) {
		const selComuna = event.target.value;
		if (selComuna != "Comuna") {
			setComplex(
				store.searchEng[region].communes[selComuna].complex.map(complexs => {
					return complexs.name;
				})
			);
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
										{// Renderizado de comunas desde Store
										comunas.map((commune, index) => {
											return (
												<option key={index} value={index}>
													{commune.name}
												</option>
											);
										})}
									</select>
								</div>
								<div className="col-2 px-1">
									<select className="custom-select" id="selectCancha">
										<option selected>Cancha</option>
										{// Renderizado de regiones en Store
										complex.map((commplex, index) => {
											return (
												<option key={index} value={index}>
													{complex}
												</option>
											);
										})}
									</select>
								</div>
								<div className="col-2 px-0">
									<Link to="/reserve/">
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
