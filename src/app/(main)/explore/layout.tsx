"use client";

import styles from "./page.module.css";
import Link from "next/link";
import Search from "../../../components/search/page";

const ExploreLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className={styles.explore_layout}>
      <div>
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
