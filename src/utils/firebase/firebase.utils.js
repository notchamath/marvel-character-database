import {initializeApp} from 'firebase/app';
import {
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    getDoc,
    setDoc,
    doc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfHpx1Abp56mAUXslGkG6YeE1pNN97RbA",
    authDomain: "marvel-character-db.firebaseapp.com",
    projectId: "marvel-character-db",
    storageBucket: "marvel-character-db.appspot.com",
    messagingSenderId: "148200586830",
    appId: "1:148200586830:web:ad8ac6799d6dd42a088d1f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const providerGoogle = new GoogleAuthProvider();
providerGoogle.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, providerGoogle);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'user', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        const team = [];

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                team
            });
        } catch (error) {
            console.log('Error creating User in Firestore::: ', error.message)
        }
    }

    return userDocRef;
}