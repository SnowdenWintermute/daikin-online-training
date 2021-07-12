import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./certificate.css";

const Certificate = ({ match }) => {
  const history = useHistory();
  const lesson = match.params.lesson.toLowerCase() || null;
  const user = useSelector((state) => state.user);
  const test = useSelector((state) => state.test[lesson]);
  const percentCorrect = Math.floor((test?.numQuestionsCorrect / test?.totalNumQuestions) * 100);

  useEffect(() => {
    if (percentCorrect < 70 || isNaN(percentCorrect)) history.push(`/test/${lesson}`);
  });

  return (
    <div className="certificate">
      <div className="bg-logo-holder">
        <img src={"/img/cf-logo.png"} alt="clima-flex-logo" />
      </div>
      This certifies that {user.firstName}
      {user.middleName && ` ${user.middleName}`}
      {user.lastName && ` ${user.lastName}`} has completed online training for the topic of {lesson}
    </div>
  );
};

export default Certificate;
