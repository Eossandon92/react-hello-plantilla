import React from "react";
import Navbar from "./Navbar";
import Me from "./Me";
import About from "./About";
import Skills from "./Skills";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Me />
			<About />
			<Skills />
		</div>
	);
};

export default Home;