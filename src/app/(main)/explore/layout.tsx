"use client";

import { usePathname } from "next/navigation";
import styles from "./layout.module.css";
import Search from "../../../components/search/page";
import { Link } from "@heroui/react";

const ExploreLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isCommercialActive = pathname.includes("/commercial");
  const isOpenActive = pathname.includes("/open");

  return (
    <section className={styles.explore_layout}>
      <div className={styles.explore_search}>
        <Search />
      </div>
      <header className={styles.explore_option}>
        <Link
          className={`${styles.link_commercial} ${isCommercialActive ? styles.active : ''}`}
          href={"/explore/commercial"}
        >
          <button className={styles.commercial}>
            Commercial
          </button>
        </Link>
        <Link
          className={`${styles.link_open} ${isOpenActive ? styles.active : ''}`}
          href={"/explore/open"}
        >
          <button className={styles.open}>
            Open
          </button>
        </Link>
      </header>
      <div className={styles.explore_content}>
        {children}
      </div>
    </section>
  );
};

export default ExploreLayout;
