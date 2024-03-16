// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUMrkm5gcnFDlVvHYOihj_zjrjff4H18c",
  authDomain: "gpt-6c0fa.firebaseapp.com",
  projectId: "gpt-6c0fa",
  storageBucket: "gpt-6c0fa.appspot.com",
  messagingSenderId: "19155999204",
  appId: "1:19155999204:web:3374afbb957c02a5f38ff1",
  measurementId: "G-DFFZXYFW5G"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);