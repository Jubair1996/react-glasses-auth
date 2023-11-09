import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC3hEAJ_f6MkTPFaLGCKCCxndmZU8zJKFs",
  authDomain: "glasses-firebase-auth-62019.firebaseapp.com",
  projectId: "glasses-firebase-auth-62019",
  storageBucket: "glasses-firebase-auth-62019.appspot.com",
  messagingSenderId: "797939704088",
  appId: "1:797939704088:web:13fb1f38c6662aa77dfe6d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
