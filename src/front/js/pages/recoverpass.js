import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { RecoverPassword } from "../component/recoverPass";

export const Recoverpassword = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<RecoverPassword />
		</div>
	);
};

export default Recoverpassword;
