export default function stateWithNewAnswer(state, payload) {
  return {
    ...state,
    [payload.lesson]: {
      ...state[payload.lesson],
      answers: {
        ...state[payload.lesson]?.answers,
        [payload.id]: {
          value: payload.value,
          index: payload.currSelectedIndex,
          correctAnswerIndex: payload.correctAnswerIndex,
        },
      },
    },
  };
}
