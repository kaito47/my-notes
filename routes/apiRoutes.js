// DEPENDENCIES
const fs = require('fs');
const dbJson = require('./db.json')


// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    app.get('/api/notes', function (req, res) {
        fs.readFile('./db/db.json', 'utf8', function (err, db) {
            if (err) {
                console.log(err)
            }
            console.log(db);

            return res.json(db);
        });
    });


    // API POST Requests
    app.post('/api/notes', function (req, res) {
        const newNote = req.body;
        dbJson.push(newNote);
        res.send(newNote);
    });

    // API DELETE Requests

};

    // app.post('/api/tables', function (req, res) {
    //     // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    //     // It will do this by sending out the value "true" have a table
    //     // req.body is available since we're using the body parsing middleware
    //     if (tableData.length < 5) {
    //         tableData.push(req.body);
    //         res.json(true);
    //     }
    //     else {
    //         waitListData.push(req.body);
    //         res.json(false);
    //     }
    // });

    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!

//     app.post('/api/clear', function (req, res) {
//         // Empty out the arrays of data
//         tableData.length = 0;
//         waitListData.length = 0;

//         res.json({ ok: true });
//     });
// };
