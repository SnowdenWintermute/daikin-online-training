export default function setPageCompletion(state, payload) {
  Object.keys(state[payload.lesson].questionIdsByPage).forEach((key) => {
    let currPageIsComplete = true;
    state[payload.lesson].questionIdsByPage[key].forEach((id) => {
      if (!state[payload.lesson].answers[id] || !state[payload.lesson].answers[id].isCorrect)
        currPageIsComplete = false;
    });
    if (!state[payload.lesson].pagesCompletionStatus)
      state[payload.lesson].pagesCompletionStatus = {};
    state[payload.lesson].pagesCompletionStatus[key] = currPageIsComplete;
  });
}
