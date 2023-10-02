<script lang='ts'>
    import {app, auth} from '../../firebase';
	import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
	let email = '';
	let password = '';

	const login = async() =>{
    if (!auth) {
      console.error("Firebase Auth not initialized");
      return;
	}
		try{
			const userCredentials = await signInWithEmailAndPassword(auth, email, password);
			console.log(`user logged in: ${userCredentials}`);
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
    <button type="button" on:click={login}>Login</button>
    <button type="button" on:click={signUp}>Sign Up</button>
</form>
