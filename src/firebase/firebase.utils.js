import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAf2SKakL3waZhhlXLT6nA9L5N-t8VsA1E",
    authDomain: "react-e-commerce-project-417bb.firebaseapp.com",
    databaseURL: "https://react-e-commerce-project-417bb.firebaseio.com",
    projectId: "react-e-commerce-project-417bb",
    storageBucket: "react-e-commerce-project-417bb.appspot.com",
    messagingSenderId: "180794025893",
    appId: "1:180794025893:web:d4898936e022f6fb776a4c"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
