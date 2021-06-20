import React from "react";
import { Modal } from "@material-ui/core";
import DangerButton from "../../buttons/DangerButton";
import "./clearProgressModal.css";

const ClearProgressModal = ({ open, onClose, handleClearProgress }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="clear-progress-modal-content">
        <h2>Are you sure you want to abandon all progress on this quiz?</h2>
        <div className="button-holder">
          <button className="button" onClick={onClose}>
            Nevermind
          </button>
          <DangerButton onClick={handleClearProgress} text="Clear Progress" />
        </div>
      </div>
    </Modal>
  );
};

export default ClearProgressModal;
