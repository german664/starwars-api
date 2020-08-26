import React from "react";

const CardCarousel = () => {
	let widthcard = {
		width: "22rem"
	};
	let cardsss = (
		<div className="card" style={widthcard}>
			<img
				src="https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=630&h=354"
				className="card-img-top"
				alt="perro"
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);

	return (
		<>
			<div className="container ">
				<h3 className="text-danger">Characters</h3>
				<ul className="list-group list-group-horizontal card-carousel">
					<li>{cardsss}</li>
					<li>{cardsss}</li>
					<li>{cardsss}</li>
					<li>{cardsss}o</li>
					<li>{cardsss}</li>
					<li>{cardsss}</li>
					<li>{cardsss}</li>
				</ul>
			</div>
		</>
	);
};

export default CardCarousel;
