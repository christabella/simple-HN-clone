let Topics = require('../lib/topics.js');
let server = require('../server');

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

describe('HN Clone API', () => {
  describe('/GET topic', () => {
    it('GETs an empty array (of topic objects) initially', (done) => {
      chai.request(server)
        .get('/topics')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    }); 
  });
  
  describe('/POST topic', () => {
    it('POSTs a new topic successfully', (done) => {
      let topic = {
        topic: "Hello World"
      }
      chai.request(server)
        .post('/topics')
        .send(topic)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('Topic successfully submitted!');
          res.body.topic.should.have.property('id');
          res.body.topic.should.have.property('votes');
          res.body.topic.should.have.property('topic');
          done();
        });
    });
  });
});

