import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { useState } from "react";

function SearchInput() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    if (search == "") return;
    e.preventDefault();
    navigate(`/search/${search}`, { replace: false });
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.search}>
        <i className={`fa-solid fa-magnifying-glass ${styles.icon}`}></i>
        <input
          type="text"
          name="search"
          className={styles.input}
          autoComplete="off"
          aria-autocomplete="none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Product"
        />
      </div>
    </form>
  );
}

export default SearchInput;
