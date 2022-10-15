// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxEuVhZMoTe4k-Candor7DPgKGp6TB8io",
  authDomain: "freetime-e9d40.firebaseapp.com",
  projectId: "freetime-e9d40",
  storageBucket: "freetime-e9d40.appspot.com",
  messagingSenderId: "404738466738",
  appId: "1:404738466738:web:693df414b950757a0a7aab"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);