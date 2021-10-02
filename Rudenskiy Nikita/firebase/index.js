const firebaseConfig = {
    apiKey: "AIzaSyAqwsU5ewGGFJsp579wbfMlIDZBswOcU8E",
    authDomain: "sl-nikitarudenskiy.firebaseapp.com",
    projectId: "sl-nikitarudenskiy",
    storageBucket: "sl-nikitarudenskiy.appspot.com",
    messagingSenderId: "761469104183",
    appId: "1:761469104183:web:6957a646585b59d42f0fb2",
    measurementId: "G-6J7XRKQEYS"
  };

    firebase.initializeApp(firebaseConfig);

    var db = firebase.firestore();