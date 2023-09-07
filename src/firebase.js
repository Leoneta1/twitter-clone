import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBgdeswPYMTfGM-BVNUKlJCsZZtfs-1QdY",
  authDomain: "twitter-clone-6bf77.firebaseapp.com",
  databaseURL:
    "https://twitter-clone-6bf77-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "twitter-clone-6bf77",
  storageBucket: "twitter-clone-6bf77.appspot.com",
  messagingSenderId: "46551447590",
  appId: "1:46551447590:web:2289863be2860d18598ee7",
  measurementId: "G-5KX2DE88F0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
