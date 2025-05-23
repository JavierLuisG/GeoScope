"use client";

import { usePathname, useRouter } from "next/navigation";
import { Link, Button } from "@heroui/react";
import styles from "./page.module.css";

import Logo from '../../assets/icons/logo.svg';
import Satellite from '../../assets/icons/satellite.svg';
import Earth from '../../assets/icons/earth.svg';
import MyAOI from '../../assets/icons/myAOI.svg';
import Shopping from '../../assets/icons/shopping-cart.svg';
import Profile from '../../assets/icons/profile.svg';

interface PlacementItem {
  id: number;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  name: string;
  path: string;
};

const SidebarMenu: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const placement: PlacementItem[] = [
    { id: 1, icon: Satellite, name: "Image", path: "/explore" },
    { id: 2, icon: Earth, name: "Explore", path: "/explore" },
    { id: 3, icon: MyAOI, name: "Areas", path: "/explore" },
    { id: 4, icon: Shopping, name: "Cart", path: "/explore" },
    { id: 5, icon: Profile, name: "Profile", path: "/explore" }
  ]

  const handleNavigation = (path: string) => {
    if (pathname === path) {
      router.push("/"); // Oculta el layout (main)
    } else {
      router.push(path); // Muestra el layout (main)
    }
  };

  return (
    <section className={styles.sidebar_section}>
      <article className={styles.sidebar_article}>
        <Button
          className={styles.sidebar_logo}
          as={Link}
          href={"/"}
        >
          <Logo className={`${styles.logo}`} />
        </Button>
        <hr aria-orientation="horizontal" className={styles.hr_line} />
        {placement.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Button
              key={item.id}
              className={`${styles.sidebar_btn} ${isActive ? styles.active : ""}`}
              onPress={() => handleNavigation(item.path)}
            >
              <item.icon className={`${styles.icons}`} />
              <p className={styles.text_name_btn}>{item.name}</p>
            </Button>
          );
        })}
      </article>
      <article className={styles.sidebar_article_us}>
        <hr aria-orientation="horizontal" className={styles.hr_line} />
        <Link href={"/"}>
          <button className={`${styles.sidebar_btn} ${styles.sidebar_btn_us}`}>
            <p className={styles.text_us}>US</p>
          </button>
        </Link>
      </article>
    </section>
  );
};

export default SidebarMenu;