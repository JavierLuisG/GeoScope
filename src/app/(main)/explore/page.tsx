"use client";

import styles from "./page.module.css";
import SearchPlus from "../../../assets/icons/search-plus.svg";
import { useRouter } from "next/navigation";

const Explore = () => {
  const router = useRouter();

  const handleClickArea = () => {
    const aoi = "POLYGON((-98.274391 30.167005, -97.422951 30.167005, -97.422951 31.008717, -98.274391 31.008717, -98.274391 30.167005))"
    if (aoi) {
      localStorage.setItem("aoi", encodeURIComponent(aoi));
      router.push(`/explore/commercial/${encodeURIComponent(aoi)}`);
    }
  };

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
        <button className={styles.btn_createAOI} onClick={handleClickArea}>
          YOUR AREA OF INTEREST
        </button>
      </div>
    </section>
  );
};

export default Explore;