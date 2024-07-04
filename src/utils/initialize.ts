import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyChqoqqyohlY6Gg1FNGF4NV1kvyhKIqer4",
  authDomain: "notifier-f1f22.firebaseapp.com",
  projectId: "notifier-f1f22",
  storageBucket: "notifier-f1f22.appspot.com",
  messagingSenderId: "347535482511",
  appId: "1:347535482511:web:20f79e52e9aac7baa55afa",
  measurementId: "G-LQ12KN62C2"
};

const app = initializeApp(firebaseConfig);

export default app;