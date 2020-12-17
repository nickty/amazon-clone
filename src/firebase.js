import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyC7-nOO3ijwcbyfLdVxSBqyBaxDN5fpiaw",
    authDomain: "challenge-f52a3.firebaseapp.com",
    projectId: "challenge-f52a3",
    storageBucket: "challenge-f52a3.appspot.com",
    messagingSenderId: "564079587205",
    appId: "1:564079587205:web:d158fa8dbf65589e4bdeec"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); 

  const db = firebaseApp.firestore(); 
  const auth = firebase.auth(); 

  export {db, auth} 