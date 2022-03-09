<script>
  export let type = 'primary';
  export let flat = false;
  export let inverse = false;
</script>

<button class={type} class:flat={flat} class:inverse={inverse} on:click>
  <slot></slot>
</button>

<style>
  button {
    cursor: pointer;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1.2rem;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
  }

  .flat {
    box-shadow: none;
  }

  .primary {
    background-color: #d91b42;
    color: #fff;
  }

  .primary.inverse {
    background-color: #fff;
    color: #d91b42;
    border: 1px solid #d91b42;
  }

  .secondary {
    background-color: #45c496;
    color: #fff;
  }

  .secondary.inverse {
    background-color: #fff;
    color: #45c496;
    border: 1px solid #45c496;
  }
</style>