import { writable } from "svelte/store";

const PollsStore = writable(
  [
		{
			id: 1,
			question: 'Python or Node.js?',
			answerA: 'Python',
			answerB: 'Node.js',
			voteA: 8,
			voteB: 15
		}
  ]
);

export default PollsStore;