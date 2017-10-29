const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notesController');

router.get('/', notesController.init);
router.post('/recording', notesController.sendRecording);

module.exports = router;
