const express = require("express");
const bodyParser = require("body-parser");
const app = express();

let connectRetry = function() {
  return mongoose.connect('mongodb://mongodb:27017/message', {useNewUrlParser: true}, function(err) {
    if (err) {
      console.error('Error connecting to mongo - retrying in 5 seconds', err);
      setTimeout(connectRetry, 5000);
    } else {
      console.log("connected to Mongo!!")
    }
  });
};
connectRetry();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const sendMessage = require('./routes/sendMessages')
const getMessages = require('./routes/getMessages');
app.use('/messages', sendMessage)
app.use('/messages', getMessages);

app.listen(process.env.SERVICE_PORT || 9001, function() {
  console.log(`Server Express Ready on port ${ process.env.SERVICE_PORT || 9001 }!`);
});

