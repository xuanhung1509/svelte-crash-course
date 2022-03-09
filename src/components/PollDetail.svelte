<script>
  // import { createEventDispatcher } from 'svelte';
  // const dispatch = createEventDispatcher();

  import PollsStore from '../stores/PollsStore';
  import Card from '../shared/Card.svelte';
  import Button from '../shared/Button.svelte';
  import { tweened } from 'svelte/motion';
  export let poll;

  // Reactive Values
  $: totalVotes = poll.voteA + poll.voteB;
  $: percentA = Math.floor(poll.voteA / totalVotes * 100) || 0;
  $: percentB = Math.floor(poll.voteB / totalVotes * 100) || 0;

  // Tweened Percentages
  $: tweenedA = tweened(0);
  $: tweenedB = tweened(0);
  $: tweenedA.set(percentA);
  $: tweenedB.set(percentB);

  // Handle Vote
  function voteHandler(id, option) {
    // dispatch('vote', {id, option});
    PollsStore.update(curData => {
      const upvotedPoll = curData.find((poll) => poll.id === id);
  
      if (option === 'a') {
        upvotedPoll.voteA ++;
      }
      if (option === 'b') {
        upvotedPoll.voteB ++;
      }

      curData = curData;
      return curData;
    });
  }

  // Delete a Poll
  function deleteHandler(id) {
    PollsStore.update(curData => curData.filter(poll => poll.id != id));
  }
</script>

<Card>
  <div class="poll">
    <h3>{ poll.question }</h3>
    <p>Total votes: { totalVotes }</p>
    <div class="answer anwser-a" on:click={() => voteHandler(poll.id, 'a')}>
      <div class="percent percent-a" style="width: {$tweenedA}%"></div>
      <span>{ poll.answerA } ({ poll.voteA })</span>
    </div>
    <div class="answer answer-b" on:click={() => voteHandler(poll.id, 'b')}>
      <div class="percent percent-b" style="width: {$tweenedB}%"></div>
      <span>{ poll.answerB } ({ poll.voteB })</span>
    </div>
    <div class="delete">
      <Button flat={true} on:click={() => deleteHandler(poll.id)}>Delete</Button>
    </div>
  </div>
</Card>

<style>
  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 14px;
    margin-bottom: 1.5rem;
  }

  .answer {
    cursor: pointer;
    position: relative;
    background-color: #f4f4f4;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 3px;
  }

  .answer:hover {
    opacity: 0.6;
  }

  .percent {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  .percent-a {
    background: rgba(217, 27, 66, 0.2);
    border-left: 4px solid #d91b42;
  }

  .percent-b {
    background: rgba(69, 196, 150, 0.2);
    border-left: 4px solid #45c496;
  }

  .delete {
    margin-top: 1.5rem;
    text-align: center;
  }
</style>