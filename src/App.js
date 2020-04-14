import React from "react";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Search from "./components/Search/search";
import "./app.css";

function App() {
	return (
		<>
			<div className='contentDiv'>
				<Header />
				<Search />
			</div>
			<Footer />
		</>
	);
}

export default App;
