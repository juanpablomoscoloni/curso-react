import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// firebaseConfig obtenida de la consola

const firebaseConfig = {
  apiKey: "AIzaSyAgX6mSzLMrJN7pynBmVX28TTIpRCqQC-8",
  authDomain: "cursoreact-5a11d.firebaseapp.com",
  projectId: "cursoreact-5a11d",
  storageBucket: "cursoreact-5a11d.appspot.com",
  messagingSenderId: "460720583450",
  appId: "1:460720583450:web:cb4e4e27d7cdba9da8b2a3",
  measurementId: "G-32RQCLC6JJ"
};
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export {
 db,
 googleAuthProvider,
 firebase
}