const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: null,
			planets: [],
			characterInfo: [],
			planetsInfo: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {},
			loadPeopleData: () => {
				fetch("https://swapi.dev/api/people/")
					.then(result => result.json())
					.then(data => setStore({ people: data.results }));
			},
			loadPlanetsData: async () => {
				const result = await fetch("https://swapi.dev/api/planets/");
				const data = await result.json();

				setStore({ planets: data.results });
			},
			loadCharacterData: async id => {
				const result = await fetch(`https://swapi.dev/api/people/${id}`);
				const data = await result.json();
				setStore({ characterInfo: data });
			},
			loadPlanetData: async id => {
				const result = await fetch(`https://swapi.dev/api/planets/${id}`);
				const data = await result.json();
				setStore({ planetsInfo: data });
				console.log(data);
			},
			setCharacter: title => {
				setStore({ character: title });
			},
			setCurrentPlanet: title => {
				setStore({ currentPlanet: title });
			},
			setFavorites: title => {
				const store = getStore();
				if (!store.favorites.includes(title.name)) {
					setStore({ favorites: store.favorites.concat(title) });
				}
			},
			deleteFavorites: index => {
				const store = getStore();
				const [...newFavorites] = store.favorites;
				newFavorites.splice(index, 1);
				setStore({ favorites: newFavorites });
			}
		}
	};
};
export default getState;
