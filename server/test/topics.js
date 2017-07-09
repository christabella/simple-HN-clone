const expect    = require("chai").expect;
const Topics = require("../lib/topics.js");
const Topic = require("../lib/topic.js");

describe("Topics model", function() {
  describe("Adding topics", function() {
    it("adds 1 topic successfully", function() {
      let topics = new Topics();
      topics.addTopic('Hello World!');

      let topicsList = topics.listTopics();
      expect(topicsList).to.deep.equal([new Topic('Hello World!')]);
    });
    
    it("lists 20 topics", function() {
      let topics = new Topics();
      // Add 30 new topics, each with a random number of votes.
      for (var i = 0; i < 30; i++) {
        topics.addTopic('Hello World!'); 
      }
      
      let topicsList = topics.listTopics();
      expect(topicsList).length.to.equal(20);
    });

    it("lists topics in order", function() {
      let topics = new Topics();
      // Add 30 new topics, each with a random number of votes.
      for (var i = 0; i < 20; i++) {
        // Initialize vote count to random int from 0 to 20.
        let randInt = Math.floor(Math.random() * 20);
        topics.addTopic('Hello World!', votes=randInt); 
      }
      
      let topicsList = topics.listTopics();
      // Check that list is ordered
      expect(topicsList).to.deep.equal(topicsList.sort(function(a, b) { return b.votes - a.votes }));
    });
  });

  describe("Upvoting and downvoting", function() {
    it("upvotes on a topic", function() {
      let topics = new Topics();
      topics.addTopic('Hello World!');
      topics.voteOnTopic(0, 1); 
      expect(topics.topics[0].votes).to.equal(1);
    });

    it("downvotes on a topic", function() {
      let topics = new Topics();
      topics.addTopic('Hello World!');
      topics.voteOnTopic(0, -1); 
      expect(topics.topics[0].votes).to.equal(-1);
    });
  });
});
