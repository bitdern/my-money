import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDg7fd3Xi0xYNwZpiPJs3XDmbg1ZsuitOk",
  authDomain: "mymoneyv2-fc2f3.firebaseapp.com",
  projectId: "mymoneyv2-fc2f3",
  storageBucket: "mymoneyv2-fc2f3.appspot.com",
  messagingSenderId: "800632328094",
  appId: "1:800632328094:web:af7836c63e02551bce508f",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
