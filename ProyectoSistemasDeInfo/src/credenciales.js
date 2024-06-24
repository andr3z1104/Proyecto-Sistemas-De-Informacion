// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8_6RWpS7U14UWaxBEG3JJ4-VfK0p_DYk",
  authDomain: "proyecto-sistemas-inform-a0a37.firebaseapp.com",
  projectId: "proyecto-sistemas-inform-a0a37",
  storageBucket: "proyecto-sistemas-inform-a0a37.appspot.com",
  messagingSenderId: "436388119145",
  appId: "1:436388119145:web:7b979c3a4fc925eeaed8f8"
};

// Inicializar Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;

// // Inicializar el servicio de autenticación de Firebase
// const auth = getAuth(app);

// const db = getFirestore(app);

// export { auth, db };
