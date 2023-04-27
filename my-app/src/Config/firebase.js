// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDV2Abr00KCxfbimc96w9eCCMCJTVSn3zA",
  authDomain: "ubaidullah-366405.firebaseapp.com",
  projectId: "ubaidullah-366405",
  storageBucket: "ubaidullah-366405.appspot.com",
  messagingSenderId: "404048888067",
  appId: "1:404048888067:web:f8aca81d2f88db3ec4a936",
  measurementId: "G-5WNL00GS95"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);