import { writable } from "svelte/store";

const PollStore = writable(
  [
    {
      id: 1,
      question: 'JavaScript or Python?',
      answerA: 'JavaScript',
      answerB: 'Python',
      voteA: 15,
      voteB: 7
    }
  ]
);

export default PollStore;