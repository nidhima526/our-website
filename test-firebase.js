import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import dotenv from "dotenv";

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function test() {
  console.log("Connecting to Firebase...");
  try {
    const q = collection(db, "inquiries");
    const snapshot = await getDocs(q);
    console.log("Fetched docs:", snapshot.docs.length);
    snapshot.docs.forEach(doc => {
      console.log(doc.id, doc.data());
    });
  } catch (err) {
    console.error("Firebase Error:", err);
  }
}

test();
