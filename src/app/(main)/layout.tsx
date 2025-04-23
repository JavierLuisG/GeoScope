"use client";

import { usePathname } from "next/navigation";
import SidebarMenu from "../../components/sidebar/page";
import styles from "./layout.module.css";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  // Verifica si estás en la raíz ("/") para ocultar el contenedor
  const isRoot = pathname === "/";

  return (
    <main className={styles.main_container}>
      <div className={styles.section_sidebar}>
        <SidebarMenu />
        {!isRoot && (
          <section className={styles.section_options}>
            {children}
          </section>
        )}
      </div>
      <div className={styles.section_map}>
      </div>
    </main>
  );
};

export default MainLayout;
