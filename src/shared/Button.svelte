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
    padding: 8px 16px;
    border-radius: 5px;
    border: none;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
  }

  button:focus {
    outline: none;
  }

  .primary {
    color: #fff;
    background: #d91b42;
  }

  .primary.inverse {
    background: #fff;
    color: #d91b42;
    border: 1px solid #d91b42;
  }

  .secondary {
    color: #fff;
    background: #45c496;
  }

  .secondary.inverse {
    background: #fff;
    color: #45c496;
    border: 1px solid #45c496;
  }

  .flat {
    box-shadow: none;
  }
</style>