import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACfpxaaqSbdFRmOmmmlGh1byFQ-RnzXZc",
  authDomain: "freerush-df784.firebaseapp.com",
  projectId: "freerush-df784",
  storageBucket: "freerush-df784.appspot.com",
  messagingSenderId: "256261812714",
  appId: "1:256261812714:web:2f79c860507ff8bf308293",
  measurementId: "G-W359R6J4JE"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
