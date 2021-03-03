// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyALHqtbzHSevDlIoCjvHHOLRuZlvk3ajek",
    authDomain: "slack-clone-7e354.firebaseapp.com",
    projectId: "slack-clone-7e354",
    storageBucket: "slack-clone-7e354.appspot.com",
    messagingSenderId: "1005406494731",
    appId: "1:1005406494731:web:f76e9f1a5a1b84f9b6670e",
    measurementId: "G-25DFH6GXYH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db }