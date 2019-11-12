import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAjZNmHayNmCRVJERfEzfHSNzhd_kDU6YM",
    authDomain: "oddaj-rzeczy-d55e0.firebaseapp.com",
    databaseURL: "https://oddaj-rzeczy-d55e0.firebaseio.com",
    projectId: "oddaj-rzeczy-d55e0",
    storageBucket: "oddaj-rzeczy-d55e0.appspot.com",
    messagingSenderId: "533490414680",
    appId: "1:533490414680:web:9a43ad5a2d28b4d216c62d",
    measurementId: "G-1N1CQ86K7M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  export default firebase;