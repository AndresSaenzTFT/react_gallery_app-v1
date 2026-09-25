import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = ({ fetchData }) => {
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchText.trim()) return;

    fetchData(searchText);
    navigate(`/search/${searchText}`);
    setSearchText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <button type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;

