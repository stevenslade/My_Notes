const notes = require('express').Router();
// Require utility file to 
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
// Require utility file for unique id
const uuid = require('../helpers/uuid');

// Route for retrieving the notes
notes.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new note
notes.post('/', (req, res) => {
  console.log(req.body);
  
  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuid(),  //This is working as id
    };
    // 
    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully`);
  } else {
    res.error('Error');
  }
});

//Route for deleting a note
notes.delete('/:id', (req, res) => {
  const noteId = req.params.id;
  readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      // Make an array of notes without the filtered ID 
      const result = json.filter((note) => note.id !== noteId);

      // Save the array
      writeToFile('./db/db.json', result);

      // Offer a response to the delete route
      res.json(`Note ${noteId} deleted`);
    });
});


module.exports = notes;
