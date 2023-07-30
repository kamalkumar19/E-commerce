// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWTX-XCb011sN1Mpf7-tpimZhoyO3gnzg",
    authDomain: "challenge-394dc.firebaseapp.com",
    projectId: "challenge-394dc",
    storageBucket: "challenge-394dc.appspot.com",
    messagingSenderId: "760720852593",
    appId: "1:760720852593:web:1afbdd2155302287d8bdd0",
    measurementId: "G-6DDS07GRLK"
};;
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };