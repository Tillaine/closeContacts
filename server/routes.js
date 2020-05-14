const express = require('express');
const controller = require('./controller')
// ***********************************
// middleware
// ***********************************
// api routing 
const router = express.Router();

router.get('/', controller.getContacts);

// router.post('/', controller.postContacts);

// router.put('/', controller.updateContacts);

// router.delete('/', controller.deleteContacts);

module.exports = router;