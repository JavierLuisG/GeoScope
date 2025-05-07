import axios from "axios";

export const skyfiPlatformApiArchives = async (dispatch, filters) => {
  try {
    let request = {
      aoi: filters.aoi,
      fromDate: "2024-01-01T00:00:00",
      toDate: "2024-09-26T00:00:00",
      max_cloud_coverage_percent: 20,
      max_off_nadir_angle: 4,
      resolutions: filters.resolutions,
      productTypes: filters.productTypes,
      providers: filters.providers,
      openData: filters.openData,
      minOverlapRatio: "0.1",
      page_size: 10,
    };
    let archives_response = await axios.post(
      "/api/skyfi/archives",
      request,
    );
    let archives = archives_response.data;
    dispatch({ type: "GET_OPENDATA", payload: archives.archives });
    dispatch({ type: "NEXT_PAGE_OPENDATA", payload: archives.nextPage });
  } catch (error) {
    console.log("Error in skyfiPlatformApiArchives, " + error);
  }
};

export const continueCatalogArchives = async (nextPage, dispatch) => {
  try {
    let headers = { "X-Skyfi-Api-Key": apiKey };
    let archives_response = await axios.get(nextPage, { headers: headers });
    let archives = archives_response.data;
    dispatch({ type: "GET_LOADINGMORE_OPENDATA", payload: archives.archives });
    dispatch({ type: "NEXT_PAGE_OPENDATA", payload: archives.nextPage });
  } catch (error) {
    console.log("Error in continueCatalogArchives, " + error);
  }
};

export const skyfiPlatformApiGetArchive = async (id, dispatch) => {
  try {
    let archive_response = await axios.get(
      `/api/skyfi/archives/${id}`,
    );
    let archive = archive_response.data;
    dispatch({ type: "GET_DETAILIMAGE", payload: archive });
  } catch (error) {
    console.log("Error in skyfiPlatformApiGetArchive, " + error);
  }
};