const express = require('express');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const { clog } = require('./middleware/clog');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
// allows for use of public directory, need an index.html file in public folder
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(clog);

//GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

//GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//unlike activity 26 I do not need a feedback route

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
