import React from 'react';
import Home from './screens/home.js';
import SignUp from './screens/SignUp';
import Navigator from './routes/stackNavigation';
import apiKeys from './config/keys';
import * as firebase from 'firebase';

export default function App() {
  if (!firebase.apps.length) {
    console.log("Connected with Firebase")
    firebase.initializeApp(apiKeys.firebaseConfig)
  }

  return ( 
    <Navigator />
  );
}
