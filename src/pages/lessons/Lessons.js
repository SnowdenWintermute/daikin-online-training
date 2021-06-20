import React from "react";
// import { useDispatch } from "react-redux";
import LessonCard from "./LessonCard";

const Lessons = ({ match, history }) => {
  let lessons = [];
  let topic = match.params.topic;
  switch (topic) {
    case "chillers":
      lessons = ["Chillers", "Heaters"];
      break;
    case "heaters":
      lessons = ["heaters"];
      break;
    default:
      lessons = [];
  }

  return (
    <div className="lessons">
      {lessons.length < 1 ? (
        "No lessons found in this topic"
      ) : (
        <h2 className={"lessons-header"}>
          <button onClick={() => history.goBack()}>Go Back</button> Lessons about{" "}
          {topic[0].toUpperCase() + topic.substring(1)}
        </h2>
      )}
      <div className="lessons-holder">
        {lessons.map((lesson, i) => (
          <LessonCard key={i} title={lesson} />
        ))}
      </div>
    </div>
  );
};

export default Lessons;
