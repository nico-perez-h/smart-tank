import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD9jLffS16pNp6xnJ0Fbzt67mMy05_lWtU",
  authDomain: "smart-tank-f5eff.firebaseapp.com",
  projectId: "smart-tank-f5eff",
  storageBucket: "smart-tank-f5eff.firebasestorage.app",
  messagingSenderId: "1049365398105",
  appId: "1:1049365398105:web:249f1518c7790d654d6748",
};
// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
