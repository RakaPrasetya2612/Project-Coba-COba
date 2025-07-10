const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Config
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Database
require('./config/db');

// Routes
app.use('/', require('./routes/siswaRoutes'));

// Server
app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});