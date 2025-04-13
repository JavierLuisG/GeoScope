import Sidebar from "../components/sidebar/page";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main_container}>
      <Sidebar />
      <div className={styles.div_section}></div>
    </main>
  );
}
