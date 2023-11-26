import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: `test`,
  authDomain: `test`,
  projectId: `test`,
  storageBucket: `test`,
  messagingSenderId: `test`,
  appId: `test`,
  measurementId: `test`,
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth();

