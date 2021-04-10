const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			loginStatus: false,
			loginToast: false,
			registerToast: false,
			token: "",

			logedUser: {
				firstName: "",
				lastName: "",
				email: "",
				phone: "",
				id: ""
			},
			complexId: "",
			reserve: {
				reserveId: "",
				fecha: "",
				hora: "",
				servShirts: false,
				servBall: false,
				servReferee: false
			},
			complejo: {
				id: 0,
				nameRecinto: "404, complejo no econtrado",
				openHour: 0,
				closeHour: 0,
				email: "",
				phone: ""
			},
			unavailable: [],
			searchEng: [
				{
					name: "Arica y Parinacota",
					communes: ["Arica"],
					complex: [
						{
							name: "-",
							id: "-"
						}
					]
				},
				{
					name: "Tarapacá",
					communes: ["Iquique"],
					complex: [
						{
							name: "-",
							id: "-"
						}
					]
				},
				{
					name: "Antofagasta",
					communes: ["Antofagasta"],
					complex: [
						{
							name: "-",
							id: "-"
						}
					]
				},
				{
					name: "Atacama",
					communes: ["Copiapó"],
					complex: [
						{
							name: "-",
							id: "-"
						}
					]
				},
				{
					name: "Coquimbo",
					communes: ["La Serena"],
					complex: [
						{
							name: "-",
							id: "-"
						}
					]
				},
				{
					name: "Valparaiso",
					communes: ["Valparaiso"],
					complex: [
						{
							name: "-",
							id: "-"
						}
					]
				},
				{
					name: "Metropolitana",
					communes: ["Santiago", "Maipú", "Renca", "San Joaquin"],
					complex: [
						{
							name: "-",
							id: "-"
						}
					]
				},
				{
					name: "Libertador General Bernardo O'Higgins",
					communes: ["Rancagua"],
					complex: [
						{
							name: "-",
							id: "-"
						}
					]
				},
				{
					name: "Maule",
					communes: ["Talca"],
					complex: [
						{
							name: "-",
							id: "-"
						}
					]
				},
				{
					name: "Ñuble",
					communes: ["Chillán"],
					complex: [
						{
							name: "-",
							id: "-"
						}
					]
				},
				{
					name: "Biobío",
					communes: ["Concepción"],
					complex: [
						{
							name: "-",
							id: "-"
						}
					]
				},
				{
					name: "La Araucanía",
					communes: ["Temuco"],
					complex: [
						{
							name: "-",
							id: "-"
						}
					]
				},
				{
					name: "Los Ríos",
					communes: ["Valdivia"],
					complex: [
						{
							name: "-",
							id: "-"
						}
					]
				},
				{
					name: "Los Lagos",
					communes: ["Puerto Montt", "Castro"],
					complex: [
						{
							name: "-",
							id: "-"
						},
						{
							name: "Donde Manolo",
							id: "1"
						},
						{
							name: "Sport 7",
							id: "2"
						}
					]
				},
				{
					name: "Aysén del General Carlos Ibáñez del Campo",
					communes: ["Coyhaique"],
					complex: [
						{
							name: "-",
							id: "-"
						}
					]
				},
				{
					name: "Magallanes y la Antártica Chilena",
					communes: ["Punta Arenas"],
					complex: [
						{
							name: "-",
							id: "-"
						}
					]
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			cerrarSesion: () => {
				setStore({ loginStatus: false });
				setStore({
					logedUser: {
						firstName: "",
						lastName: "",
						email: "",
						phone: "",
						id: ""
					}
				});
				localStorage.clear();
				sessionStorage.clear();
			},

			createUser: user => {
				fetch(process.env.BACKEND_URL + "/api/create-user", {
					method: "POST",
					body: JSON.stringify(user),
					headers: { "Content-type": "application/json" }
				})
					.then(response => response.json())
					.then(data => {
						setStore({ user: data });
					})
					.catch(error => {
						console.log("Error inesperado", error);
					});
			},

			getToken: () => {
				if (localStorage.getItem("token") != null) {
					const tokenLocal = localStorage.getItem("token");
					const userLocal = JSON.parse(localStorage.getItem("user"));
					setStore({ token: tokenLocal });
					setStore({ logedUser: userLocal });
					setStore({ loginStatus: true });
				}
			},

			setLogin: (user, rememberMe) => {
				fetch(process.env.BACKEND_URL + "/api/login", {
					method: "POST",
					body: JSON.stringify(user),
					headers: { "Content-type": "application/json" }
				})
					.then(resp => resp.json())
					.then(data => {
						setStore({ token: data.token });
						setStore({ logedUser: data.user });
						setStore({ loginStatus: true });
						if (rememberMe) {
							if (typeof Storage !== "undefined") {
								localStorage.setItem("token", data.token);
								localStorage.setItem("user", JSON.stringify(data.user));
							} else {
								console.log("LocalStorage no soportado en este navegador");
							}
						} else {
							if (typeof Storage !== "undefined") {
								sessionStorage.setItem("token", data.token);
								sessionStorage.setItem("user", JSON.stringify(data.user));
							} else {
								console.log("LocalStorage no soportado en este navegador");
							}
						}
					})
					.catch(error => console.log("Error loading message from backend", error));
			},

			setComplexId: id => {
				setStore({ complexId: id });
			},

			cargarComplejo: () => {
				console.log(getStore().complexId);
				fetch(process.env.BACKEND_URL + `/api/recinto/${getStore().complexId}`, {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				})
					.then(data => data.json())
					.then(response => {
						console.log(response);
						setStore({
							complejo: response.recintos
						});
					});
			},
			setToast: aux => {
				setStore({ loginToast: aux });
			},

			setRegisterToast: aux => {
				setStore({ registerToast: aux });
			}
		}
	};
};

export default getState;
