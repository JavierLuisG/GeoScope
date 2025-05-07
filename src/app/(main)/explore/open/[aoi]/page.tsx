"use client";

import styles from "./page.module.css";
import { Link } from "@heroui/react";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useContextGlobal } from "@/context/globalContext";
import { skyfiPlatformApiArchives } from "../../../../../services/archive";
import { filters } from "../../../../../utils/filtersArchiveData";

const OpenAOIPage = () => {
  const { dispatch } = useContextGlobal();
  const params = useParams();

  useEffect(() => {
    const filterOpen = {
      aoi: decodeURIComponent(params.aoi as string),
      resolutions: filters.resolutionsOpen,
      productTypes: filters.productTypesOpen,
      providers: filters.providers,
      OpenData: filters.openData,
    };
    skyfiPlatformApiArchives(dispatch, filterOpen);
  }, []);

  return (
    <>
      {!params.aoi ?
        (<></>) :
        (<section className={styles.container_cards}>
          <div className={styles.link_taskingorder}>
            <p>Not finding what you're looking for?</p>
            <Link href={"#"}>ORDER NEW IMAGE</Link>
          </div>
        </section>)
      }
    </>
  );
};

export default OpenAOIPage;