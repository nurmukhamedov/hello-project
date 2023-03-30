import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAEFACyAjgRZnh6dfwi5ApTMBu8aYB0F88",
    authDomain: "auth-101-d898e.firebaseapp.com",
    projectId: "auth-101-d898e",
    storageBucket: "auth-101-d898e.appspot.com",
    messagingSenderId: "659755933588",
    appId: "1:659755933588:web:7b7d8184b7678e6569b981"
});

const auth = app.auth();
export { auth };
export default app;
