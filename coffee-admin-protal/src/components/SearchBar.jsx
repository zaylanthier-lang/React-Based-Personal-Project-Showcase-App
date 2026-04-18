import { useEffect, useRef } from "react";
import { useStore } from "../context/StoreContext";

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useStore();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-input"
    />
  );
};

export default SearchBar;