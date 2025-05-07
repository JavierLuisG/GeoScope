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
  footprint: object; // puedes usar un tipo más preciso si tienes GeoJSON definido
  minSqKm: number;
  maxSqKm: number;
  priceForOneSquareKm: number;
  priceFullScene: number;
  openData: boolean;
  totalAreaSquareKm: number;
  deliveryTimeHours: number;
  thumbnailUrls: string[];
  gsd: number;
  tilesUrl: string;
}

export interface State {
  imageOpen: ImageOpenData[];
}

export const initialState: State = {
  imageOpen: [],
}

export interface Action<T = unknown> {
  type: string;
  payload?: T;
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "GET_OPENDATA": // contiene las imagenes obtenidas de la API
      return { ...state, imageOpen: action.payload as ImageOpenData[] };
    default:
      return state;
  }
}