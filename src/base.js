import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBb7GPKikGQWT2KvJxC9d0Z7zTYOvtAhzI",
    authDomain: "carnage-9cfd9.firebaseapp.com",
    databaseURL: "https://carnage-9cfd9.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export {firebaseApp};

// This is a default export
export default base;
