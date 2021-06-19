import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import QuizPage from "./QuizPage";
import page1 from "../content/page1";
import page2 from "../content/page2";
import { setPageNumber, setTotalNumPages } from "../../store/actions/pages";

const pages = [page1, page2];
const QuizPages = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.pages.pageNumber);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let i = 0;
    let numTotalPages = 0;
    pages.forEach((page) => {
      numTotalPages += 1;
      for (const item of page) {
        item.id = i;
        i++;
      }
    });
    dispatch(setTotalNumPages(numTotalPages));
    dispatch(setPageNumber(1));
    setLoading(true);
  }, [dispatch]);

  if (loading) {
    return (
      <div>
        <QuizPage content={pages[currentPage - 1 || 0]} />
      </div>
    );
  } else return <div />;
};

export default QuizPages;
