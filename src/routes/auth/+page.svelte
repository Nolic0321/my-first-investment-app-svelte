<script lang='ts'>
    import {auth} from '../../firebase';
	import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
	import {goto} from "$app/navigation";
	let email = '';
	let password = '';

	const login = async() =>{
    if (!auth) {
      console.error("Firebase Auth not initialized");
      return;
	}
		try{
			await signInWithEmailAndPassword(auth, email, password);
			goto('/parent/dashboard');
        }catch(error){
			console.log(error.message);
        }
    }

	const signUp = async()=>{
		try{
			const userCredentials = await createUserWithEmailAndPassword(auth!,email, password);
			console.log(`user signed up: ${userCredentials}`);
        }catch(error){
            console.log(error.message);
		}
    }
</script>

<form>
    <input type="email" bind:value={email} placeholder="Email" />
    <input type="password" bind:value={password} placeholder="Password" />
    <button class="bg-sky-500 hover:bg-sky-700 rounded px-2 py-1" type="button" on:click={login}>Login</button>
    <button type="button" on:click={signUp}>Sign Up</button>
</form>
