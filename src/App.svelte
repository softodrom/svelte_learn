<script>
	import FeedbackList from './components/Feedback.list.svelte'
	import FeedbackStats from './components/FeedbackStats.svelte';
	import FeedbackForm from './components/FeedbackForm.svelte';

	let feedback = [
		{
			id: 1,
			rating: 10,
			text: 'I am interested in knowing the date and time for the second interview. When will the second interview be conducted? I would appreciate if you could provide me with the details.',
		},
		{
			id: 2,
			rating: 9,
			text: 'I am interested in knowing the date and time for the second interview. When will the second interview be conducted? I would appreciate if you could provide me with the details.',
		},
		{
			id: 3,
			rating: 8,
			text: 'I am interested in knowing the date and time for the second interview. When will the second interview be conducted? I would appreciate if you could provide me with the details.',
		}
	]

	$: count = feedback.length
	$: average = feedback.reduce((a, {rating}) => a + rating, 0) / feedback.length

	const deleteFeedback = (e) => {
		const itemId = e.detail
		feedback = feedback.filter((item) => item.id != itemId)
	}

	const addFeedback = (e) => {
		const newFeedback = e.detail
		feedback = [newFeedback, ...feedback]
	}
</script>

<main class="container">
	<FeedbackForm on:add-feedback = {addFeedback} />
	<FeedbackStats {count} { average} />
	<FeedbackList {feedback} on:delete-feedback = {deleteFeedback}/>

</main>

<style>

</style>