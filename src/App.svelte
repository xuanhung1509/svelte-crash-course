<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Tabs from './shared/Tabs.svelte';
	import PollList from './components/PollList.svelte';
  import CreatePollForm from './components/CreatePollForm.svelte';

	// Tabs
	let items = ['Current Polls', 'Create Poll'];
	let activeItem = 'Current Polls';

	function tabChange(e) {
		activeItem = e.detail;
	}

	function addPoll() {
		activeItem = 'Current Polls';
	}
</script>

<Header/>
<main>
	<div class="container">
		<Tabs {items} {activeItem} on:tabChange={tabChange}/>

		{#if activeItem === 'Current Polls'}
			<PollList/>
		{:else if activeItem === 'Create Poll'}
			<CreatePollForm on:add={addPoll}/>
		{/if}

	</div>
</main>
<Footer/>

<style>
	.container {
		max-width: 900px;
		margin: 0 auto;
		padding: 20px 30px;
	}
</style>