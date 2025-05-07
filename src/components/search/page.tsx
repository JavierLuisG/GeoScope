"use client";

import styles from "./page.module.css";
import SearchIcon from '../../assets/icons/search.svg';
import Square from '../../assets/icons/square.svg';
import { useRouter } from "next/navigation";

const Search: React.FC = () => {
  const router = useRouter();

  const handleClickForm = () => {
    let aoi = "POLYGON((-98.274391 30.167005, -97.422951 30.167005, -97.422951 31.008717, -98.274391 31.008717, -98.274391 30.167005))"
    if (aoi) {
      localStorage.setItem("aoi", encodeURIComponent(aoi));
      router.push(`/explore/commercial/${encodeURIComponent(aoi)}`);
    }
  };

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
          className={styles.btn_search} onClick={handleClickForm}>
          <Square className={styles.icon_square} />
        </button>
      </div>
    </section>
  );
};

export default Search;