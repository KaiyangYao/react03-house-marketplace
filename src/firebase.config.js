import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD55CAA21PVnL6keg8snx96KOw0cNjZPmk",
  authDomain: "house-marketplace-app-e0f41.firebaseapp.com",
  projectId: "house-marketplace-app-e0f41",
  storageBucket: "house-marketplace-app-e0f41.appspot.com",
  messagingSenderId: "178631349531",
  appId: "1:178631349531:web:abb0c0a1ef77b44a142fbe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();