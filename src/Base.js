import firebase from "firebase";
import "firebase/firestore";
import 'firebase/storage'

const app = firebase.initializeApp({
  apiKey: "AIzaSyDWkR9TNSFCN-ug6pedV3X2A21gEdY8Jm0",
  authDomain: "mytodo-4710f.firebaseapp.com",
  projectId: "mytodo-4710f",
  storageBucket: "mytodo-4710f.appspot.com",
  messagingSenderId: "43153034989",
  appId: "1:43153034989:web:8981181638d52a87d286e4",
});

export default app;
