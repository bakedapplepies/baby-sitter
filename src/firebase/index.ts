import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBKGgoLwh7VihH-Kh5WL6kWn_7pRYKrzZ8",
  authDomain: "babysitter-16fa0.firebaseapp.com",
  projectId: "babysitter-16fa0",
  storageBucket: "babysitter-16fa0.appspot.com",
  messagingSenderId: "714930732583",
  appId: "1:714930732583:web:eb2eca0fa6440474645802",
  measurementId: "G-TCRCHNRP24"
}

const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
export default firebaseApp;