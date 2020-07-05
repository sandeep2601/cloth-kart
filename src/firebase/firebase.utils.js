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

export const createUserProfileDocument = async (userAuth, additionalaData) => {
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
        ...additionalaData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
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
