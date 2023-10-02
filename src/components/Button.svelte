<script>
    import {createEventDispatcher} from 'svelte';
	const buttonPressed = createEventDispatcher();
	export let buttonText = '';
</script>
<button on:click={buttonPressed()}>
    {buttonText}
</button>
