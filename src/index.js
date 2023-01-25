import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; 


const firebaseApp = initializeApp({
    apiKey: "AIzaSyD7y-XqmtaDYGwYbTq1_ryE92uTRshUiXY",
    authDomain: "uottawa-arg.firebaseapp.com",
    projectId: "uottawa-arg",
    storageBucket: "uottawa-arg.appspot.com",
    messagingSenderId: "260151979234",
    appId: "1:260151979234:web:c56c38590cfb3cb85382bb",
    measurementId: "G-9KH24J438T"
});

const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, user => {
    if (user !== null) {
        console.log('logged in!');
    } else {
        document.getElementById('out').innerHTML = "im gonna shit and piss my pants";
        console.log('test')
    }
});