// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX764mgd_ZPAMbXlpmTuGgdWkIH5TQd_0",
  authDomain: "publix-movie.firebaseapp.com",
  projectId: "publix-movie",
  storageBucket: "publix-movie.appspot.com",
  messagingSenderId: "1084657685054",
  appId: "1:1084657685054:web:7804f380a099ffa9bdf76f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);