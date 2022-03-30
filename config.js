import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAulkqmnEjqqIevOgwkzc2pZliX5gTmN18",
    authDomain: "e-ride-89937.firebaseapp.com",
    projectId: "e-ride-89937",
    storageBucket: "e-ride-89937.appspot.com",
    messagingSenderId: "102312144751",
    appId: "1:102312144751:web:81002ed89dcc869cc1829a"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
