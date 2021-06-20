import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import InfoPages from "./InfoPages.js";
import BottomBar from "../../components/layout/BottomBar/BottomBar.js";
import QuizPages from "./QuizPages.js";
import Sidebar from "../../components/layout/Sidebar/Sidebar.js";
import InfoWindow from "../../components/layout/InfoWindow/InfoWindow.js";
import page1 from "../../content/page1";
import page2 from "../../content/page2";
import info1 from "../../content/info1";
import info2 from "../../content/info2";
import { setCurrentLesson } from "../../store/actions/lessons.js";

const Quiz = ({ match }) => {
  const dispatch = useDispatch();
  const lesson = match.params.lesson.toLowerCase() || null;
  const [lessonQuiz, setLessonQuiz] = useState([]);
  const [lessonInfo, setLessonInfo] = useState([]);

  useEffect(() => {
    dispatch(setCurrentLesson(lesson));
    switch (lesson) {
      case "chillers":
        setLessonQuiz([page2]);
        setLessonInfo([info2]);
        break;
      case "heaters":
        setLessonQuiz([page1, page2]);
        setLessonInfo([info2, info1]);
        break;
      default:
    }
  }, [dispatch, lesson]);

  if (!lessonQuiz.length > 0) return <h1 style={{ padding: "20px" }}>No lesson found</h1>;
  return (
    <>
      <Sidebar>
        <QuizPages pages={lessonQuiz} />
      </Sidebar>
      <InfoWindow>
        <InfoPages pages={lessonInfo} />
      </InfoWindow>
      <BottomBar />
    </>
  );
};

export default Quiz;
