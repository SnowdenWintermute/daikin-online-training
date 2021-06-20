export default function setQuizCompletion(state, payload) {
  if (
    Object.keys(state[payload.lesson].pagesCompletionStatus).length ===
    state[payload.lesson].numTotalPages
  ) {
    let allCorrect = true;
    Object.keys(state[payload.lesson].pagesCompletionStatus).forEach((key) => {
      console.log(state[payload.lesson].pagesCompletionStatus[key]);
      if (!state[payload.lesson].pagesCompletionStatus[key]) allCorrect = false;
    });
    state[payload.lesson].isComplete = allCorrect;
  } else state[payload.lesson].isComplete = false;
}
