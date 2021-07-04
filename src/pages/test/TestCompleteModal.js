import React from "react";
import { Modal } from "@material-ui/core";
import "./testCompleteModal.css";

const TestCompleteModal = ({ open, onClose, numQuestions, numCorrect }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="test-complete-modal-content">
        <h3>Test Complete</h3>
        <p>
          {numCorrect} of {numQuestions} correct ({Math.round((numCorrect / numQuestions) * 100)}%)
        </p>
        <button onClick={onClose}>Review Answers</button>
      </div>
    </Modal>
  );
};

export default TestCompleteModal;
