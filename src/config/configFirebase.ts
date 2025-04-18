import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC-HpKmiH3alNu0rrajE_BeY1-i_dyaCig",
  authDomain: "smart-tank-97059.firebaseapp.com",
  projectId: "smart-tank-97059",
  storageBucket: "smart-tank-97059.firebasestorage.app",
  messagingSenderId: "549337541032",
  appId: "1:549337541032:web:50325cf25dd8b4b48cd59d",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
