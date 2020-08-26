import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
const Planet = () => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	useEffect(() => {
		actions.loadPlanetData(id);
	}, []);
	return (
		<div className="container-fluid mt-5 pt-3">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-6 text-center">
						<img className="mx-auto img-fluid" src="https://via.placeholder.com/600x400.png" />
					</div>
					<div className="col-md-6 text-center">
						<h1>{store.planetsInfo.name}</h1>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industrys standard dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type specimen book. It has survived not only five
							centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
							It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
							passages, and more recently with desktop publishing software like Aldus PageMaker including
							versions of Lorem Ipsum.
						</p>
					</div>
				</div>
				<ul className="list-group list-group-horizontal-md d-flex justify-content-center lists text-center">
					<li className="list-group-item border-0">
						<strong>Name</strong> <br /> {store.planetsInfo.name}
					</li>
					<li className="list-group-item border-0">
						<strong>Climate</strong> <br /> {store.planetsInfo.climate}
					</li>
					<li className="list-group-item border-0">
						<strong>Population</strong> <br /> {store.planetsInfo.population}
					</li>
					<li className="list-group-item border-0">
						<strong>Orbital Period</strong> <br /> {store.planetsInfo.orbital_period}
					</li>
					<li className="list-group-item border-0">
						<strong>Rotation Period</strong> <br /> {store.planetsInfo.rotation_period}
					</li>
					<li className="list-group-item border-0">
						<strong>Diameter</strong> <br /> {store.planetsInfo.diameter}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Planet;
