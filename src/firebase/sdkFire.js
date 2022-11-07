import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDI84iFWsU_Aa5A7VLwQ514R_9rZ-yyPik",
  authDomain: "xtmptools.firebaseapp.com",
  projectId: "xtmptools",
  storageBucket: "xtmptools.appspot.com",
  messagingSenderId: "366459051965",
  appId: "1:366459051965:web:5b04429dee40090360bcd4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);