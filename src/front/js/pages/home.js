import React from "react";
import imageHome from "/workspace/canchapp2/src/front/img/home.png";
import "../styles/home.css";
// import { Context } from "../store/appContext";

export const Home = () => {
	return (
		<>
			<img className="imgHome" src={imageHome} />
		</>
	);
};
