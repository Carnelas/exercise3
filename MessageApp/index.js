const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser')

const test = (req, res, next) => {
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


    app.post('/message', (req, res, next) => {
        let { destination, body } = req.body;
        axios.post('http://messageapp:3000/message', { destination, body })
            .then(resp => {
                res.status(200).
                    res.send(`${resp.data}`)
            })
            .catch(e => {
                res.status(500).
                    console.log(e)
            })
    })
}

app.listen(9001, () => {
    console.log('listend on port 9001!');
});