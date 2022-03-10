import firebase from 'firebase'
import 'firebase/firestore'
var firebaseConfig = {
  apiKey: "AIzaSyDXOf_OFDuPpA9oVMvUPzQt1whJOHX1DYA",
  authDomain: "hotel-test-91079.firebaseapp.com",
  databaseURL: "https://hotel-test-91079-default-rtdb.firebaseio.com",
  projectId: "hotel-test-91079",
  storageBucket: "hotel-test-91079.appspot.com",
  messagingSenderId: "171303338505",
  appId: "1:171303338505:web:19939deb98ff491c83eed8",
  measurementId: "G-6S9XV5XLL2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;

export const fetchDataFirestore = async (field) => {
  const response = db.collection(field);
  const data = await response.get();
  return data
}