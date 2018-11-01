const express = require('express');
const router = express.Router();
const Message = require('../models/Message')

router.get('/messages', (req, res) => {
    Message.find()
        .then(response => res.send(response))
})

module.exports = router;