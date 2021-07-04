export default function setTestCompletion(state, payload) {
  if (!state) return;
  if (
    state[payload.lesson].totalNumQuestions === Object.keys(state[payload.lesson].answers).length
  ) {
    state[payload.lesson].isComplete = true;
  } else state[payload.lesson].isComplete = false;
}
