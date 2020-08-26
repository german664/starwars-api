import React, { useContext } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Home = () => {
	let widthcard = {
		width: "22rem"
	};

	const { store, actions } = useContext(Context);

	return (
		<>
			{/*---------------------------Characters------------------------*/}
			<div className="container mt-5 pt-3">
				<h3 className="text-danger">Characters</h3>
				<ul className="list-group list-group-horizontal card-carousel">
					{!!store.people &&
						store.people.map((el, i) => {
							return (
								<li key={i}>
									<div className="card" style={widthcard}>
										<img
											src="https://via.placeholder.com/400x200.png"
											className="card-img-top"
											alt="perro"
										/>
										<div className="card-body">
											<h5 className="card-title">{el.name}</h5>
											<ul className="p-0">
												<li>
													<strong>Gender:</strong> {el.gender}
												</li>
												<li>
													<strong>Hair Color:</strong> {el.hair_color}{" "}
												</li>
												<li>
													<strong>Eyes Color:</strong> {el.eye_color}{" "}
												</li>
											</ul>
											<Link to={`/character/${i + 1}`} className="btn btn-outline-primary">
												Go to character page
											</Link>
											<span
												className="btn btn-outline-warning float-right"
												onClick={() => {
													if (!store.favorites.some(favorite => favorite.name === el.name)) {
														actions.setFavorites([
															{
																name: el.name,
																id: i + 1,
																path: "character"
															}
														]);
													} else {
														actions.deleteFavorites(
															store.favorites.findIndex(fav => fav.name == el.name)
														);
													}
												}}>
												<i
													className={
														!store.favorites.some(favorite => favorite.name === el.name)
															? "far fa-heart"
															: "fas fa-heart"
													}
												/>
											</span>
										</div>
									</div>
								</li>
							);
						})}
				</ul>
			</div>
			{/*---------------------------Planets------------------------*/}
			<div className="container mb-5 mt-3">
				<h3 className="text-danger">Planets</h3>
				<ul className="list-group list-group-horizontal card-carousel">
					{store.planets.map((el, i) => {
						return (
							<li key={i}>
								<div className="card" style={widthcard}>
									<img
										src="https://via.placeholder.com/400x200.png"
										className="card-img-top"
										alt="perro"
									/>
									<div className="card-body">
										<h5 className="card-title">{el.name}</h5>
										<ul className="p-0">
											<li>
												<strong>Population:</strong> {el.population}
											</li>
											<li>
												<strong>Terrain:</strong> {el.terrain}{" "}
											</li>
										</ul>
										<Link to={`planet/${i + 1}`} className="btn btn-outline-primary">
											Go to planet page
										</Link>
										<span
											className="btn btn-outline-warning float-right"
											onClick={() => {
												if (!store.favorites.some(favorite => favorite.name === el.name)) {
													actions.setFavorites([
														{
															name: el.name,
															id: i + 1,
															path: "planet"
														}
													]);
												} else {
													actions.deleteFavorites(
														store.favorites.findIndex(fav => fav.name == el.name)
													);
												}
											}}>
											<i
												className={
													!store.favorites.some(favorite => favorite.name === el.name)
														? "far fa-heart"
														: "fas fa-heart"
												}
											/>
										</span>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
};
export default Home;
