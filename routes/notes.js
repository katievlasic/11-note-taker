const router = require("express").Router();
const fs = require("fs");
const util = require("util"); // permisify within util which is a node module
const readFile = util.promisify(fs.readFile); // can now attach a .then
const writeFile = util.promisify(fs.writeFile);

// promise format

// CRUD - Read route (GET)
// GET request
router.get("/", (req, res) => {
  readFile("./db/db.json", `UTF8`).then((data) => {
    console.log("befor format" + data);
    let formatData = JSON.parse(data); // db.json object array
    console.log(formatData); // color variation in backend terminal means object
    res.json(formatData); // send to front end
  }); // see html : meta charset="UTF-8">
  // console.info(`${req.method} request received to get`);
});

// CRUD - create (POST)
// POST request
router.post("/", (req, res) => {
  const {title, text} = req.body;

  const newNote = {
    title,
    text
  };
  readFile("./db/db.json", `UTF8`).then((data) => {
    console.log("befor format" + data);
    let formatData = JSON.parse(data); // db.json object array
    formatData.push(newNote); // array need to use method
    writeFile("./db/db.json", JSON.stringify(formatData), `UTF8`)
    console.log(formatData); // color variation in backend terminal means object
    res.json(formatData); // send to front end

  })
});


  //   let formatData = JSON.parse(data);
  //   console.info(`${req.method} request received`);
  //   res.json(formatData);

module.exports = router;

// npm package that dynamically creates ids (ex. uuid)
// docs on readme of npm package (want const method)
