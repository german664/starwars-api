import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { withRouter } from "react-router";

const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className={"navbar navbar-light bg-light mb-3 fixed-top"}>
			<Link to="/">
				<img
					src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png"
					className="logo"
				/>
			</Link>
			<div className="ml-auto mr-4">
				<div className="dropdown">
					<button
						className="btn btn-primary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites {"(" + store.favorites.length + ")"}{" "}
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						{store.favorites.length > 0 ? (
							store.favorites.map((el, i) => {
								return (
									<>
										<Link to="/character" key={i} className="dropdown-item" href="#">
											{el}
										</Link>
										<i
											className="far fa-trash-alt float-right"
											onClick={() => {
												actions.deleteFavorites(i);
											}}
										/>
									</>
								);
							})
						) : (
							<p className="pl-5">(Empty)</p>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default withRouter(Navbar);
