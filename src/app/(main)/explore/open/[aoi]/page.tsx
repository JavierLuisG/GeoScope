"use client";

import styles from "./page.module.css";
import { Link } from "@heroui/react";
import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { useContextGlobal } from "@/context/globalContext";
import { continueCatalogArchives, skyfiPlatformApiArchives } from "../../../../../services/archive";
import { filters } from "../../../../../utils/filtersArchiveData";
import CardImage from "../../../../../components/cardImage/page";

interface Image {
  archiveId: string;
  provider: string;
  constellation: string;
  productType: string;
  platformResolution: number;
  resolution: string;
  captureTimestamp: string;
  cloudCoveragePercent: number;
  offNadirAngle: number;
  footprint: string;
  minSqKm: number;
  maxSqKm: number;
  priceForOneSquareKm: number;
  priceFullScene: number;
  openData: boolean;
  totalAreaSquareKm: number;
  deliveryTimeHours: number;
  thumbnailUrls: Record<string, string>;
  gsd: number;
  tilesUrl: string;
  overlapRatio: number;
  overlapSqkm: number;
}

const OpenAOIPage = () => {
  const { state, dispatch } = useContextGlobal();
  const containerRef = useRef<HTMLDivElement>(null);
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
  }, [dispatch, params.aoi]);

  const handleScroll = () => {
    const cont = containerRef.current;
    if (cont && cont.scrollTop + cont.clientHeight >= cont.scrollHeight - 5) {
      if (state.nextPage !== null) {        
        continueCatalogArchives(state.nextPage, dispatch);
      }
    }
  };

  return (
    <>
      {!params.aoi ?
        (<></>) :
        (
          <div
            className={styles.scroll_container}
            ref={containerRef}
            onScroll={handleScroll} // Detecta el evento de scroll
          >
            <section className={styles.container_cards}>
              {state.imageOpen?.map((image: Image) => (
                <CardImage key={image.archiveId} image={image} />
              ))}
              <div className={styles.link_taskingorder}>
                <p>Already selected some images?</p>
                <Link href={"/selected-images"}>VIEW SELECTED IMAGES</Link>
              </div>
            </section>
          </div>
        )
      }
    </>
  );
};

export default OpenAOIPage;