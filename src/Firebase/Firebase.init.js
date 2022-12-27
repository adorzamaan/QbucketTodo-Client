// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPsbSMfrho3QCKQIXsdMdzmGuYo3Cq0nI",
  authDomain: "qbucket-todo.firebaseapp.com",
  projectId: "qbucket-todo",
  storageBucket: "qbucket-todo.appspot.com",
  messagingSenderId: "736018397623",
  appId: "1:736018397623:web:055ca0d246f574e3e99032",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
