//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyDX1M_TQMMrp755ka0CdcchlIGn2-EbIBY",
    authDomain: "comp1800-202410-demo-98d27.firebaseapp.com",
    projectId: "comp1800-202410-demo-98d27",
    storageBucket: "comp1800-202410-demo-98d27.appspot.com",
    messagingSenderId: "154618693706",
    appId: "1:154618693706:web:406d73057d93e310ee7eb3"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
