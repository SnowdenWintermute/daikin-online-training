export default function checkAnswer(state, payload) {
  if (
    state[payload.lesson].answers[payload.id].index ===
    state[payload.lesson].answers[payload.id].correctAnswerIndex
  ) {
    state[payload.lesson].answers[payload.id].isCorrect = true;
  } else state[payload.lesson].answers[payload.id].isCorrect = false;
}
