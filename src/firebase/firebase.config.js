// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXtg4sstjmntQPm_jr-M1k4RhDuqdY8mU",
  authDomain: "inventory-management-system7.firebaseapp.com",
  projectId: "inventory-management-system7",
  storageBucket: "inventory-management-system7.appspot.com",
  messagingSenderId: "305120405465",
  appId: "1:305120405465:web:aa3a68573fcc7c6a635bc8"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth=getAuth(app)
export default auth;