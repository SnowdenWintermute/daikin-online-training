export default function setNumQuestionsCorrect(state, payload) {
  let count = 0;
  Object.keys(state[payload.lesson].answers).forEach((key) => {
    if (state[payload.lesson].answers[key].isCorrect) count += 1;
  });
  state[payload.lesson].numQuestionsCorrect = count;
}
