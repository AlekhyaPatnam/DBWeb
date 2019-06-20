

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDKejyIt6V2ymKyT5rElniQre98BxX_ZYE",
    authDomain: "databasecourse-f0022.firebaseapp.com",
    databaseURL: "https://databasecourse-f0022.firebaseio.com",
    projectId: "databasecourse-f0022",
    storageBucket: "databasecourse-f0022.appspot.com",
    messagingSenderId: "514995572745",
    appId: "1:514995572745:web:4a3921cc0674a51a"
};


!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : ''
export const auth = firebase.auth()
export default firebase