"use client";

import { Link } from "@heroui/react";
import styles from "./page.module.css";
import Cloud from "../../assets/icons/cloud-sun.svg";

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

interface CardImageProps {
  image: Image;
}

const CardImageComponent = ({ image }: CardImageProps) => {
  /**
   * Capitaliza la primera letra de cada palabra en el texto, excepto cuando es "SAR".
   *
   * @param {string} text - Cadena de texto que será procesada.
   * @method .toLowerCase() - Convierte el texto a minúsculas.
   * @method .split() - Divide el texto en un array de palabras, en este caso usando un espacio como separador.
   * @method .map() - Aplica una función a cada palabra para capitalizar la primera letra.
   * @method .charAt(0).toUpperCase() - Convierte la primera letra de cada palabra en mayúscula.
   * @method .slice(1) - Obtiene el resto de la palabra a partir del segundo carácter.
   * @method .join() - Une las palabras capitalizadas en una cadena de texto separadas por espacios.
   * @returns {string} - El texto con la primera letra de cada palabra capitalizada, a excepción de "SAR".
   * Paso a paso:
   * 1. Si el texto no es "SAR", se convierte todo el texto a minúsculas.
   * 2. Se divide el texto en palabras utilizando .split(" ").
   * 3. Se aplica .map() a cada palabra para capitalizar la primera letra.
   * 4. El resultado se une de nuevo en una cadena utilizando .join(" ").
   * 5. Si el texto es "SAR", simplemente se devuelve sin modificaciones.
   */
  const textCapitalize = (text: string) => {
    if (text !== "SAR") {
      return text
        .toLowerCase()
        .split(" ")
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    } else {
      return text;
    }
  };

  /**
   * Convierte una cadena de fecha ISO en una fecha formateada en el estilo "día mes año"
   *
   * @param {string} isoString - Cadena de fecha que será procesada, "2000-01-01T00:00:00.024000-05:00".
   * @method Date - Convierte la cadena a un objeto Date.
   * @method Intl.DateTimeFormat - Un objeto nativo de JavaScript utilizado para formatear la fecha.
   * @method .format() - Convierte el objeto Date en una cadena formateada de acuerdo con las opciones de localización.
   * @returns {string} - Fecha formateada como, "1 January 2000".
   * Paso a paso:
   * 1. Se convierte "isoString" a un objeto "Date" utilizando "new Date(isoString)".
   * 2. Se define el formato de la fecha deseado utilizando un objeto. Se especifica que se quiere día, mes y año.
   * 3. Se utiliza "Intl.DateTimeFormat" con la localización "en-GB" (formato británico) pone día primero.
   * 4. El método ".format()" es aplicado al objeto "Date" para devolver la fecha como una cadena en el formato "día mes año".
   */
  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric"
    };
    return new Intl.DateTimeFormat("en-GB", options).format(date);
  };

  /**
   * Formatea el valor de la resolución (gsd) en centímetros o metros dependiendo de su tamaño.
   *
   * @param {number} gsd - Valor de la resolución en centímetros.
   * @method toFixed(0) - Redondea el valor a un número entero sin decimales.
   *
   * Paso a paso:
   * 1. Si el valor de "gsd" es menor a 100, se devuelve el valor redondeado en centímetros, agregando "cm" al final.
   * 2. Si el valor es igual o mayor a 100, se convierte a metros dividiendo por 100 y agregando "m" al final.
   */
  const sizeResolution = (gsd: number) => {
    if (gsd < 100) {
      return gsd.toFixed(0) + "cm";
    } else {
      return gsd / 100 + "m";
    }
  };

  return (
    <>
      {/* <Link to={`${routesExplore.detail}/${image.archiveId}`}> */}
      <Link href={"/"}>
        <div className={styles.card_container}>
          <section className={styles.caracterist_card}>
            <img
              className={styles.image_card}
              src={image.thumbnailUrls["300x300"]}
              alt=""
            />
            <section className={styles.info_card}>
              <p>{textCapitalize(image.productType)} Image</p>
              <p>{textCapitalize(image.resolution)}: {sizeResolution(image.gsd)}</p>
              <p>{formatDate(image.captureTimestamp)}</p>
              <p className={styles.cloud_p}>
                <Cloud className={styles.icon_cloud} />
                {image.cloudCoveragePercent.toFixed(2)}%
              </p>
            </section>
          </section>
          <section className={styles.price_container}>
            <div className={styles.price}>
              <h2>${image.priceForOneSquareKm.toFixed(2)} </h2>
              <p className={styles.text_price}>/ km2</p>
            </div>
            <div className={styles.delivery}>
              <p className={styles.text_delivery}>
                min. size {image.minSqKm.toFixed(0)}km2
              </p>
              <p className={styles.text_delivery}>
                Delivery in: {image.deliveryTimeHours.toFixed(0)}h
              </p>
            </div>
          </section>
        </div>
      </Link>
    </>
  );
};

export default CardImageComponent;
