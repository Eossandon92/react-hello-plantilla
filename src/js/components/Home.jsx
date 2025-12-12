import React from "react";
import Navbar from "./Navbar";
import Me from "./Me";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Me />
		</div>
	);
};

export default Home;