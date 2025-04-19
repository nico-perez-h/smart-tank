import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBQkpZYJSrl7QtLHm_7sWJxd48-Wa3lJ0U",
  authDomain: "smart-tank-85984.firebaseapp.com",
  projectId: "smart-tank-85984",
  storageBucket: "smart-tank-85984.firebasestorage.app",
  messagingSenderId: "211137212888",
  appId: "1:211137212888:web:84018c9c23ba7566c282ad",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
