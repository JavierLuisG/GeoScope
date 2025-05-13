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

const CommercialAOIPage = () => {
  const { state, dispatch } = useContextGlobal();
  const containerRef = useRef<HTMLDivElement>(null); // Referencia al contenedor con scroll
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
            className="scroll_container"
            ref={containerRef}
            onScroll={handleScroll} // Detecta el evento de scroll
          >
            <section className={styles.container_cards}>
              {state.imageOpen?.map((image: Image) => (
                <CardImage key={image.archiveId} image={image}/>
              ))}
              <div className={styles.link_taskingorder}>
                <p>Not finding what you&apos;re looking for?</p>
                <Link href={"#"}>ORDER NEW IMAGE</Link>
              </div>
            </section>
          </div>
        )
      }
    </>
  );
};

export default CommercialAOIPage;