const express = require('express');
const router = express.Router();
const axios = require('axios');
const Message = require('../models/Message')

const validator = (req, res, next) => {
    let { destination, body } = req.body;
    if (typeof destination != String || typeof body != String) {
        console.log("Error")
        res.send("Incorrect")
    }
    else if (destination == "" || body == "") {
        console.log("Error")
        res.send("Destination or body are empty")
    }
    else if (destination.length > 20 || body.length > 240) {
        console.log("Error")
        res.send("Destination or body are too long")
    }
    else if (destination == null || body == null) {
        console.log("Error")
        res.send("Destination or body are incorrect")
    }
    else if (destination == undefined || body == undefined) {
        console.log("Error")
        res.send("Destination or body are incorrect")
    } else next();


    app.post('/messages', validator(), (req, res, next) => {
        let { destination, body } = req.body
        axios.post('http://messageapp:3000/messages', { destination, body })
            .then(() => {
                return new Message({
                    destination,
                    body
                })
                    .save()
            })
            .then(() => {
                res.status(200)
                    .send(`${resp.data}`);
            })
            .catch((e) => {
                res.status(500)
                    .send(e);
            })
    })
}

module.exports = router;