const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			loginStatus: false,
			token: "",

			logedUser: {
				firstName: "",
				lastName: "",
				email: ""
			},
			reserve: {
				servShirts: false,
				servBall: false,
				servReferee: false,
				hour: null
			},
			complex: {
				id: 0,
				firstHour: 8,
				lasthour: 11,
				unavailable: []
			},

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
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
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

					console.log("-->", tokenLocal);
					console.log("-->", JSON.stringify(userLocal));
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

			// getMessage: () => {
			// 	// fetching data from the backend
			// 	fetch(process.env.BACKEND_URL + "/api/hello")
			// 		.then(resp => resp.json())
			// 		.then(data => setStore({ message: data.message }));
			// 	// .catch(error => console.log("Error loading message from backend", error));
			// },
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
