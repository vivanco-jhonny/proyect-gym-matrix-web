// Import the functions you need from the SDKs you need
import { FirebaseOptions, initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig: FirebaseOptions = {
    apiKey: "AIzaSyBwQessT6MMlDg4LDMfJW7q31g7xiIteiI",
    authDomain: "matrixgym-b5740.firebaseapp.com",
    projectId: "matrixgym-b5740",
    storageBucket: "matrixgym-b5740.appspot.com",
    messagingSenderId: "875711838588",
    appId: "1:875711838588:web:33fc7dcd20cc7712034cf9",
    measurementId: "G-GVS5MQYPZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const google = new GoogleAuthProvider();