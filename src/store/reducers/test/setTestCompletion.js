export default function setTestCompletion(state, payload) {
  // check if all questions are answered
  console.log(state[payload.lesson].totalNumQuestions);
  console.log(Object.keys(state[payload.lesson].answers).length);
  if (
    state[payload.lesson].totalNumQuestions === Object.keys(state[payload.lesson].answers).length
  ) {
    state[payload.lesson].isComplete = true;
  } else state[payload.lesson].isComplete = false;
}
