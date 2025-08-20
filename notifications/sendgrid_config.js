const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('YOUR_SENDGRID_API_KEY');

module.exports = sgMail;
