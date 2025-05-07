"use client";

import Explore from "../page";

const OpenPage = () => {
  const aoi = localStorage.getItem("aoi") || null;
  
  return (
    <>
      {!aoi && <Explore />}
    </>
  );
};

export default OpenPage;