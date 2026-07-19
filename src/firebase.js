import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAQ3EbwqjLcvMXsGOjQWIa8PgxmOzisCSU",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "ashervision-db.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "ashervision-db",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "ashervision-db.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "46001941079",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:46001941079:web:1661fba029e0c04d5dd112"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
