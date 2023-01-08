import {initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import {
    getFirestore,
    getDoc,
    setDoc,
    doc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_cf6P-GiaK95vCxJEq1Zh_CBGsln6KpE",
    authDomain: "marvel-character-db-5df19.firebaseapp.com",
    projectId: "marvel-character-db-5df19",
    storageBucket: "marvel-character-db-5df19.appspot.com",
    messagingSenderId: "129683183916",
    appId: "1:129683183916:web:77a836cc46340074907489"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

const providerGoogle = new GoogleAuthProvider();
providerGoogle.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, providerGoogle);

export const db = getFirestore();

// create user doc in db if not already there and return user ref
export const createUserDocFromAuth = async (userAuth, additionalInformation) => {
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
                team,
                ...additionalInformation
            });
        } catch (error) {
            console.log('Error creating User in Firestore::: ', error.message)
        }
    }

    return userDocRef;
}

// create user with email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
}

// sign in user with email and password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
}

// sign out user
export const signOutUser = async () => await signOut(auth);

// listen for user changes
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)

// get team for given user
export const getTeamFromDb = async (userDocRef) => {
    const userSnapshot = await getDoc(userDocRef);

    return userSnapshot.data().team;
}

// set team for given user
export const setTeamOnDb = async (userAuth, team) => {
    const userDocRef = doc(db, 'user', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    const x = await setDoc(userDocRef, {
        ...userSnapshot.data(),
        team
    });

    return x;
}