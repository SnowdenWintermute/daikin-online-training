import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import TopicCard from "./TopicCard";

const Topics = () => {
  const topics = ["Chillers", "Heaters"];
  const user = useSelector((state) => state.user);
  return (
    <div className="topics">
      <h2 className="lessons-header">Hello {user.firstName} - please choose a topic</h2>
      <h3>
        <Link to="/edit-name" className="edit-name-link">
          Edit Name
        </Link>
      </h3>
      <div className="topics-holder">
        {topics.map((lesson, i) => (
          <TopicCard key={i} title={lesson} />
        ))}
      </div>
    </div>
  );
};

export default Topics;
