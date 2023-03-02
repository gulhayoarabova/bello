// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9ydk2SSAoAVRL8RCsmNIXTm-S-Rxf-VQ",
  authDomain: "react-auth-3facf.firebaseapp.com",
  projectId: "react-auth-3facf",
  storageBucket: "react-auth-3facf.appspot.com",
  messagingSenderId: "538431503060",
  appId: "1:538431503060:web:f707c0ef33238313335941",
  measurementId: "G-TNEKV5HPFG"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth();
