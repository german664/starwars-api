import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const Character = () => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();

	useEffect(() => {
		actions.loadCharacterData(id);

		/* 		const peopleData = !!store.people ? store.people[id] : null;
					   console.log(peopleData);
					   if (peopleData !== null) {
						   setNewData(peopleData);
					   } */
	}, []);

	return (
		<div className="container-fluid mt-5 pt-3">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-6 text-center">
						<img className="mx-auto img-fluid" src="https://via.placeholder.com/600x400.png" />
					</div>
					<div className="col-md-6 text-center">
						<h1 className="mt-2">{store.characterInfo.name}</h1>
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
						<strong>Name</strong> <br /> {store.characterInfo.name}
					</li>
					<li className="list-group-item border-0">
						<strong>Birth Year</strong> <br /> {store.characterInfo.birth_year}
					</li>
					<li className="list-group-item border-0">
						<strong>Gender</strong> <br /> {store.characterInfo.gender}
					</li>
					<li className="list-group-item border-0">
						<strong>Height</strong> <br /> {store.characterInfo.height}
					</li>
					<li className="list-group-item border-0">
						<strong>Skin Color</strong> <br /> {store.characterInfo.skin_color}
					</li>
					<li className="list-group-item border-0">
						<strong>Eye Color</strong> <br /> {store.characterInfo.eye_color}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Character;
