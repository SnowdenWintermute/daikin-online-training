import { QUESTION } from "../types";
const chillers = [
  {
    type: QUESTION,
    questionText: "What does WC stand for?",
    correctAnswerIndex: 0,
    answers: [
      {
        value: "Water Cooled",
      },
      {
        value: "Well Clotted",
      },
      {
        value: "Wednesday Cluster",
      },
      {
        value: "Willard Clam",
      },
    ],
  },
  {
    type: QUESTION,
    questionText: "What does AC Stand for",
    correctAnswerIndex: 3,
    answers: [
      {
        value: "Anal Column",
      },
      {
        value: "Angel Canter",
      },
      {
        value: "Amarillo Cruz",
      },
      {
        value: "Air Cooled",
      },
    ],
  },
  {
    type: QUESTION,
    questionText: "What is the plate heat exchanger made of on an Evaporator?",
    correctAnswerIndex: 2,
    answers: [
      {
        value: "Bread",
      },
      {
        value: "Toothpaste",
      },
      {
        value:
          "Stainless steel plates welded together closely to ensure high efficiency heat exchange",
      },
      {
        value: "Buttered toast",
      },
    ],
  },
  {
    type: QUESTION,
    questionText:
      "Our two-stage, fixed scroll, digital and variable compressors have better liquid handling properties. Because of its axial and radial shape, it allows parts of the scroll to be separated in the presence of coolant, thus offering protection against liquid damage. What is square root of pi?",
    correctAnswerIndex: 2,
    answers: [
      {
        value: "Tanzania",
      },
      {
        value: "Leftovers",
      },
      {
        value:
          "Stainless steel plates welded together closely to ensure high efficiency butter spread",
      },
      {
        value:
          "They are more efficient over the full operating range, operating at sound levels and lower vibration than traditional compressors, it has 70% fewer moving parts, startability under any load on the system, without removing components, easy service and maintenance due to its compact size and lightweight and simple design, built to achieve optimum performance with current refrigerants without chlorine, without complex internal suction valves and discharge for quieter operation and increased reliability.",
      },
    ],
  },
];

export default chillers;
