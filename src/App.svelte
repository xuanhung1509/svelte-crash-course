<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Tabs from './shared/Tabs.svelte';
	import CreatePollForm from './components/CreatePollForm.svelte';
	import PollsList from './components/PollsList.svelte';

	// Tabs
	let items = ['Current Polls', 'Add New Poll'];
	let activeItem = 'Current Polls';

	function tabChange(e) {
		activeItem = e.detail;
	}

	// Polls
	// let polls = [
	// 	{
	// 		id: 1,
	// 		question: 'Python or Node.js?',
	// 		answerA: 'Python',
	// 		answerB: 'Node.js',
	// 		voteA: 8,
	// 		voteB: 15
	// 	}
	// ];
	
	// Add Poll
	function addPoll(e) {
		// // Update Polls
		// const poll = e.detail;
		// polls = [poll, ...polls];

		// Switch to Current Polls tab
		activeItem = 'Current Polls';
	}

	// // Handler Vote
	// function voteHandler(e) {
	// 	const {id, option} = e.detail;
	// 	const upvotedPoll = polls.find((poll) => poll.id === id);

	// 	if (option === 'a') {
	// 		upvotedPoll.voteA ++;
	// 	}
	// 	if (option === 'b') {
	// 		upvotedPoll.voteB ++;
	// 	}

	// 	polls = polls; // reassign for reactivity
	// }
</script>

<Header/>
<main>
	<Tabs {items} {activeItem} on:tabChange={tabChange}/>
	<div class="container">
		{#if activeItem === 'Current Polls'}
			<PollsList/>
		{:else if activeItem === 'Add New Poll'}
			<CreatePollForm on:add={addPoll}/>
		{/if}
	</div>
</main>
<Footer/>

<style>
	.container {
		max-width: 900px;
		margin: 0 auto;
		padding: 2rem 1rem;
	}

</style>