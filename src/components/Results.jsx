import Entry from "./Entry";

export default function Results(props) {
  const entries = props.data.docs;

  console.log(entries);

  return (
    <>
      {props.data.numFound > 0 && (
        <h2 className="results-heading">Results: {props.data.numFound}</h2>
      )}

      <div className="entries">
        {entries.map((entry, index) => (
          <div className="entry" key={index}>
            {entry.key && (
              <a
                href={`https://openlibrary.org/${entry.key}/`}
                className="entry-flex"
                target="_blank"
              >
                <Entry entry={entry} />
              </a>
            )}
            {!entry.key && (
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
