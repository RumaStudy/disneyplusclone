// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTAh4a4qlPskOVhmfFM-gbCkJJC5zSu2A",
  authDomain: "my-react-clonedisney.firebaseapp.com",
  projectId: "my-react-clonedisney",
  storageBucket: "my-react-clonedisney.appspot.com",
  messagingSenderId: "166054667524",
  appId: "1:166054667524:web:5cb496db03cc5a8bb7dc51",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
