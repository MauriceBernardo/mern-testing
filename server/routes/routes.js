var express = require('express');
var router = express.Router();

var controller = require('../controllers/dataControllers.js');

// Get all Data
router.get('/getData',controller.getData);

// update data
router.post('/updateData',controller.updateData);

// delete data
router.delete('/deleteData',controller.deleteData);

// create data
router.post('/putData',controller.putData);


module.exports = router;