"use client";

import SidebarMenu from "../../components/sidebar/page";
import styles from "./page.module.css";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={styles.main_container}>
      <SidebarMenu />
      <section className={styles.section_options}>
        {children}
      </section>
    </main>
  );
};

export default MainLayout;
