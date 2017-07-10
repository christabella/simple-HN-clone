'use strict';

const Topic = require('./topic.js')
var SortedSet = require("collections/sorted-set");

class Topics {
  // module.exports = class Topics {
  constructor() {
    let compare = function(a, b) {
      return a.votes - b.votes
    }
    let equals = function(a, b) {
      return a.id == b.id;
    } 
    this.topics = new SortedSet([], equals, compare);
    this.id = 0;
  }

  addTopic(topicString, votes=0) {
    let topic = new Topic(topicString, this.id, votes=votes);
    this.topics.add(topic);
    this.id += 1;
  }

  listTopics() {
    let results = []
    let length = this.topics.length < 20 ? this.topics.length : 20;

    for (let i = 0; i < length; i++) {
      results.push(this.topics.pop());
    }
    for (let i = 0; i < length; i++) {
      this.topics.add(results[i]);
    }
    return results;
  }

  voteOnTopic(id, vote) {
    let equals = function(a, b) {
      return a.id == b.id;
    } 
    // Find and remove topic of that id
    let topic = this.topics.get({id: id})
    this.topics.delete(topic);
    // Modify vote of topic
    topic.value.votes += vote;
    // Re-insert into priority queue
    this.topics.add(topic.value);
    return
  }
}
