import React from "react";
import Entry from "./Entry";

export default function Results(props) {
	const entries = props.data.docs;

	return (
		<>
			{props.data.numFound > 0 && (
				<h2 className="results-heading">Results: {props.data.numFound}</h2>
			)}

			<div className="entries">
				{entries.map((entry, index) => (
					<div className="entry" key={index}>
						{entry.id_amazon && (
							<a
								href={`https://www.amazon.com/dp/${
									Array.isArray(entry.id_amazon) && entry.id_amazon[0] === ""
										? entry.id_amazon[1]
										: Array.isArray(entry.id_amazon)
										? entry.id_amazon[0]
										: entry.id_amazon
								}/`}
								className="entry-flex"
								target="_blank"
							>
								<Entry entry={entry} />
							</a>
						)}
						{!entry.id_amazon && (
							<div className="entry-flex">
								<Entry entry={entry} />
							</div>
						)}
					</div>
				))}
			</div>
		</>
	);
}
