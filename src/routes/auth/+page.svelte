<script lang="ts">
	import { FirebaseUiAuth, saveUserData } from 'sveltefirets';
	import Button from '../../components/Button.svelte';
        let username: string;
        let password: string;
        const childLogin = () => {
                console.log(`Logging in as child ${username} with password ${password}`);
        }
</script>
<div class="mb-8 bg-yellow-100">
        <h1>Children's Area (Under construction)</h1>
        <form on:submit={childLogin}>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" bind:value={username}><br><br>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" bind:value={password}><br><br>
                <Button buttonText="Submit" on:buttonPressed={childLogin}/>
              </form>
</div>
<hr/>
<div class="my-8">
        <h1>Parent's Section</h1>
        <FirebaseUiAuth
        signInWith={{ google: true, emailPasswordless: true }}
        on:authresult={(e) => saveUserData(e.detail)}
        signInSuccessUrl="/parent/dashboard"/>
</div>

