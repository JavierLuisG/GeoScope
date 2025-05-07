"use client";

import styles from "./page.module.css";
import { Link } from "@heroui/react";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useContextGlobal } from "@/context/globalContext";
import { skyfiPlatformApiArchives } from "../../../../../services/archive";
import { filters } from "../../../../../utils/filtersArchiveData";

const CommercialAOIPage = () => {
  const { dispatch } = useContextGlobal();
  const params = useParams();
  useEffect(() => {
    const filterCommercial = {
      aoi: decodeURIComponent(params.aoi as string),
      resolutions: filters.resolutions,
      productTypes: filters.productTypes,
      providers: filters.providers,
      OpenData: filters.openData,
    };
    skyfiPlatformApiArchives(dispatch, filterCommercial);
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

export default CommercialAOIPage;