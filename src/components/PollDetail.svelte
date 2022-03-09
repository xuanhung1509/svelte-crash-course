<script>
  // import { createEventDispatcher } from 'svelte';
  // const dispatch = createEventDispatcher();

  import PollStore from '../stores/PollStore';
  import Button from '../shared/Button.svelte';
  import Card from '../shared/Card.svelte';
  import { tweened } from 'svelte/motion';

  export let poll;

  // Reactive values
  $: totalVotes = poll.voteA + poll.voteB;
  $: percentA = Math.floor(poll.voteA / totalVotes * 100) || 0;
  $: percentB = Math.floor(poll.voteB / totalVotes * 100) || 0;

  // Tweened percentage
  const tweenedA = tweened(0);
  const tweenedB = tweened(0);
  $: tweenedA.set(percentA);
  $: tweenedB.set(percentB);


  // Handle vote
  function voteHandler(id, answer) {
    PollStore.update(curData => {
      const upvotedPoll = curData.find(poll => poll.id === id);

      if (answer === 'a') {
        upvotedPoll.voteA++;
      }
      if (answer === 'b') {
        upvotedPoll.voteB++;
      }

      return curData;
    }); 
  }

  // Delete a poll
  function deleteHandler(id) {
    PollStore.update(curData => curData.filter(poll => poll.id !== id));
  }
</script>

<Card>
  <div class="poll">
    <h3>{poll.question}</h3>
    <small>Total votes: {totalVotes}</small>
    <div class="answer answer-a" on:click={() => voteHandler(poll.id, 'a')}>
      <div class="percent percent-a" style="width:{$tweenedA}%"></div>
      <span>{poll.answerA} ({poll.voteA})</span>
    </div>
    <div class="answer answer-b" on:click={() => voteHandler(poll.id, 'b')}>
      <div class="percent percent-b" style="width:{$tweenedB}%"></div>
      <span>{poll.answerB} ({poll.voteB})</span>
    </div>
    <div class="delete" on:click={() => deleteHandler(poll.id)}>
      <Button flat={true}>Delete</Button>
    </div>
  </div>
</Card>

<style>
  h3 {
    margin-bottom: 5px;
  }

  small {
    display: inline-block;
    margin-bottom: 20px;
  }

  .answer {
    cursor: pointer;
    position: relative;
    padding: 10px 20px;
    margin: 10px 0;
    background: #eee;
    border-radius: 5px;
  }
  
  .answer:hover {
    opacity: 0.6;
  }

  .percent {
    position: absolute;
    top: 0;
    left: 0;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    height: 100%;
  }

  .percent-a {
    background: rgba(217, 27, 66, 0.2);
    border-left: 5px solid #d91b42;
  }

  .percent-b {
    background: rgba(69, 196, 150, 0.2);
    border-left: 5px solid #45c496;
  }

  .delete {
    margin-top: 20px;
    text-align: center;
  }
</style>