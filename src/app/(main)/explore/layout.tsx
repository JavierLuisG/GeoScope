"use client";

import styles from "./page.module.css";
import Link from "next/link";

const ExploreLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className={styles.explore_layout}>
      <header className={styles.header}>
        <input type="text" placeholder="Search something..." className={styles.search_input} />
        <nav className={styles.nav_options}>
          <Link href="/explore/commercial">Commercial</Link>
          <Link href="/explore/open">Open</Link>
        </nav>
      </header>
      <div className={styles.explore_content}>
        {children}
      </div>
    </section>
  );
};

export default ExploreLayout;
