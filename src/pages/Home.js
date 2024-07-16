import React from "react";
import Header from "../components/Header";
import Landing from "../components/Landing";
import CatMeme from "../components/CatMeme";
import Game from "../components/CatGame";
import Buy from "../components/Buy";
import Token from "../components/Token";
import Footer from "../components/Footer";
import MemeSection from "../components/MemeSection";

const Home = () => {
	return (
		<>
			<Header />
			<Landing />
			<CatMeme />
			{/* <Game /> */}
			<Buy />
			<Token />
			<MemeSection />
			{/* <Footer /> */}
		</>
	);
};

export default Home;
