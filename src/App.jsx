import "./App.css";
import Query from "./components/Query";

function App() {
  return (
    <>
      <h1 className="search-title">Open Library Search</h1>
      <p className="search-desc">Find a book</p>
      <Query />
    </>
  );
}

export default App;
