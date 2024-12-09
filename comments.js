// create web server

// import express
const express = require('express');
const app = express();

// import body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// import comments.js
const comments = require('./comments.js');

// set port
const port = 4001;

// get all comments
app.get('/comments', (req, res) => {
  res.send(comments.getComments());
});

// add new comment
app.post('/comments', (req, res) => {
  const newComment = req.body.comment;
  const addedComment = comments.addComment(newComment);
  res.status(201).send(addedComment);
});

// start server
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});