"use client";

import styles from "./page.module.css";
import SearchIcon from '../../assets/icons/search.svg';
import Square from '../../assets/icons/square.svg';

const Search: React.FC = () => {
  return (
    <section className={styles.search_section}>
      <label className={styles.label_search} htmlFor="search">
        <SearchIcon className={styles.icon_search} />
      </label>
      <input
        className={styles.input_search}
        type="text"
        id="search"
        placeholder="Search for place or coordinates"
      />
      <div className={styles.btn_search_container}>
        <button
          className={styles.btn_search}>
          <Square className={styles.icon_square} />
        </button>
      </div>
    </section>
  );
};

export default Search;