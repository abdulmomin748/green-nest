import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB8uu6l9rX3W2n3FiBOc30BQRf84ZKJSWM",
  authDomain: "green-nest-9.firebaseapp.com",
  projectId: "green-nest-9",
  storageBucket: "green-nest-9.firebasestorage.app",
  messagingSenderId: "683209067675",
  appId: "1:683209067675:web:b71938ecf8b17ae146ca3e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;