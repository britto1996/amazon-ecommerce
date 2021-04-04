// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAkWgI9by5vKVQHUHZdYT1xeg6KSpuZL60",
  authDomain: "project-clone-4a343.firebaseapp.com",
  projectId: "project-clone-4a343",
  storageBucket: "project-clone-4a343.appspot.com",
  messagingSenderId: "395590370779",
  appId: "1:395590370779:web:b4a8f17a5824900acbd3fe",
  measurementId: "G-3WBQML6F1L",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
