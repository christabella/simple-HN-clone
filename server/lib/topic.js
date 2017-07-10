module.exports = class Topic {
  constructor(topic, id, votes=0) {
    this.topic = topic;
    this.id = id;
    this.votes = votes;
  }
}
