import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDBqyINtyOTUf1BtWLmwOUl_5QSJCid8Uk",
  authDomain: "clothkart-db.firebaseapp.com",
  databaseURL: "https://clothkart-db.firebaseio.com",
  projectId: "clothkart-db",
  storageBucket: "clothkart-db.appspot.com",
  messagingSenderId: "694313625536",
  appId: "1:694313625536:web:99b04637c236ee8820ca25",
  measurementId: "G-0LLBS1WLTK",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
