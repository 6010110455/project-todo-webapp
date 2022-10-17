const admin = require('firebase-admin');

var serviceAccount = require("./todowebapp-e45e8-firebase-adminsdk-ktjtb-78fac72523.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
   });

const db = admin.firestore();

module.exports = { admin, db };