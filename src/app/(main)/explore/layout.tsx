"use client";

import Filter from "../../../components/filter/page";
import { usePathname } from "next/navigation";
import styles from "./layout.module.css";
import Search from "../../../components/search/page";
import { Link } from "@heroui/react";
import { useEffect, useState } from "react";

const ExploreLayout = ({ children }: { children: React.ReactNode }) => {
  const [savedAoi, setSavedAoi] = useState<string | null>(null);
  const pathname = usePathname();
  
  const isCommercialActive = pathname.includes("/commercial");
  const isOpenActive = pathname.includes("/open");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSavedAoi(localStorage.getItem("aoi"));
    }
  }, []);

  return (
    <section className={styles.explore_layout}>
      <div className={styles.explore_search}>
        <Search />
      </div>
      <header className={styles.explore_option}>
        <Link
          className={`${styles.link_commercial} ${isCommercialActive ? styles.active : ''}`}
          href={!savedAoi ? "/explore/commercial" : `/explore/commercial/${savedAoi}`}
        >
          <button className={styles.commercial}>
            Commercial
          </button>
        </Link>
        <Link
          className={`${styles.link_open} ${isOpenActive ? styles.active : ''}`}
          href={!savedAoi ? "/explore/open" : `/explore/open/${savedAoi}`}
        >
          <button className={styles.open}>
            Open
          </button>
        </Link>
      </header>
      <div className={styles.filter_container}>
        <Filter />
      </div>
      <div>
        {children}
      </div>
    </section>
  );
};

export default ExploreLayout;
