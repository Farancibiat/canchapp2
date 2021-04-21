const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			loginStatus: false,
			loginToast: false,
			registerToast: false,
			token: "",
			recoveryUser: "",

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
					communes: [
						{
							name: "Arica",
							complex: ["-"]
						}
					]
				},
				{
					name: "Tarapacá",
					communes: [
						{
							name: "Iquique",
							complex: ["-"]
						}
					]
				},
				{
					name: "Antofagasta",
					communes: [
						{
							name: "Antofagasta",
							complex: ["-"]
						}
					]
				},
				{
					name: "Atacama",
					communes: [
						{
							name: "Copiapó",
							complex: ["-"]
						}
					]
				},
				{
					name: "Coquimbo",
					communes: [
						{
							name: "La Serena",
							complex: ["-"]
						}
					]
				},
				{
					name: "Valparaiso",
					communes: [
						{
							name: "Valparaiso",
							complex: []
						}
					]
				},
				{
					name: "Metropolitana",
					communes: [
						{
							name: "Santiago",
							complex: ["-"]
						},
						{
							name: "Maipú",
							complex: ["-"]
						},
						{
							name: "Renca",
							complex: ["-"]
						},
						{
							name: "San Joaquín",
							complex: ["-"]
						}
					]
				},
				{
					name: "Libertador General Bernardo O'Higgins",
					communes: [
						{
							name: "Rancagua",
							complex: ["-"]
						}
					]
				},
				{
					name: "Maule",
					communes: [
						{
							name: "Talca",
							complex: ["-"]
						}
					]
				},
				{
					name: "Ñuble",
					communes: [
						{
							name: "Chillán",
							complex: ["-"]
						}
					]
				},
				{
					name: "Bio Bío",
					communes: [
						{
							name: "Concepción",
							complex: ["-"]
						}
					]
				},
				{
					name: "La Araucanía",
					communes: [
						{
							name: "Temuco",
							complex: ["-"]
						}
					]
				},
				{
					name: "Los Ríos",
					communes: [
						{
							name: "Valdivia",
							complex: ["-"]
						}
					]
				},

				{
					name: "Los Lagos",
					communes: [
						{
							name: "Puerto Montt",
							complex: ["-"]
						},
						{
							name: "Castro",
							complex: [
								{
									name: "Donde Manolo",
									mail: "dondemanolo@gmail.com",
									phone: "+56912341234",
									rentPrice: 20000,
									ballPrice: 1000,
									refereePrice: 20000
								},
								{
									name: "Sport 7",
									mail: "sport7@gmail.com",
									phone: "+56900001234",
									rentPrice: 25000,
									ballPrice: 1000,
									refereePrice: 20000
								},
								{
									name: "Municipal 2",
									mail: "municipal2@gmail.com",
									phone: "+56912340000",
									rentPrice: 23000,
									ballPrice: 1000,
									refereePrice: 20000
								}
							]
						}
					]
				},
				{
					name: "Aysén del General Carlos Ibáñez del Campo",
					communes: [
						{
							name: "Coyhaique",
							complex: ["-"]
						}
					]
				},
				{
					name: "Magallanes y la Antártica Chilena",
					communes: [
						{
							name: "Punta Arenas",
							complex: ["-"]
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
			},

			validate: mail => {
				fetch(process.env.BACKEND_URL + "/api/validate", {
					method: "POST",
					body: JSON.stringify({ email: mail }),
					headers: { "Content-type": "application/json" }
				})
					.then(resp => resp.json())
					.then(data => {
						if (data.name) {
							console.log("me cago en tu puta madre");
							setStore({ recoveryUser: data.name });
							return true;
						} else {
							console.log("a la mierda!");
							setStore({ recoveryUser: data.msg });
							return false;
						}
					})
					.catch(error => {
						console.log("Error loading message from backend", error);
						return false;
					});
			}
		}
	};
};

export default getState;
