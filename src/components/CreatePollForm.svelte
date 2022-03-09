<script>
  import { createEventDispatcher } from 'svelte';
  let dispatch = createEventDispatcher();

  import PollsStore from '../stores/PollsStore';
  import Button from '../shared/Button.svelte';
  let fields = { question: '', answerA: '', answerB: '' };
  let errors = { question: '', answerA: '', answerB: '' };
  let valid = false;

  function submitHandler() {
    valid = true;

    // Validate question
    if (fields.question.trim().length < 5) {
      valid = false;
      errors.question = 'Your question should be at least 5 characters.';
    } else {
      errors.question = '';
    }

    // Validate answer A
    if (fields.answerA.trim().length < 1) {
      valid = false;
      errors.answerA = 'This field is required.';
    } else {
      errors.answerA = '';
    }

    // Validate answer B
    if (fields.answerB.trim().length < 1) {
      valid = false;
      errors.answerB = 'This field is required.';
    } else {
      errors.answerB = '';
    }

    // Add New Poll (if valid)
    if (valid) {
      const poll = {...fields, voteA: 0, voteB: 0, id: Math.random()};
      dispatch('add');

      PollsStore.update(curData => {
        curData = [poll, ...curData];
        return curData;
      });

      // Clear input fields
      for (let i in fields) {
        fields[i] = '';
      }
    }
  }
</script>

<form on:submit|preventDefault={submitHandler}>
  <div class="form-group">
    <label for="question">Poll Question: </label>
    <input type="text" id="question" bind:value={fields.question}>
    <small class="error">{ errors.question }</small>
  </div>
  <div class="form-group">
    <label for="answerA">Answer A: </label>
    <input type="text" id="answerA" bind:value={fields.answerA}>
    <small class="error">{ errors.answerA }</small>
  </div>
  <div class="form-group">
    <label for="answerB">Answer B: </label>
    <input type="text" id="answerB" bind:value={fields.answerB}>
    <small class="error">{ errors.answerB }</small>
  </div>
  <Button type='secondary'>Add Poll</Button>
</form>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  
  .form-group {
    margin: 0.5rem 0;
    text-align: left;
  }

  .form-group label {
    margin-bottom: 5px;
  }

  .form-group input {
    width: 100%;
    border-radius: 5px;
    padding: 0.4rem;
  }

  .form-group input:focus {
    outline: none;
    border: 1px solid #d91b42;
  }

  .form-group .error {
    font-size: 12px;
    color: #d91b42;
  }
</style>