"use client";

import styles from "./page.module.css";
import SearchPlus from "../../../assets/icons/search-plus.svg";

const Explore = () => {
  return (
    <section> 
      <div className={styles.formAOI_container}>
        <SearchPlus className={styles.icon_search} />
        <div className={styles.form_text_container}>
          <p className={styles.text_quetion}>
            Searching for existing images in this area?
          </p>
          <p className={styles.text_info}>
            Define your Area of Interest and browse our archive
          </p>
        </div>
        <button className={styles.btn_createAOI}>YOUR AREA OF INTEREST</button>
      </div>
    </section>
  );
};

export default Explore;