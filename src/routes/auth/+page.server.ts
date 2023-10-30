import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { setUser } from '../../stores/user';

export async function load({ session }) {
    const auth = getAuth();
    const db = getFirestore();

    // Check if user is authenticated
    if (session && session.user) {
        const { uid } = session.user;

        // Get user data from Firestore
        const userRef = collection(db, 'users');
        const userSnapshot = await getDocs(userRef);
        const users = userSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        // Set user data in the user store
        setUser(users.find(user => user.uid === uid));
    }

    return {
        status: 200,
        props: {}
    };
}
