const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the NeiWorks API!');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});
