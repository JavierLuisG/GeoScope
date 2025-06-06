"use client";

import { useEffect, useState } from "react";
import Explore from "../page";

const CommercialPage = () => {
  const [savedAoi, setSavedAoi] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSavedAoi(localStorage.getItem("aoi"));
    }
  }, []);

  return (
    <>
      {!savedAoi && <Explore />}
    </>
  );
};

export default CommercialPage;