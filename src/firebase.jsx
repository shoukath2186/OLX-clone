
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCC4818KmFvvhKLDUwuzJBtDrFu3iebJU0",
  authDomain: "new-olx-clone-4fedc.firebaseapp.com",
  projectId: "new-olx-clone-4fedc",
  storageBucket: "new-olx-clone-4fedc.appspot.com",
  messagingSenderId: "812178560448",
  appId: "1:812178560448:web:e30bb856d29941a4aba425"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);