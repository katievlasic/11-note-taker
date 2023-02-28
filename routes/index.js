const router = require('express').Router(); // 'shortcut' express var
const notesRoutes = require('./notes');

router.use('/notes',notesRoutes); 

module.exports = router;
