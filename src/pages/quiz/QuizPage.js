import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import MultipleChoice from "../../components/questions/MultipleChoice/MultipleChoice";
import NextButton from "../../components/buttons/NextButton";
import PrevButton from "../../components/buttons/PrevButton";
import { QUESTION } from "../../content/types";
import "./quizPage.css";
import { setPageNumber } from "../../store/actions/quiz";
import TextBox from "../../components/text/TextBox";

const QuizPage = ({ content }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const lesson = useSelector((state) => state.lessons?.currentLesson);
  const currentPage = useSelector((state) => state.quiz[lesson]?.pageNumber);
  const numTotalPages = useSelector((state) => state.quiz[lesson]?.numTotalPages);
  const allQuestionsCorrect = useSelector((state) => {
    if (!state.quiz[lesson]?.pagesCompletionStatus) return false;
    return state.quiz[lesson]?.pagesCompletionStatus[currentPage - 1];
  });

  const handleNextClick = () => {
    if (currentPage < numTotalPages) {
      dispatch(setPageNumber({ currPageNum: currentPage + 1, lesson }));
    } else if (currentPage === numTotalPages) history.push(`/test/${lesson}`);
  };
  const handlePrevClick = () => {
    if (currentPage > 1) dispatch(setPageNumber({ currPageNum: currentPage - 1, lesson }));
  };

  return (
    <div>
      <h2>
        {lesson} page {currentPage}
      </h2>
      {content.map((item) => {
        if (item.type === QUESTION) {
          return <MultipleChoice question={item} id={item.id} key={item.id} />;
        } else return <TextBox key={item.id} text={item.text} />;
      })}
      <div className="bottom-buttons-holder">
        <PrevButton onClick={handlePrevClick} disabled={currentPage <= 1} />
        <NextButton onClick={handleNextClick} disabled={!allQuestionsCorrect} />
      </div>
    </div>
  );
};

export default QuizPage;
