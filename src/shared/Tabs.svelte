<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let items;
  export let activeItem;
</script>

<div class="tabs">
  <ul>
    {#each items as item}
      <li class:active={item === activeItem} on:click={() => dispatch('tabChange', item)}>{item}</li>
    {/each}
  </ul>
</div>

<style>
  .tabs {
    margin: 0 auto;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 30px;
  }

  li {
    cursor: pointer;
    padding: 10px;
  }

  li.active {
    color: #d91b42;
    border-bottom: 2px solid #d91b42;
  }
</style>