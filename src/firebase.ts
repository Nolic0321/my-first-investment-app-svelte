// Import the functions you need from the SDKs you need
import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getAnalytics, type Analytics } from "firebase/analytics";
import { getAuth, type Auth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: "myfirstinvestmentapp",
	storageBucket: "myfirstinvestmentapp.appspot.com",
	messagingSenderId: "810474579252",
	appId: "1:810474579252:web:165cbe8b764302e86db161",
	measurementId: "G-YS6M1E3161"
};
// Initialize Firebase
let app: FirebaseApp | undefined;
let auth: Auth | undefined;
let analytics: Analytics | undefined;
if(!getApps().length) {
	app = initializeApp(firebaseConfig);
	auth = getAuth(app);
	analytics = getAnalytics(app);
}

export { app, auth, analytics};
