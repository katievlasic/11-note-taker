const express = require('express');
const path = require('path'); // need for HTML routes
const routes = require('./routes/index');

const PORT = process.env.PORT || 3001; // Heroku 5 digit = Process.env.PORT 

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// middleware above
app.use('/api', routes); 

// HTML route delivers what user sees, server auto-opening html in browser

// GET Route for homepage
// '/' is homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
// href in HTML file has /notes
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
