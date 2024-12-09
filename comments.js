// create web server

// import express module
var express = require('express');

// create express object
var app = express();

// import body-parser module
var bodyParser = require('body-parser');

// import mongoose module
var mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost/comments');

// import Comment model
var Comment = require('./models/comment');

// set view engine
app.set('view engine', 'ejs');

// use body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// set static files
app.use(express.static('public'));

// route to get all comments
app.get('/comments', function(req, res) {
    // get all comments from the database
    Comment.find(function(err, comments) {
        if (err) {
            res.send(err);
        }
        res.json(comments);
    });
});

// route to create a comment
app.post('/comments', function(req, res) {
    // create a new comment
    Comment.create({
            text: req.body.text
        }, function(err, comment) {
            if (err) {
                res.send(err);
            }
            res.json(comment);
        });

});