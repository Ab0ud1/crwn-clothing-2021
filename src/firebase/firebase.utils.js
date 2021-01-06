import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCtmBzU79bZb2kBhGvKk5DbcTxJ_N8b4fQ",
    authDomain: "crwn-db-2021-83a7b.firebaseapp.com",
    projectId: "crwn-db-2021-83a7b",
    storageBucket: "crwn-db-2021-83a7b.appspot.com",
    messagingSenderId: "277978795496",
    appId: "1:277978795496:web:654efb6c8701e3962c685d"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
