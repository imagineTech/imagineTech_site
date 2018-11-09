import firebase from 'firebase/app';
import 'firebase/firestore';

let config = {
    apiKey: "AIzaSyBiFYMaEJgz71HwFOtqEVcsnGZk85Geg_M",
    authDomain: "imaginetech-website.firebaseapp.com",
    databaseURL: "https://imaginetech-website.firebaseio.com",
    projectId: "imaginetech-website",
    storageBucket: "imaginetech-website.appspot.com",
    messagingSenderId: "574845420115"
};

firebase.initializeApp(config);

const db = firebase.firestore();

db.settings({
    timestampsInSnapshots: true
});

export {
    db
}