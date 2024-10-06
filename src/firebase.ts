// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW9EHb8qgq8G61O4fMYcDBVXqYf_wSyac",
  authDomain: "linkgrid-71092.firebaseapp.com",
  projectId: "linkgrid-71092",
  storageBucket: "linkgrid-71092.appspot.com",
  messagingSenderId: "848389050209",
  appId: "1:848389050209:web:b7d964cf0083519295bf20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db=getFirestore(app)
export { auth };
export default app;
