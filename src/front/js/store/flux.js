const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			loginStatus: false,
			logedUser: {
				firstName: "",
				lastName: "",
				email: "",
				pass: "",
				birthDate: null
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
				setStore({ loginStatus: true });
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
