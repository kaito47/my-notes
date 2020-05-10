// Dependencies
// =============================================================
const express = require('express');
const fs = require('fs');
const path = require('path');

// Express Configuration
// =============================================================

// Creating an express server
app = express();

// Code for hosting files in the 'public' directory
app.use(express.static("public"));
// app.use(express.static('public'));

// Setting an initial port
const PORT = process.env.port || 8070

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================
// The below points our server to a series of "route" files.
// ================================================================================

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


// Listener
app.listen(PORT, function () {
    console.log('App listening on PORT: ' + PORT);
});


