const admin = require('firebase-admin');

const serviceAccount = require('./path/to/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://<YOUR-FIREBASE-PROJECT-ID>.firebaseio.com'
});

module.exports = admin;
