importScripts('https://www.gstatic.com/firebasejs/7.7.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.7.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyDCzfP82GXOTCX_SPWCJmJ8ugCU7Rler38",
  authDomain: "third-diagram-224522.firebaseapp.com",
  databaseURL: "https://third-diagram-224522.firebaseio.com",
  projectId: "third-diagram-224522",
  storageBucket: "third-diagram-224522.appspot.com",
  messagingSenderId: "884886152919",
  appId: "1:884886152919:web:270a2d4b94b46eac02b292",
  measurementId: "G-JXRE3XM6V0"
//     apiKey: "from firebase config",
//  authDomain: "from firebase config",
//  databaseURL: "from firebase config",
//  projectId: "from firebase config",
//  storageBucket: "from firebase config",
//  messagingSenderId: "from firebase config",
//  appId: "from firebase config",
//  measurementId: "from firebase config"
});

const messaging = firebase.messaging();