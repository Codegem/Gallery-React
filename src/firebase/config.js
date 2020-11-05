import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBukCAfMmVMsXHFzI0bmDRzKmW1IeeARkU",
  authDomain: "newapp-d3d41.firebaseapp.com",
  databaseURL: "https://newapp-d3d41.firebaseio.com/",
  projectId: "newapp-d3d41",
  storageBucket: "newapp-d3d41.appspot.com",
  messagingSenderId: "127880522642",
  appId: "1:127880522642:web:9b0370fdb1eea335276f4b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };