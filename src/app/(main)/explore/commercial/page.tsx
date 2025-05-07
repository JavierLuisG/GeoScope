"use client";

import Explore from "../page";

const CommercialPage = () => {
  let aoi = localStorage.getItem("aoi") || null;

  return (
    <>
      {!aoi && <Explore />}
    </>
  );
};

export default CommercialPage;