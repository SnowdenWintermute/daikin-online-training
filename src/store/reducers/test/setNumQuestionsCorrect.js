export default function setNumQuestionsCorrect(state, payload) {
  let correctAnswersCounter = 0;
  Object.keys(state[payload.lesson].answers).forEach((key) => {
    if (
      state[payload.lesson].answers[key].index ===
      state[payload.lesson].answers[key].correctAnswerIndex
    )
      correctAnswersCounter += 1;
  });
  state[payload.lesson].numQuestionsCorrect = correctAnswersCounter;
}
