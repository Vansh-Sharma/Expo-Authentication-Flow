import firebase from 'firebase/app';
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import "firebase/functions";
import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDFVefHmo3uLjDgY8NzwPB9gCpMRwzTfP0",
    authDomain: "waittime-885bd.firebaseapp.com",
    projectId: "waittime-885bd",
    storageBucket: "waittime-885bd.appspot.com",
    messagingSenderId: "703965267586",
    appId: "1:703965267586:web:c11d205b85812ffacb569b",
    measurementId: "G-0NEGT0W0ML"
}

firebase.initializeApp(firebaseConfig);
