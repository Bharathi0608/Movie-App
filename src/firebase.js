// // firebase.js
// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   GoogleAuthProvider,
//   signInWithPopup,
//   signOut,
//   onAuthStateChanged
// } from "firebase/auth";
// import {
//   getFirestore,
//   collection,
//   doc,
//   setDoc,
//   getDocs,
//   query,
//   where,
//   deleteDoc
// } from "firebase/firestore";

// // 🔐 Paste your Firebase config here
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID",
// };

// const app = initializeApp(firebaseConfig);

// // Firebase services
// export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();
// export const db = getFirestore(app);

// // Re-export helpers
// export {
//   signInWithPopup,
//   signOut,
//   onAuthStateChanged,
//   collection,
//   doc,
//   setDoc,
//   getDocs,
//   query,
//   where,
//   deleteDoc,
// };

// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
// import { getFirestore, collection, doc, setDoc, getDocs, query, where, deleteDoc } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "...",
//   authDomain: "...",
//   projectId: "...",
//   storageBucket: "...",
//   messagingSenderId: "...",
//   appId: "..."
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();
// export const db = getFirestore(app);

// export {
//   signInWithPopup,
//   signOut,
//   onAuthStateChanged,
//   collection,
//   doc,
//   setDoc,
//   getDocs,
//   query,
//   where,
//   deleteDoc
// };

// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   GoogleAuthProvider,
//   signInWithPopup,
//   signOut,
//   onAuthStateChanged,
// } from "firebase/auth";
// import {
//   getFirestore,
//   collection,
//   doc,
//   setDoc,
//   getDocs,
//   query,
//   where,
//   deleteDoc,
// } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "YOUR_APIKEY",
//   authDomain: "YOUR_AUTHDOMAIN",
//   projectId: "YOUR_PROJECTID",
//   storageBucket: "YOUR_STORAGEBUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDERID",
//   appId: "YOUR_APPID"
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();
// export const db = getFirestore(app);

// export {
//   signInWithPopup,
//   signOut,
//   onAuthStateChanged,
//   collection,
//   doc,
//   setDoc,
//   getDocs,
//   query,
//   where,
//   deleteDoc
// };
// src/firebase.js
// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   GoogleAuthProvider,
//   signInWithPopup,
//   signOut,
//   onAuthStateChanged
// } from "firebase/auth";
// import {
//   getFirestore,
//   collection,
//   doc,
//   setDoc,
//   getDocs,
//   query,
//   where,
//   deleteDoc
// } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "YOUR_APIKEY",
//   authDomain: "YOUR_AUTHDOMAIN",
//   projectId: "YOUR_PROJECTID",
//   storageBucket: "YOUR_BUCKET",
//   messagingSenderId: "YOUR_SENDERID",
//   appId: "YOUR_APPID"
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();
// export const db = getFirestore(app);

// export {
//   signInWithPopup,
//   signOut,
//   onAuthStateChanged,
//   collection,
//   doc,
//   setDoc,
//   getDocs,
//   query,
//   where,
//   deleteDoc,
// };

// src/firebase.js
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
