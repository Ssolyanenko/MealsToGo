import {initializeApp} from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDNvziEM5AMg2p90fMfjBsrNkFtz7ZL-_U",
    authDomain: "meals-to-go-860df.firebaseapp.com",
    projectId: "meals-to-go-860df",
    storageBucket: "meals-to-go-860df.appspot.com",
    messagingSenderId: "649783862422",
    appId: "1:649783862422:web:eeaef015cc7d2059574eb7"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

