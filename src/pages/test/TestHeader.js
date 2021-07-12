import React from "react";
import { Link } from "react-router-dom";

const TestHeader = ({ certClamable, reviewingAnswers, lesson, percentCorrect, clearTest }) => {
  return (
    <div className="test-description">
      {certClamable && reviewingAnswers ? (
        <Link className="button link-button" to={`/certificate/${lesson}`}>
          Claim Certificate
        </Link>
      ) : reviewingAnswers ? (
        <span>
          Scored {percentCorrect}% (must get 70% for certificate), retake?{" "}
          <button className="button" onClick={clearTest}>
            Retake Test
          </button>
        </span>
      ) : (
        <span>Score over 70% to obtain a certificate of completion</span>
      )}
    </div>
  );
};

export default TestHeader;
