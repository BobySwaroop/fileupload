// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCuS9XpCsi1_hWzUUZty7oEernTHhX7Id4",
  authDomain: "crud-image-c68c4.firebaseapp.com",
  projectId: "crud-image-c68c4",
  storageBucket: "crud-image-c68c4.appspot.com",
  messagingSenderId: "626372922610",
  appId: "1:626372922610:web:fc63d193295a01cc29546b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);