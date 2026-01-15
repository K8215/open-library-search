export default function Entry(props) {
  return (
    <>
      <figure className="entry-image-wrapper">
        <img
          className="entry-image"
          src={`//covers.openlibrary.org/b/id/${props.entry.cover_i}-M.jpg`}
          alt={`${props.entry.title} cover`}
        />
      </figure>

      <div className="entry-info">
        <h2 className="entry-title">{props.entry.title}</h2>
        {props.entry.author_name && (
          <a
            className="entry-author-link"
            href={`https://openlibrary.org/authors/${props.entry.author_key}`}
            target="_blank"
          >
            <strong className="entry-author">
              {Array.isArray(props.entry.author_name)
                ? props.entry.author_name.slice(0, 5).join(", ")
                : props.entry.author_name}
            </strong>
          </a>
        )}
        {props.entry.first_publish_year && (
          <p>First Published: {props.entry.first_publish_year}</p>
        )}
        {props.entry.ratings_sortable && (
          <p>Average Rating: {props.entry.ratings_sortable.toFixed(1)}/5</p>
        )}
        {props.entry.subject && (
          <p className="entry-topics">
            Topics: {props.entry.subject.slice(0, 5).join(", ")}
          </p>
        )}
      </div>
    </>
  );
}
