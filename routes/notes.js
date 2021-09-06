//from activity #26 (this was tips.js)
const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI tip
notes.post('/', (req, res) => {
  console.log(req.body);
  
  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      note_id: uuid(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully 🚀`);
  } else {
    res.error('Error in adding note');
  }
});

module.exports = notes;






//my worthless code

//const notes = require('express').Router(); 
// const { v4: uuidv4 } = require('uuid');

// const {
//   readFromFile,
//   readAndAppend,
//   writeToFile,
// } = require('../helpers/fsUtils');

// // GET Route for retrieving all the notes
// notes.get('/', (req, res) => {
//   readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
// });

// // POST Route for a new note
// notes.post('/', (req, res) => {
//   console.log(req.body);

//   const { title, text } = req.body;

//   if (req.body) {
//     const newNote = {
//       title,
//       text,
//       id: uuidv4(),
//     };

//     readAndAppend(newNote, './db/db.json');
//     res.json(`Note added successfully `);
//   } else {
//     res.error('Error in adding note');
//   }
// });

// GET Route for a specific note
// notes.get('/:note_id', (req, res) => {
//   const noteId = req.params.note_id;
//   readFromFile('./db/db.json')
//     .then((data) => JSON.parse(data))
//     .then((json) => {
//       const result = json.filter((note) => note.note_id === noteId);
//       return result.length > 0
//         ? res.json(result)
//         : res.json('No note with that ID');
//     });
// });

// //DELETE Route for a specific note
// notes.delete('/:id', (req, res) => {
//   const noteId = req.params.id;
//   readFromFile('./db/db.json')
//     .then((data) => JSON.parse(data))
//     .then((json) => {
//       // Make a new array of all tips except the one with the ID provided in the URL
//       const result = json.filter((note) => note.id !== noteId);

//       // Save that array to the filesystem
//       writeToFile('./db/db.json', result);

//       // Respond to the DELETE request
//       res.json(`Note ${noteId} has been deleted 🗑️`);
//     });
// });

// //PUT Route for a specific note
// notes.put('/:id', (req, res) => {
//   const noteId = req.params.id;
//   readFromFile('./db/db.json')
//     .then((data) => JSON.parse(data))
//     .then((json) => {
//       // Make a new array of all tips except the one with the ID provided in the URL
//       const result = json.filter((note) => note.id !== noteId);

//       // Save that array to the filesystem
//       writeToFile('./db/db.json', result);

//       // Respond to the PUT request
//       res.json(`Note ${noteId} has been edited.`);
//     });
// });

// module.exports = notes;


// const path = require('path');
// const router = require('express').Router();

// router.get('/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/notes.html'))
// });

// module.exports = router;