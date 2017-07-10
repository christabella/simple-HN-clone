'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser')

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

const Topics = require('./lib/topics.js');
var topics = new Topics();

/**
 * Routes to GET list of topics and POST a new topic
 */
app.route("/topics")
  .get(function(req, res) {
    res.json(topics.listTopics())
  })
  .post(function(req, res) {
    let topic = topics.addTopic(req.body.topic);
    // Send response with success message and topic
    res.send({message: 'Topic successfully submitted!', topic: topic}); 
  });

/**
 * Route to UPDATE a topic of given id with an upvote/downvote
 */
app.route("/topics/:id/:vote")
  .put(function(req, res) {
    topics.voteOnTopic(req.params.id, req.params.vote);
    res.send({message: 'Topic successfully voted on!'});
  })

app.listen(port);
console.log("Listening on port " + port);

module.exports = app; // for testing
