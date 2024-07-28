import React from "react";
import Header from "../components/Header";
import Landing from "../components/Landing";
import CatMeme from "../components/CatMeme";
import Game from "../components/CatGame";
import Buy from "../components/Buy";
import Token from "../components/Token";
import Footer from "../components/Footer";
import MemeSection from "../components/MemeSection";
import About from "../components/About";
import Roadmap from "../components/Roadmap";
import EndlessRunner from "../components/EndlessRunner";

const Home = () => {
	return (
		<>
			<div className="hidden md:block">
				<Header />
			</div>
			<Landing />
			<About />
			<div className="hidden md:block">
				<CatMeme />
			</div>
			{/* <Game /> */}
			{/* <EndlessRunner /> */}
			<Buy />
			<MemeSection />
			<Roadmap />
			<Token />
			{/* <Footer /> */}
		</>
	);
};

export default Home;
