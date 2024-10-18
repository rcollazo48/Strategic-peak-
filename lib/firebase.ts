import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJbZSr0r2Z6Yh3stdUAE4dPUyypRSeKZs",
  authDomain: "startegic-peak-ai-app.firebaseapp.com",
  projectId: "startegic-peak-ai-app",
  storageBucket: "startegic-peak-ai-app.appspot.com",
  messagingSenderId: "697228877632",
  appId: "1:697228877632:web:75ac4fedb927fc9aec24a5",
  measurementId: "G-SK8MXBKBHK"
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut };