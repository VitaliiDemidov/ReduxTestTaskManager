import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.local.APPKEY,
  authDomain: "testmanager-74e79.firebaseapp.com",
  databaseURL: "https://testmanager-74e79.firebaseio.com",
  projectId: "testmanager-74e79",
  storageBucket: "testmanager-74e79.appspot.com",
  messagingSenderId: "303710865942",
  appId: "1:303710865942:web:c751b70cf675dc803cc337"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { db };
export default firebase;
