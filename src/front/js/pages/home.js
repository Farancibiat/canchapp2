import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Stepper from "../component/stepper";
import Header from "../component/header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		if (store.registerToast) {
			actions.setRegisterToast(false);
			toast.success("¡Login exitoso! ", {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined
			});
		}
	}, []);

	return (
		<>
			<ToastContainer />
			<Header />
			<Stepper />
		</>
	);
};
