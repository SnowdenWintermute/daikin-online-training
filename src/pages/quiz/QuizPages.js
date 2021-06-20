import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import QuizPage from "./QuizPage";
import { QUESTION } from "../../content/types";
import { setPageNumber, setTotalNumPages, setQuestionIdsByPage } from "../../store/actions/quiz";

const QuizPages = ({ pages }) => {
  const dispatch = useDispatch();
  const lesson = useSelector((state) => state.lessons.currentLesson);
  const currentPage = useSelector((state) => state.quiz[lesson]?.pageNumber);
  const [loading, setLoading] = useState(true);

  const loadQuizPages = useCallback(() => {
    let numTotalPages = 0;
    let questionIdsByPage = {};
    let j = 0;
    pages.forEach((page, i) => {
      numTotalPages += 1;
      questionIdsByPage[i] = [];
      for (const item of page) {
        item.id = j;
        if (item.type === QUESTION) questionIdsByPage[i].push(item.id);
        j++;
      }
    });
    dispatch(setQuestionIdsByPage({ lesson, questionIdsByPage }));
    dispatch(setTotalNumPages({ numTotalPages, lesson }));
    if (!currentPage) dispatch(setPageNumber({ currPageNum: 1, lesson }));
    setLoading(false);
  }, [currentPage, dispatch, lesson, pages]);

  useEffect(() => {
    loadQuizPages();
  }, [loadQuizPages]);

  if (!loading) {
    return (
      <div>
        <QuizPage content={pages[currentPage ? currentPage - 1 : 0] || []} />
      </div>
    );
  } else return <div />;
};

export default QuizPages;
