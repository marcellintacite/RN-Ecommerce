// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUVahzHSwHt8INxtxhHnBJnlnzIqeAbA0",
  authDomain: "mobileapp-c8e31.firebaseapp.com",
  projectId: "mobileapp-c8e31",
  storageBucket: "mobileapp-c8e31.appspot.com",
  messagingSenderId: "413929470876",
  appId: "1:413929470876:web:3706343ae8445fc78d2659",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const fireDB = app.firestore();
