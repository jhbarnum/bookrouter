import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD6ZJZn3GqfDpsBzV_9BgXb2NmqkARBXzQ",
    authDomain: "tunafish-8fe83.firebaseapp.com",
    databaseURL: "https://tunafish-8fe83.firebaseio.com",
    projectId: "tunafish-8fe83",
    storageBucket: "tunafish-8fe83.appspot.com",
    messagingSenderId: "645714611055"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth,
};