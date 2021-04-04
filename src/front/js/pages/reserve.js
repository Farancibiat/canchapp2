import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../component/header";
import { Context } from "../store/appContext";

export const Reserve = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Header />
		</>
	);
};
