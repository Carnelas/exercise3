const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose
  .connect('http://localhost:27017')
  .then(() => {
    console.log(`Connected to Mongo on http://localhost:27017`)
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });