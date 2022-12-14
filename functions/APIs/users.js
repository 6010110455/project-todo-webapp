// const { admin, db } = require('../util/admin');
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGhJVgbS4WwnZK2RVPNmy3IyJHf1rY_vA",
  authDomain: "todowebapp-bae21.firebaseapp.com",
  projectId: "todowebapp-bae21",
  storageBucket: "todowebapp-bae21.appspot.com",
  messagingSenderId: "444784330187",
  appId: "1:444784330187:web:7babc1abc93472a5d8224e",
  measurementId: "G-GJMQ3MJET8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const { validateLoginData, validateSignUpData } = require('../util/validators');

// Login
exports.loginUser = (request, response) => {
    const user = {
        email: request.body.email,
        password: request.body.password
    }

    const { valid, errors } = validateLoginData(user);
	if (!valid) return response.status(400).json(errors);

    app
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((data) => {
            return data.user.getIdToken();
        })
        .then((token) => {
            return response.json({ token });
        })
        .catch((error) => {
            console.error(error);
            return response.status(403).json({ general: 'wrong credentials, please try again'});
        })
};