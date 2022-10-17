const admin = require('firebase-admin');

var serviceAccount = require("./todowebapp-bae21-firebase-adminsdk-q9irg-89f327ed55.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
   });

const db = admin.firestore();

module.exports = { db };