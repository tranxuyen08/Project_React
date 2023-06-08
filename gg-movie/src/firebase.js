// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJOuswBMkjm77RNV9L7k8PshKGwMJsmSo",
  authDomain: "post-image-1ad40.firebaseapp.com",
  projectId: "post-image-1ad40",
  storageBucket: "post-image-1ad40.appspot.com",
  messagingSenderId: "778738671186",
  appId: "1:778738671186:web:4cbc19e0d7d113f4d1098b",
  measurementId: "G-VVXMJGY7H5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);