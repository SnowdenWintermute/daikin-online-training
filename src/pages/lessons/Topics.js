import React from "react";
// import { useDispatch } from "react-redux";
import TopicCard from "./TopicCard";

const Topics = () => {
  const topics = ["Chillers", "Heaters"];

  return (
    <div className="topics">
      <h2 className="lessons-header">Choose a topic</h2>
      <div className="topics-holder">
        {topics.map((lesson, i) => (
          <TopicCard key={i} title={lesson} />
        ))}
      </div>
    </div>
  );
};

export default Topics;
