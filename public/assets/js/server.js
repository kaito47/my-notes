// Dependencies
// =============================================================
const express = require('express');

// Express Configuration
// =============================================================

// Creating an express server
app = express();

// Setting an initial port
const PORT = process.env.port || 8000

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================
// The below points our server to a series of "route" files.
// ================================================================================

require("./apiRoutes")(app);
require("./htmlRoutes")(app);

// Listener
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});


