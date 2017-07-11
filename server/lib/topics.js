'use strict';

const Topic = require('./topic.js')

/** Class representing a collection of all topics. **/
module.exports = class Topics {
  constructor() {
    // Keep this.topics ordered by id for O(1) lookup when voting
    this.topics = [];
    // Keep track of unique id for each topic, beginning with 0.
    this.id = 0;
  }
  
  /** Add topic
   *  @param {string} topicString: string of < 255 chars
   *  @param {int} votes [optional, default=0]: number of votes for this topic
   *  @return {Topic}: topic added
   */
  addTopic(topicString, votes=0) {
    let topic = new Topic(topicString.substring(0,255), this.id, votes=votes);
    this.topics.push(topic);
    this.id += 1;
    return topic;
  }

  /** Increments or decrements votes for topic.
   *  @return {Topic[]} list of up to 20 of the highest voted topics
   */
  listTopics() {
    // Create a copy of topics array and sort from highest votes to lowest
    let topicsCopy = this.topics.concat().sort(function(a,b) {return b.votes - a.votes})
    // Return up to 20 of the highest voted topics
    let length = this.topics.length < 20 ? this.topics.length : 20;
    return topicsCopy.slice(0, length);
  }

  /** Increments or decrements votes for topic.
   *  @param {int} id: id of topic to vote on
   *  @param {int} vote: 1 (upvote) or -1 (downvote)
   *  @return {Topic[]} list of up to 20 of the highest voted topics
   */
  voteOnTopic(id, vote) {
    // Find and modify topic of that id
    this.topics[id].votes = parseInt(this.topics[id].votes, 10) + parseInt(vote, 10);
  }
}
