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


