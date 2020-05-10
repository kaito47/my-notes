// DEPENDENCIES
const fs = require('fs');
let dbJson = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');


// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    app.get('/api/notes', function (req, res) {
        fs.readFile('./db/db.json', 'utf8', function (err, db) {
            if (err) {
                console.log(err)
            }
            newDb = JSON.parse(db);
            res.json(newDb);
        });
    });



    app.post('/api/notes', function (req, res) {
        // create user in req.body
        let newNote = req.body;
        newNote.id = uuidv4();
        let newNoteArr = [];
        fs.readFile('./db/db.json', 'utf8', function (err, db) {
            if (err) {
                console.log(err)
            }
            newNoteArr = JSON.parse(db);
            newNoteArr.push(newNote);
            let newDbArr = JSON.stringify(newNoteArr);
            fs.writeFile('./db/db.json', newDbArr, function (err) {
                if (err) {
                    console.log(err)
                }
                return res.json(dbJson);
            });

        });

        // API DELETE Requests

    });

};
