import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../styles/header.css";

export const Header = () => {
	const { store, actions } = useContext(Context);
	const [comunas, setComunas] = useState(["-", store.searchEng[13].communes[0]]);

	function cambia_comuna(event) {
		const selRegion = event.target.value;
		if (selRegion != "Región") {
			setComunas(store.searchEng[event.target.key].communes);
		}
	}
	return (
		<div className="fondo_header d-flex">
			<div className="card text-center formulario w-50 mx-auto my-auto">
				<form>
					<div className="form-group">
						<div className="card-body">
							<div className="row d-flex justify-content-center">
								<div className="col-4">
									<select className="custom-select" id="selectRegion" onChange="cambia_comuna(e)">
										<option selected>Región</option>
										{// Renderizado de regiones en Store
										store.searchEng.map((region, index) => {
											return (
												<option key={index} value={region.name}>
													{region.name}
												</option>
											);
										})}
									</select>
								</div>
								<div className="col-4">
									<select className="custom-select" id="selectRegion">
										<option selected>Comuna</option>
										{// Renderizado de regiones en Store
										comunas.map((element, index) => {
											return (
												<option key={index} value={element}>
													{element}
												</option>
											);
										})}
									</select>
								</div>
								<div className="col-4">
									<select className="custom-select" id="selectCancha">
										<option selected>Cancha</option>
									</select>
								</div>
								<div className="card-footer pb-0">
									<button type="submit" id="reservePage" className="btn btn-success">
										Reservar
									</button>
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
