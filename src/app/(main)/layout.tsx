"use client";

import { usePathname } from "next/navigation";
import SidebarMenu from "../../components/sidebar/page";
import styles from "./page.module.css";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  // Verifica si estás en la raíz ("/") para ocultar el contenedor
  const isRoot = pathname === "/";

  return (
    <main className={styles.main_container}>
      <SidebarMenu />
      {!isRoot && (
        <section className={styles.section_options}>
          {children}
        </section>
      )}
    </main>
  );
};

export default MainLayout;
