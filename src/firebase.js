import firebase from 'firebase'

// Initialize Firebas
var config = {
    apiKey: "AIzaSyDXpTXhDZ_1KG-q8KOy-_xJXYWAoIywb6I",
    authDomain: "personalsite-34e89.firebaseapp.com",
    databaseURL: "https://personalsite-34e89.firebaseio.com",
    projectId: "personalsite-34e89",
    storageBucket: "personalsite-34e89.appspot.com",
    messagingSenderId: "775604391658"
};
firebase.initializeApp(config);
export default firebase;
