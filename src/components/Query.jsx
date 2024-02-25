import React, { useEffect, useState } from "react";
import Results from "./Results";

export default function Query() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [query, setQuery] = useState("");

	//Fetch data
	useEffect(() => {
		async function getData() {
			try {
				const res = await fetch(
					`https://openlibrary.org/search.json?q=${query}`
				);
				const json = await res.json();

				setData(json);
				//console.log(json);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		}
		getData();
	}, [query]);

	//Enter key functionality
	useEffect(() => {
		const keyDownHandler = (event) => {
			if (event.key === "Enter") {
				event.preventDefault();

				handleSubmit();
			}
		};

		document.addEventListener("keydown", keyDownHandler);
	}, []);

	//Trigger data fetch upon input
	function handleSubmit() {
		const input = document.querySelector("#js-input").value;
		const queryString = input.replace(/ /g, "+");
		setLoading(true);
		setQuery(queryString);
	}

	return (
		<>
			<div className="search-wrapper">
				<label className="search-label" htmlFor="js-input">
					Book Title
				</label>
				<input
					id="js-input"
					name="js-input"
					className="search-input"
					type="text"
					placeholder="Enter a book title..."
				/>
				<button className="search-submit" onClick={handleSubmit}>
					Search
				</button>
			</div>
			{loading && <h2>Loading...</h2>}
			{error && <div className="error">ERROR: {error}</div>}
			{data && <Results data={data} />}
		</>
	);
}
