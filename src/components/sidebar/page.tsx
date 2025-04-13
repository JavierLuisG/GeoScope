"use client";

import { Tooltip, Link, Button } from "@heroui/react";
import styles from "./page.module.css";
import Logo from '../../assets/icons/logo.svg';
import Satellite from '../../assets/icons/satellite.svg';
import Earth from '../../assets/icons/earth.svg';
import MyAOI from '../../assets/icons/myAOI.svg';
import Shopping from '../../assets/icons/shopping-cart.svg';
import Profile from '../../assets/icons/profile.svg';

interface PlacementItem {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  name: string;
  path: string;
}

const Page: React.FC = () => {
  const placement: PlacementItem[] = [
    { icon: Satellite, name: "New Image", path: "/" },
    { icon: Earth, name: "Existing Image", path: "/" },
    { icon: MyAOI, name: "My Areas", path: "/" },
    { icon: Shopping, name: "My Cart", path: "/" },
    { icon: Profile, name: "My Profile", path: "/" }
  ]

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
        {placement.map((item) => (
          <Tooltip
            key={item.name}
            placement="right"
            className={styles.tooltip_sidebar}
            content={item.name}
            offset={14}
          >
            <Button
              className={styles.sidebar_btn}
              as={Link}
              href={item.path}
            >
              <item.icon className={`${styles.icons}`} />
              <p className={styles.text_name_btn}>{item.name}</p>
            </Button>
          </Tooltip>
        ))}
      </article>
      <article>
        <hr aria-orientation="horizontal" className={styles.hr_line} />
        <Link href={"/"}>
          <button className={`${styles.sidebar_btn} ${styles.sidebar_btn_us}`}>
            <p className={styles.text_us}>US</p>
          </button>
        </Link>
      </article>
    </section>
  )
}

export default Page;