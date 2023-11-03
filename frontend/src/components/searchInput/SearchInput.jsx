import styles from "./styles.module.css";

function SearchInput() {
  return (
    <div className={styles.search}>
      <i className={`fa-solid fa-magnifying-glass ${styles.icon}`}></i>
      <input
        type="text"
        name="search"
        className={styles.input}
        autoComplete="off"
        aria-autocomplete="none"
        placeholder="Search Product"
      />
    </div>
  );
}

export default SearchInput;
