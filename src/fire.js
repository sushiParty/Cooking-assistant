import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCrnGbSIMkD2h09fCZd43sAKcVsnrPODeM",
    authDomain: "cooking-assistant-b3183.firebaseapp.com",
    databaseURL: "https://cooking-assistant-b3183.firebaseio.com",
    projectId: "cooking-assistant-b3183",
    storageBucket: "cooking-assistant-b3183.appspot.com",
    messagingSenderId: "992162769843"
  };

export var fire = firebase.initializeApp(config);

export var storage = firebase.storage();
