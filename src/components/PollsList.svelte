<script>
  // import { onMount, onDestroy } from 'svelte';
  import { fade, slide, scale } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import PollsStore from '../stores/PollsStore';
  import PollDetail from './PollDetail.svelte';
  // export let polls;

  // const unsub = PollsStore.subscribe(data => {
  //   polls = data;
  // });

  // onMount(() => {
    // maybe get data from a database

  //   console.log('component mounted');
  // });

  // onDestroy(() => {
    // unsub from store

    // console.log('component destroyed');
    // unsub();
  // });


</script>

<div class="polls-list">
  {#each $PollsStore as poll (poll.id)}
    <div in:fade out:scale|local animate:flip={{ duration: 500 }}>
      <PollDetail {poll}/>
    </div>
  {/each}
</div>

<style>
  .polls-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
</style>