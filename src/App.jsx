import { useState } from "react";
import "./App.css";
import Query from "./components/Query";

function App() {
	return (
		<>
			<h1 className="search-title">Open Library Search</h1>
			<Query />
		</>
	);
}

export default App;
