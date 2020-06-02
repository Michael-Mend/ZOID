import * as firebase from 'firebase';
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAux8KfDWKtAUkvmv32mGBoqYyMYcgHmt8",
    authDomain: "zoid-f75ed.firebaseapp.com",
    databaseURL: "https://zoid-f75ed.firebaseio.com",
    projectId: "zoid-f75ed",
    storageBucket: "zoid-f75ed.appspot.com",
    messagingSenderId: "524204953730",
    appId: "1:524204953730:web:efed5d9c4070cadeba249b",
    measurementId: "G-BVVLCH1YCQ"
});

export default app;