import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDNWfYbuUcq9B2QXhkuunsAdyOtzs1Vo3k",
  authDomain: "crwn-db-f3953.firebaseapp.com",
  projectId: "crwn-db-f3953",
  storageBucket: "crwn-db-f3953.appspot.com",
  messagingSenderId: "945115099021",
  appId: "1:945115099021:web:26dc67266d5a9cfc5297c4",
  measurementId: "G-KN9XSYHQ3W",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;