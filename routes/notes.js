const router = require('express').Router();
const fs = require('fs');
const util = require('util'); // permisify within util which is a node module
const readFile = util.promisify(fs.readFile); // can now attach a .then
const writeFile = util.promisify(fs.writeFile);

// promise format



// CRUD - Read route (GET)
// GET request
router.get('/', (req, res) => {
    readFile('./db/db.json',"utf8")
        .then((data) => {
        console.log("befor format" + data);
           let formatData = JSON.parse(data) // db.json object array
           console.log(formatData); // color variation in backend terminal means object
           res.json(formatData); // send to front end
            
        }) // see html : meta charset="UTF-8">
    // console.info(`${req.method} request received to get`);
  });
  
  // CRUD - create (POST)
  // POST request
  router.post('/', (req, res) => {
      res.json(`${req.method} request received to post`);
      console.info(`${req.method} request received`);
    });


    
module.exports = router;

// npm package that dynamically creates ids (ex. uuid)
// docs on readme of npm package (want const method)