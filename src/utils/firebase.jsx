// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1XGiwBRXtjpKMxC63_G1T1pZeC-uX22k",
  authDomain: "fir-coderhouse-9604b.firebaseapp.com",
  projectId: "fir-coderhouse-9604b",
  storageBucket: "fir-coderhouse-9604b.appspot.com",
  messagingSenderId: "195525208312",
  appId: "1:195525208312:web:9ab61f08487d73a66cb30d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
