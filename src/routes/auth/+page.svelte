<script lang="ts">
	import { FirebaseUiAuth, saveUserData } from 'sveltefirets';
</script>
<FirebaseUiAuth
        signInWith={{ google: true, emailPasswordless: true, anonymous: true }}
        on:authresult={(e) => saveUserData(e.detail)}
        signInSuccessUrl="/parent/dashboard"/>
