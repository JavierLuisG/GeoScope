"use client";

import styles from "./layout.module.css";
import Search from "../../../components/search/page";

const ExploreLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className={styles.explore_layout}>
      <div className={styles.explore_search}>
        <Search />
      </div>
      <header className={styles.header}>
      </header>
      <div className={styles.explore_content}>
        {children}
      </div>
    </section>
  );
};

export default ExploreLayout;
