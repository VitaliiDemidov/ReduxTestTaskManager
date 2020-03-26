import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAA4QUOptYHiNYVcfluAyBclYRm8-VUw4E",
  authDomain: "testmanager-74e79.firebaseapp.com",
  databaseURL: "https://testmanager-74e79.firebaseio.com",
  projectId: "testmanager-74e79",
  storageBucket: "testmanager-74e79.appspot.com",
  messagingSenderId: "303710865942",
  appId: "1:303710865942:web:c751b70cf675dc803cc337"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
