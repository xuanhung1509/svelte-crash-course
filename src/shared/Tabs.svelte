<script>
  export let items;
  export let activeItem;

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
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
    margin: 1.5rem 0;
  }

  .tabs ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .tabs ul li {
    cursor: pointer;
    padding: 0.5rem;
  }

  .tabs ul li.active {
    color: #d91b42;
    border-bottom: 2px solid #d91b42;
  }
</style>