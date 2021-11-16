import firebase from 'firebase'


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCeFVENP59U1BF7se52KfQufZU_LbXcCIU",
  authDomain: "chatsedin.firebaseapp.com",
  projectId: "chatsedin",
  storageBucket: "chatsedin.appspot.com",
  messagingSenderId: "588919402254",
  appId: "1:588919402254:web:afeb4c95fd38185592b15f",
  measurementId: "G-KV1GH3FDPV"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }