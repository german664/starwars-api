const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			characterInfo: [],
			planetsInfo: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => { },
			loadPeopleData: async () => {
				const result = await fetch("https://swapi.dev/api/people/");
				const data = await result.json();

				setStore({ people: data.results });
			},
			loadPlanetsData: async () => {
				const result = await fetch("https://swapi.dev/api/planets/");
				const data = await result.json();

				setStore({ planets: data.results });
			},
			loadCharacterData: async character => {
				const result = await fetch(character);
				const data = await result.json();
				setStore({ characterInfo: data });
			},
			loadPlanetData: async currentPlanet => {
				const result = await fetch(currentPlanet);
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
				if (!store.favorites.includes(title)) {
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
