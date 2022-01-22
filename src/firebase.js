import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCr4FesfLBodM8RL3JQabmRVJZny9r6yxQ",
    authDomain: "slack-clone-420.firebaseapp.com",
    projectId: "slack-clone-420",
    storageBucket: "slack-clone-420.appspot.com",
    messagingSenderId: "725822926943",
    appId: "1:725822926943:web:f85bde2bbc08031edcabea",
    measurementId: "G-2X9NSQXHCC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;