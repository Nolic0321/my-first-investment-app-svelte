<script lang="ts">
	import Button from "../../../components/Button.svelte";
    import {user} from "$lib/stores/users";
    import type {IChild} from "$lib/types/child";

    const createChildAccount = () => {
        console.log("Creating child account");
    };

    const childAccounts : IChild[]= [];


</script>
<h1>Dashboard</h1>
<body>Welcome to the parent dashboard</body>
<sub>More neat things to come soon!</sub>
<div class="flex-col">
    <Button buttonText="Create Child Account" on:buttonPressed={createChildAccount}/>

    {#if $user}
        <p>Logged in as {$user.displayName}</p>
    {/if}
    <!-- Show each child account for the given user -->
    {#each childAccounts as child}
        <p>Child: {child.displayName}</p>
    {/each}
</div>