export interface ImageOpenData {
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

export interface State {
  imageOpen: ImageOpenData[];
  nextPage: string | null; // URL de la siguiente página de resultados
  detailImage: ImageOpenData | null; // Información de la imagen seleccionada para detalle
}

export const initialState: State = {
  imageOpen: [],
  nextPage: null,
  detailImage: null,
}

export type Action =
  | { type: "GET_OPENDATA"; payload: ImageOpenData[] }
  | { type: "NEXT_PAGE_OPENDATA"; payload: string | null }
  | { type: "GET_LOADINGMORE_OPENDATA"; payload: ImageOpenData[] }
  | { type: "GET_DETAILIMAGE"; payload: ImageOpenData };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "GET_OPENDATA": // contiene las imagenes obtenidas de la API
      return { ...state, imageOpen: action.payload };
    case "NEXT_PAGE_OPENDATA": // contiene el link de paginación
      return { ...state, nextPage: action.payload };
    case "GET_LOADINGMORE_OPENDATA": // agrega las nuevas imagenes obtenidas de nextPage
      // Filtrar las nuevas imágenes que no están ya en state.imageOpen
      const noRepit = action.payload.filter(
        (newImage) =>
          !state.imageOpen.some(
            (existingImage) => existingImage.archiveId === newImage.archiveId
          )
      );
      return { ...state, imageOpen: [...state.imageOpen, ...noRepit] };
    case "GET_DETAILIMAGE": // información que se muestra en Detail
      return { ...state, detailImage: action.payload };
    default:
      return state;
  }
}