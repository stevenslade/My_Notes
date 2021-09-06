//from activity #26
const express = require('express');

// Import our modular routers for /tips and /feedback
// I should not need feedback
const notesRouter = require('./notes');
//const feedbackRouter = require('./feedback');

const app = express();

app.use('/notes', notesRouter);
//app.use('/feedback', feedbackRouter);

module.exports = app;









//my worthless code

// const express = require('express');
// const app = express();
// const notesRouter = require('./notes'); 

// app.use('/notes', notesRouter); 

// module.exports = app;




// const router = require('express').Router();

// router.get('/notes', (req, res) => {
//     store
//     .getNotes()
//     .then((notes) => {
//         return res.json(notes);
//     })
//     .catch((err) => res.status(500).json(err));
// });




// module.exports = router;