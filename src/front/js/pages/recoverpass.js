import React, { useContext } from "react";
import { Context } from "../store/appContext";
import RecoverPass from "../component/reecoverPass";

export const Recoverpassword = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<RecoverPass />
		</div>
	);
};
