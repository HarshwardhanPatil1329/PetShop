import * as firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyCbHnqfH2c9NCA2qibfWdb5DWerpU7n818",
    authDomain: "petsshop-1060b.firebaseapp.com",
    databaseURL: "https://petsshop-1060b-default-rtdb.firebaseio.com",
    projectId: "petsshop-1060b",
    storageBucket: "petsshop-1060b.appspot.com",
    messagingSenderId: "14381037324",
    appId: "1:14381037324:web:4bdd745f412c8f5ea0fb29",
    measurementId: "G-R7QL561856"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
  
export default firebase;