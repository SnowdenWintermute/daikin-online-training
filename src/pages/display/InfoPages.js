import React from "react";
import { useSelector } from "react-redux";
import InfoPage from "./InfoPage";

import info1 from "../content/info1.js";
import info2 from "../content/info2.js";

const pages = [info1, info2];

const InfoPages = () => {
  const currentPage = useSelector((state) => state.pages.pageNumber);
  return (
    <div>
      <InfoPage content={pages[currentPage - 1 || 0]} />
    </div>
  );
};

export default InfoPages;
