const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const message = require("./router/message");
app.use("/message", message);

const sendMessage = require('./routes/sendMessage')
const getMessages = require('./routes/getMessages');
app.use('/message', sendMessage)
app.use('/messages', getMessages);

app.listen(process.env.SERVICE_PORT || 9001, function() {
  console.log(`Server Express Ready on port ${ process.env.SERVICE_PORT || 9001 }!`);
});

