const twilio = require('twilio');

const accountSid = 'YOUR_TWILIO_ACCOUNT_SID';
const authToken = 'YOUR_TWILIO_AUTH_TOKEN';

const client = twilio(accountSid, authToken);

module.exports = client;
