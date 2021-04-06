import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../component/header";
import { Context } from "../store/appContext";
import ReservationFields from "../component/reservationfields";

import "../styles/agendar.css";
import "react-datepicker/dist/react-datepicker.css";

export const Reserve = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Header />
			<ReservationFields />
		</>
	);
};
