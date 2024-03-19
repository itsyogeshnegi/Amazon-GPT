import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAUMrkm5gcnFDlVvHYOihj_zjrjff4H18c",
  authDomain: "gpt-6c0fa.firebaseapp.com",
  projectId: "gpt-6c0fa",
  storageBucket: "gpt-6c0fa.appspot.com",
  messagingSenderId: "19155999204",
  appId: "1:19155999204:web:3374afbb957c02a5f38ff1",
  measurementId: "G-DFFZXYFW5G",
  databaseURL: "https://gpt-6c0fa-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);