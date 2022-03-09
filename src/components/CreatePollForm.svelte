<script>
  import Button from '../shared/Button.svelte';
  import PollStore from '../stores/PollStore';

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  let fields = {question: '', answerA: '', answerB: ''};
  let errors = {question: '', answerA: '', answerB: ''};
  let valid;

  function submitHandler() {
    valid = true;

    // Validate fields
    if (fields.question.trim().length < 5) {
      valid = false;
      errors.question = 'Your question must be at least 5 characters.'
    } else {
      errors.question = '';
    }

    if (fields.answerA.trim().length < 1) {
      valid = false;
      errors.answerA = 'This field is required.';
    } else {
      errors.answerA = '';
    }

    if (fields.answerB.trim().length < 1) {
      valid = false;
      errors.answerB = 'This field is required.';
    } else {
      errors.answerB = '';
    }

    // Add New Poll if valid
    if (valid) {
      dispatch('add');

      const poll = {
        ...fields,
        voteA: 0,
        voteB: 0,
        id: Math.random()
      };

      PollStore.update(curData => [poll,...curData]);

      // Clear input fields
      for (let field in fields) {
        fields[field] = '';
      }
    }
  }
</script>

<form on:submit|preventDefault={submitHandler}>
  <div class="form-group">
    <label for="question">Question: </label>
    <input type="text" id="question" bind:value={fields.question}>
    <small class="error">{ errors.question }</small>
  </div>
  <div class="form-group">
    <label for="answer-a">Answer A: </label>
    <input type="text" id="answer-a" bind:value={fields.answerA}>
    <small class="error">{ errors.answerA }</small>
  </div>
  <div class="form-group">
    <label for="answer-b">Answer B: </label>
    <input type="text" id="answer-b" bind:value={fields.answerB}>
    <small class="error">{ errors.answerB }</small>
  </div>
  <Button type="secondary">Add Poll</Button>
</form>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }

  .form-group {
    margin-bottom: 10px;
    text-align: left;
  }

  .form-group label {
    margin-bottom: 5px;
  }

  .form-group input {
    width: 100%;
    border-radius: 5px;
  }

  .form-group small {
    color: #d91b42;
  }

  input:focus {
    outline: none;
    border: 1px solid #333;
  }
</style>