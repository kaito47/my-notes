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


    // API POST Requests
    // For new note inputs:
    app.post('/api/notes', function (req, res) {
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

    });

    // To delete a note by unique id:
    app.delete('/api/notes/:id', function (req, res) {
        let uniqueID = req.params.id
        fs.readFile('./db/db.json', 'utf8', function (err, db) {
            if (err) {
                console.log(err)
            }
            let noteArr = JSON.parse(db);
            for (let i = 0; i < noteArr.length; i++) {
                if (uniqueID === noteArr[i].id) {
                    noteArr.splice(i, 1);
                    let newDbArr = JSON.stringify(noteArr);
                    fs.writeFile('./db/db.json', newDbArr, function (err) {
                        if (err) {
                            console.log(err)
                        }
                        return res.json(dbJson);
                    })

                }
            };

        });

    });


};
