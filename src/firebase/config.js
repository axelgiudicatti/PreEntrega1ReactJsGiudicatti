import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBnWfqYFixYtNCURQGxANZLrl00mZQzBoM",
  authDomain: "pfreact-307b7.firebaseapp.com",
  projectId: "pfreact-307b7",
  storageBucket: "pfreact-307b7.appspot.com",
  messagingSenderId: "645916311231",
  appId: "1:645916311231:web:514128b6cd68cb2abe100a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app;
