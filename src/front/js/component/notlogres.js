// import Tools
import React, { useState, useContext } from "react";

// import images
import Cancha from "../../img/img_reserva.jpg";
import { LinkContainer } from "react-router-bootstrap";

export const NotLogRes = () => {
	const [selectDate, setSelectDate] = useState(null);
	return (
		<div className="container">
			<div className="row mt-3">
				<div className="col-sm-4" />
				<div className="col-12 col-sm-4 text-center">
					<p>
						<strong>Estimado Usuario</strong>
					</p>
					<p>Para poder reservar una cancha debes estar registrado.</p>
				</div>
				<div className="col-sm-4" />
			</div>
			<div className="row">
				<div className="col-sm-4" />
				<div className="col-12 col-sm-4 text-center">
					<LinkContainer to="/login">
						<button type="button" className="btn mr-3 mt-2 btn-info">
							Login
						</button>
					</LinkContainer>
					<LinkContainer to="/">
						<button type="button" className="btn mr-3 mt-2 btn-primary">
							Home
						</button>
					</LinkContainer>
				</div>
				<div className="col-sm-4" />
			</div>
			<div className="row">
				<div className="col-sm-4" />
				<div className="col-12 col-sm-4 text-center">
					<img src={Cancha} alt="Small Court" />
				</div>
				<div className="col-sm-4" />
			</div>
		</div>
	);
};
export default NotLogRes;
