<script>
    import {createEventDispatcher} from 'svelte';
	const buttonPressed = createEventDispatcher();
	export let buttonText = '';

    function buttonClicked() {
        buttonPressed('buttonPressed');
    }
</script>
<button on:click={buttonClicked}>
    {buttonText}
</button>
