import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import chillers from "../../content/tests/chillers.js";
import MultipleChoice from "../../components/questions/MultipleChoice/MultipleChoice.js";
import { setCurrentLesson } from "../../store/actions/lessons.js";
import {
  clearTestProgress,
  setAnswerToTestQuestion,
  setReviewingTestAnswers,
  setTotalNumQuestions,
} from "../../store/actions/test.js";
import "./test.css";
import TestCompleteModal from "./TestCompleteModal.js";
import Certificate from "./Certificate";
import TestHeader from "./TestHeader";

const Test = ({ match }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const lesson = match.params.lesson.toLowerCase() || null;
  const quiz = useSelector((state) => state.quiz[lesson]);
  const test = useSelector((state) => state.test[lesson]);
  const [testContent, setTestContent] = useState(null);
  const allQuestionsAnswered = test?.isComplete;
  const reviewingAnswers = test?.reviewingTestAnswers;
  const [testCompleteModalOpen, setTestCompleteModalOpen] = useState(false);
  const [certClamable, setCertClaimable] = useState(false);
  const [showCert, setShowCert] = useState(false);
  const percentCorrect = Math.floor((test?.numQuestionsCorrect / test?.totalNumQuestions) * 100);

  useEffect(() => {
    if (!quiz || !quiz?.isComplete) history.push(`/lessons/${lesson}`);
  }, [history, lesson, quiz]);

  useEffect(() => {
    dispatch(setCurrentLesson(lesson));
    switch (lesson) {
      case "chillers":
        setTestContent(chillers);
        break;
      default:
    }
  }, [dispatch, lesson]);

  useEffect(() => {
    dispatch(setTotalNumQuestions({ lesson, testContent }));
  }, [dispatch, testContent, lesson]);

  const handleChange = (event, question, id) => {
    let newSelectedIndex;
    question.answers.forEach((answer, i) => {
      if (answer.value === event.target.value) newSelectedIndex = i;
    });
    dispatch(
      setAnswerToTestQuestion({
        lesson,
        id,
        currSelectedIndex: newSelectedIndex,
        value: event.target.value,
        correctAnswerIndex: question.correctAnswerIndex,
      })
    );
  };

  useEffect(() => {
    if (percentCorrect > 70) setCertClaimable(true);
    else setCertClaimable(false);
  }, [test?.numQuestionsCorrect, test?.totalNumQuestions, percentCorrect]);

  const submitAnswers = () => {
    dispatch(setReviewingTestAnswers({ lesson, reviewingTestAnswers: true }));
    window.scrollTo(0, 0);
    setTestCompleteModalOpen(true);
  };

  const handleCloseModal = () => {
    setTestCompleteModalOpen(false);
    setTimeout(() => window.scrollTo(0, 0), 0);
  };

  const clearTest = () => {
    window.scrollTo(0, 0);
    dispatch(clearTestProgress(lesson));
    dispatch(setTotalNumQuestions({ lesson, testContent }));
    dispatch(setReviewingTestAnswers({ lesson, reviewingTestAnswers: false }));
  };

  if (showCert) return <Certificate lesson={lesson} />;

  return (
    <div className="test">
      <h2 className="test-title">{lesson} Test</h2>
      <TestHeader
        certClamable={certClamable}
        reviewingAnswers={reviewingAnswers}
        lesson={lesson}
        percentCorrect={percentCorrect}
        clearTest={clearTest}
      />
      <div className="test-questions-holder">
        {testContent ? (
          testContent.map((item, i) => {
            item.id = i + 1;
            let showIncorrect = false;
            if (
              test?.answers &&
              test?.answers[item.id]?.index !== test?.answers[item.id]?.correctAnswerIndex
            ) {
              showIncorrect = true;
            }
            return (
              <MultipleChoice
                question={item}
                id={item.id}
                key={i}
                value={
                  test?.answers
                    ? test?.answers[item.id]
                      ? test?.answers[item.id].value
                      : null
                    : null
                }
                disabled={reviewingAnswers}
                showCorrect={
                  reviewingAnswers &&
                  test?.answers[item.id]?.index === test?.answers[item.id]?.correctAnswerIndex
                }
                showIncorrect={reviewingAnswers && showIncorrect}
                handleChange={handleChange}
              />
            );
          })
        ) : (
          <div>No test has been made for this topic yet</div>
        )}
      </div>
      {test?.isComplete && !reviewingAnswers ? (
        <button className="button" onClick={submitAnswers} disabled={!allQuestionsAnswered}>
          Submit Answers
        </button>
      ) : (
        <>
          <TestHeader
            certClamable={certClamable}
            reviewingAnswers={reviewingAnswers}
            lesson={lesson}
            percentCorrect={percentCorrect}
            clearTest={clearTest}
          />
          <button className="button" onClick={clearTest}>
            Clear All Answers
          </button>
        </>
      )}
      <TestCompleteModal
        open={testCompleteModalOpen}
        onClose={handleCloseModal}
        numQuestions={test?.totalNumQuestions}
        numCorrect={test?.numQuestionsCorrect}
      />
    </div>
  );
};

export default Test;
