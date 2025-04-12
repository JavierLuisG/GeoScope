"use client";

import { Tooltip, Link, Button } from "@heroui/react";
import styles from "./page.module.css";

const Page: React.FC = () => {
  const placement = [
    { icon: "/satellite.svg", name: "New Image" },
    { icon: "/earth-existing-image.svg", name: "Existing Image" },
    { icon: "/myAOI.svg", name: "My Areas" },
    { icon: "/shopping-cart.svg", name: "My Cart" },
    { icon: "/profile.svg", name: "My Profile" }
  ]

  return (
    <section className={styles.sidebar_section}>
      <article className={styles.sidebar_article}>
        <Button
          className={styles.sidebar_logo}
          as={Link}
          href={"/"}
        >
          <img className={`${styles.img_sidebar} ${styles.principal_icon}`} src="/principal-navbar.svg" />
        </Button>
        <hr aria-orientation="horizontal" className={styles.hr_line} />
        {placement.map((placement) => (
          <Tooltip
            key={placement.name}
            placement="right"
            className={styles.tooltip_sidebar}
            content={placement.name}
            offset={14}
          >
            <Button
              className={styles.sidebar_btn}
              as={Link}
              href={"/"}
            >
              <img className={styles.img_sidebar} src={placement.icon} />
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