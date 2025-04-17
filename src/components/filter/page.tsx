"use client";

import styles from "./page.module.css";
import MageFilter from "../../assets/icons/mage-filter.svg";

const Filter = () => {
  return (
    <section className={styles.icon_filter}>
      <button
        className={styles.btn_icon}
      >
        <MageFilter className={styles.icon_mage}/>
      </button>
    </section>
  );
};

export default Filter;