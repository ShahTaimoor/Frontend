
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCKDNjZIwtTdsS67Hlsic27w3Nb7Z6UoFQ",
  authDomain: "shop-d53ab.firebaseapp.com",
  projectId: "shop-d53ab",
  storageBucket: "shop-d53ab.appspot.com",
  messagingSenderId: "571792549590",
  appId: "1:571792549590:web:20ad1c0bc110c70c684b77",
  measurementId: "G-7QNNC7WY2Q"
};


const app = initializeApp(firebaseConfig);
export default app