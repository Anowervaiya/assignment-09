// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIw0BmNEtPAeG47KZTvlKQ-BhJBbuhAA0",
  authDomain: "assignment-09-8da15.firebaseapp.com",
  projectId: "assignment-09-8da15",
  storageBucket: "assignment-09-8da15.appspot.com",
  messagingSenderId: "561370278873",
  appId: "1:561370278873:web:6e37f7d9bafc70be2e07c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export default auth;