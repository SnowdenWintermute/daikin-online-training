import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import MultipleChoice from "../../components/questions/MultipleChoice/MultipleChoice";
import NextButton from "../../components/buttons/NextButton";
import PrevButton from "../../components/buttons/PrevButton";
import { QUESTION } from "../../content/types";
import "./quizPage.css";
import { setPageNumber } from "../../store/actions/quiz";
import TextBox from "../../components/text/TextBox";
import { setAnswerToQuestion } from "../../store/actions/quiz";

const QuizPage = ({ content }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const lesson = useSelector((state) => state.lessons?.currentLesson);
  const quiz = useSelector((state) => state.quiz[lesson]);
  const currentPage = useSelector((state) => state.quiz[lesson]?.pageNumber);
  const numTotalPages = useSelector((state) => state.quiz[lesson]?.numTotalPages);
  const allQuestionsCorrect = useSelector((state) => {
    if (!state.quiz[lesson]?.pagesCompletionStatus) return false;
    return state.quiz[lesson]?.pagesCompletionStatus[currentPage - 1];
  });

  const handleNextClick = () => {
    if (currentPage < numTotalPages) {
      dispatch(setPageNumber({ currPageNum: currentPage + 1, lesson }));
      window.scrollTo(0, 0);
    } else if (currentPage === numTotalPages) history.push(`/test/${lesson}`);
  };
  const handlePrevClick = () => {
    if (currentPage > 1) dispatch(setPageNumber({ currPageNum: currentPage - 1, lesson }));
  };

  const handleChange = (event, question, id) => {
    let newSelectedIndex;
    question.answers.forEach((answer, i) => {
      if (answer.value === event.target.value) newSelectedIndex = i;
    });
    dispatch(
      setAnswerToQuestion({
        lesson,
        id,
        currSelectedIndex: newSelectedIndex,
        value: event.target.value,
        correctAnswerIndex: question.correctAnswerIndex,
        page: question.page,
      })
    );
  };

  return (
    <div>
      <h2 className="quiz-page-header-text">
        <span className="quiz-page-lesson-name">{lesson}</span> page {currentPage} of{" "}
        {numTotalPages}
      </h2>
      {content.map((item) => {
        if (item.type === QUESTION) {
          return (
            <MultipleChoice
              question={item}
              id={item.id}
              key={item.id}
              handleChange={handleChange}
              value={quiz?.answers && quiz?.answers[item.id]?.value}
              showCorrect={quiz?.answers && quiz?.answers[item.id]?.isCorrect}
            />
          );
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
