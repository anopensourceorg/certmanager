// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiS-z4UQ8zgRzzhfF-U_Ad4q5zq8zKsGk",
  authDomain: "certificate-manager-368f6.firebaseapp.com",
  projectId: "certificate-manager-368f6",
  storageBucket: "certificate-manager-368f6.appspot.com",
  messagingSenderId: "355575239209",
  appId: "1:355575239209:web:5bd347d9918206297c8238",
  measurementId: "G-B638QDLB1S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage();
const certificatesRef = ref(storage,"inherenidea");
export {app,db,certificatesRef};