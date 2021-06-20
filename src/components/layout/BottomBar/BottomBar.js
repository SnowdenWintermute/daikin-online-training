import React, { useState } from "react";
import "./bottomBar.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearProgress } from "../../../store/actions/generic";
import { LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import DangerButton from "../../buttons/DangerButton";
import ClearProgressModal from "./ClearProgressModal";

const useStyles = makeStyles(() => ({
  progress: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    marginBottom: 10,
  },
}));

const BottomBar = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const lesson = useSelector((state) => state.lessons.currentLesson);
  const quiz = useSelector((state) => state.quiz[lesson]);
  const percentComplete = Math.round(((quiz?.pageNumber - 1) / quiz?.numTotalPages) * 100) || 0;
  const handleClearProgress = () => {
    console.log(lesson);
    dispatch(clearProgress(lesson));
    setModalOpen(false);
  };
  return (
    <div className="bottom-bar">
      <Link className="bottom-bar-back-button" to="/">
        Other Lessons
      </Link>
      <div className="progress-holder">
        <LinearProgress
          value={percentComplete}
          className={classes.progress}
          // style={{ width: "100%" }}
          variant="determinate"
        />
        <div className="progress-text">
          Page {quiz?.pageNumber} / {quiz?.numTotalPages || 0} ({percentComplete}%)
        </div>
      </div>
      <DangerButton onClick={() => setModalOpen(true)} text="Clear Progress" />
      <ClearProgressModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        handleClearProgress={handleClearProgress}
      />
    </div>
  );
};

export default BottomBar;
