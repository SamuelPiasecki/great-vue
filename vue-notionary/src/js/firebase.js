import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDniaYcbteeAeGI2T1aiga30lBtdQmtWjY",
  authDomain: "notionary.firebaseapp.com",
  projectId: "notionary",
  storageBucket: "notionary.appspot.com",
  messagingSenderId: "299581755491",
  appId: "1:299581755491:web:1328bf55e369c21dafe856"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
export { db, auth }