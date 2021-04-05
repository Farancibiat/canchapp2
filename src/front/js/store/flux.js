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
					communes: [
						{
							name: "Arica",
							complex: [
								{
									name: "-",
									id: "-"
								}
							]
						}
					]
				},
				{
					name: "Tarapacá",
					communes: [
						{
							name: "Iquique",
							complex: [
								{
									name: "-",
									id: "-"
								}
							]
						}
					]
				},
				{
					name: "Antofagasta",
					communes: [
						{
							name: "Antofagasta",
							complex: [
								{
									name: "-",
									id: "-"
								}
							]
						}
					]
				},
				{
					name: "Atacama",
					communes: [
						{
							name: "Copiapó",
							complex: [
								{
									name: "-",
									id: "-"
								}
							]
						}
					]
				},
				{
					name: "Coquimbo",
					communes: [
						{
							name: "La Serena",
							complex: [
								{
									name: "-",
									id: "-"
								}
							]
						}
					]
				},
				{
					name: "Valparaiso",
					communes: [
						{
							name: "Valparaiso",
							complex: [
								{
									name: "-",
									id: "-"
								}
							]
						}
					]
				},
				{
					name: "Metropolitana",
					communes: [
						{
							name: "Santiago",
							complex: [
								{
									name: "-",
									id: "-"
								}
							]
						},
						{
							name: "Maipú",
							complex: [
								{
									name: "-",
									id: "-"
								}
							]
						},
						{
							name: "Renca",
							complex: [
								{
									name: "-",
									id: "-"
								}
							]
						},
						{
							name: "San Joaquín",
							complex: [
								{
									name: "-",
									id: "-"
								}
							]
						}
					]
				},
				{
					name: "Libertador General Bernardo O'Higgins",
					communes: [
						{
							name: "Rancagua",
							complex: [
								{
									name: "-",
									id: "-"
								}
							]
						}
					]
				},
				{
					name: "Maule",
					communes: [
						{
							name: "Talca",
							complex: [
								{
									name: "-",
									id: "-"
								}
							]
						}
					]
				},
				{
					name: "Ñuble",
					communes: [
						{
							name: "Chillán",
							complex: [
								{
									name: "-",
									id: "-"
								}
							]
						}
					]
				},
				{
					name: "Biobío",
					communes: [
						{
							name: "Concepción",
							complex: [
								{
									name: "-",
									id: "-"
								}
							]
						}
					]
				},
				{
					name: "La Araucanía",
					communes: [
						{
							name: "Temuco",
							complex: [
								{
									name: "-",
									id: "-"
								}
							]
						}
					]
				},
				{
					name: "Los Ríos",
					communes: [
						{
							name: "Valdivia",
							complex: [
								{
									name: "-",
									id: "-"
								}
							]
						}
					]
				},
				{
					name: "Los Lagos",
					communes: [
						{
							name: "Puerto Montt",
							complex: [
								{
									name: "-",
									id: "-"
								}
							]
						},
						{
							name: "Castro",
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
						}
					]
				},
				{
					name: "Aysén del General Carlos Ibáñez del Campo",
					communes: [
						{
							name: "Coyhaique",
							complex: [
								{
									name: "-",
									id: "-"
								}
							]
						}
					]
				},
				{
					name: "Magallanes y la Antártica Chilena",
					communes: [
						{
							name: "Punta Arenas",
							complex: [
								{
									name: "-",
									id: "-"
								}
							]
						}
					]
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }));
				// .catch(error => console.log("Error loading message from backend", error));
			},
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
