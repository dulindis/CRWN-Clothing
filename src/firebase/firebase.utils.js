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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;