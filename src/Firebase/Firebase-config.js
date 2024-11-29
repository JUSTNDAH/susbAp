// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq7gnOW4IIiBtw84gcIjEdSfFJVr_eTrg",
  authDomain: "sub-app-2f8b1.firebaseapp.com",
  projectId: "sub-app-2f8b1",
  storageBucket: "sub-app-2f8b1.firebasestorage.app",
  messagingSenderId: "388838638672",
  appId: "1:388838638672:web:d9e96cc627002b96da3d55",
  measurementId: "G-DLG60EY0MV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app); 
export const provider = new GoogleAuthProvider(); 
export default app;