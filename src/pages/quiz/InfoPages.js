import React from "react";
import { useSelector } from "react-redux";
import InfoPage from "./InfoPage";

const InfoPages = ({ pages }) => {
  const lesson = useSelector((state) => state.lessons.currentLesson);
  const currentPage = useSelector((state) => state.quiz[lesson]?.pageNumber);
  return (
    <div>
      <InfoPage content={pages[currentPage - 1]} />
    </div>
  );
};

export default InfoPages;
