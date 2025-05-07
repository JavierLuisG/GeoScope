"use client";

import Explore from "../page";

const CommercialPage = () => {
  const aoi = localStorage.getItem("aoi") || null;

  return (
    <>
      {!aoi && <Explore />}
    </>
  );
};

export default CommercialPage;