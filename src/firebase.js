import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
  query,
  where,
  deleteDoc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0cBg_p_2InQSVpBjVVtwESlkyhV7cKxw",
  authDomain: "reactmovieapp-e6a73.firebaseapp.com",
  projectId: "reactmovieapp-e6a73",
  storageBucket: "reactmovieapp-e6a73.firebasestorage.app",
  messagingSenderId: "1095919011023",
  appId: "1:1095919011023:web:76475f7b832fa833f9e3ba"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

export {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  collection,
  doc,
  setDoc,
  getDocs,
  query,
  where,
  deleteDoc,
};
