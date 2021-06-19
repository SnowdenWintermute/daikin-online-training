import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MultipleChoice from "../../components/questions/MultipleChoice/MultipleChoice";
import NextButton from "../../components/buttons/NextButton";
import PrevButton from "../../components/buttons/PrevButton";
import { QUESTION, TEXT } from "../content/types";
import "./quizPage.css";
import { setPageNumber } from "../../store/actions/pages";

const QuizPage = ({ content }) => {
  const dispatch = useDispatch();
  const [allQuestionsCorrect, setAllQuestionsCorrect] = useState(false);
  const currentPage = useSelector((state) => state.pages.pageNumber);
  const totalNumPages = useSelector((state) => state.pages.totalNumPages);
  const quiz = useSelector((state) => state.quiz);

  useEffect(() => {
    setAllQuestionsCorrect(false);
    let anyQuestionIncorrect = false;
    content.forEach((item) => {
      if (item.type === QUESTION)
        if (typeof quiz[item.id] === undefined || quiz[item.id]?.index !== item.correctAnswerIndex)
          anyQuestionIncorrect = true;
    });
    setAllQuestionsCorrect(!anyQuestionIncorrect);
  }, [content, quiz, currentPage]);

  const handleNextClick = () => {
    setAllQuestionsCorrect(false);
    if (currentPage < totalNumPages) dispatch(setPageNumber(currentPage + 1));
  };
  const handlePrevClick = () => {
    if (currentPage > 1) dispatch(setPageNumber(currentPage - 1));
  };

  return (
    <div>
      {content.map((item) => {
        if (item.type === QUESTION) {
          return <MultipleChoice question={item} id={item.id} key={item.id} />;
        } else return <p key={item.id}>{item.text}</p>;
      })}
      <div className="bottom-buttons-holder">
        <PrevButton onClick={handlePrevClick} disabled={currentPage <= 1} />
        <NextButton onClick={handleNextClick} disabled={!allQuestionsCorrect} />
      </div>
    </div>
  );
};

export default QuizPage;
