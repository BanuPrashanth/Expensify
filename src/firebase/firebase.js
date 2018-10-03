import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCnBeSKtqzsR_qmkTMCEUbtPhuDhhMTvbU",
    authDomain: "expensify-e3d7f.firebaseapp.com",
    databaseURL: "https://expensify-e3d7f.firebaseio.com",
    projectId: "expensify-e3d7f",
    storageBucket: "expensify-e3d7f.appspot.com",
    messagingSenderId: "809382904200"
  };

firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, database as default};
