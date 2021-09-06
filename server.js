//code from activity #26
const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

// Import custom middleware, "clog"
app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET Route for feedback page
//I shouldn't need this ince I am not collecting feedback, I won't have this page
// app.get('/feedback', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
// );

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);



























// const express = require('express');

// //const apiRoutes = require('./routes/apiRoutes');
// //const htmlRoutes = require('./routes/htmlRoutes');
// //const { clog } = require('./middleware/clog');
// const path = require('path');
// const app = express();

// const PORT = process.env.PORT || 3001;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true}));
// // allows for use of public directory, need an index.html file in public folder
// app.use(express.static('public'));
// //app.use('/api', apiRoutes);
// //app.use('/', htmlRoutes);
// //app.use(clog);

// //GET Route for homepage
// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// );

// //GET Route for notes page
// app.get('/notes', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/notes.html'))
// );

// //unlike activity 26 I do not need a feedback route

// app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
