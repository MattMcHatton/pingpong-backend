import chai from 'chai';
import chaiHttp from 'chai-http';
import { after } from 'mocha';
import server from '../../dist/server.js';

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("API routes", () => {
    after(async () => {
        server.close();
      });

      describe("Root Endpoint", () => {
        describe("Healthcheck", () => {
            it("should return a 200 response", (done) => {
                 chai.request(server)
                     .get('/health')
                     .end((err, res) => {
                         res.should.have.status(200);
                         done();
                      });
             });
        });
    
        describe("GET /", () => {
            it("should return a 200 response", (done) => {
                 chai.request(server)
                     .get('/')
                     .end((err, res) => {
                         res.should.have.status(200);
                         done();
                      });
             });
             it("should return an object", (done) => {
                chai.request(server)
                    .get('/')
                    .end((err, res) => {
                        res.should.be.an('object');
                        done();
                     });
            });
             it("should return 'Hello World!!'", (done) => {
                chai.request(server)
                    .get('/')
                    .end((err, res) => {
                        res.text.should.equal('Hello World!!');
                        done();
                     });
            });
        });
    });


    describe("Matches Endpoint", () => {
        describe("GET /matches", () => {
            it("should return a 200 response", (done) => {
                 chai.request(server)
                     .get('/matches')
                     .end((err, res) => {
                         res.should.have.status(200);
                         done();
                      });
             });
             it("should return an object", (done) => {
                chai.request(server)
                    .get('/matches')
                    .end((err, res) => {
                        res.should.be.an('object');
                        done();
                     });
            });
        });
        describe("GET /matches/:id", () => {
            it("should return a 200 response", (done) => {
                 chai.request(server)
                     .get('/matches/12345')
                     .end((err, res) => {
                         res.should.have.status(200);
                         done();
                      });
             });
             it("should return an object", (done) => {
                chai.request(server)
                    .get('/matches')
                    .end((err, res) => {
                        res.should.be.an('object');
                        done();
                     });
            });
        });
    });

    describe("Users Endpoints", () => {
        describe("GET /users", () => {
            it("should return a 200 response", (done) => {
                 chai.request(server)
                     .get('/users')
                     .end((err, res) => {
                         res.should.have.status(200);
                         done();
                      });
             });
             it("should return an object", (done) => {
                chai.request(server)
                    .get('/users')
                    .end((err, res) => {
                        res.should.be.an('object');
                        done();
                     });
            });
        });
        describe("GET /users/:id", () => {
            it("should return a 200 response", (done) => {
                 chai.request(server)
                     .get('/users/1234')
                     .end((err, res) => {
                         res.should.have.status(200);
                         done();
                      });
             });
             it("should return an object", (done) => {
                chai.request(server)
                    .get('/users/1234')
                    .end((err, res) => {
                        res.should.be.an('object');
                        done();
                     });
            });
        });
        describe("GET /users/:id/matches", () => {
            it("should return a 200 response", (done) => {
                 chai.request(server)
                     .get('/users/1234/matches')
                     .end((err, res) => {
                         res.should.have.status(200);
                         done();
                      });
             });
             it("should return an object", (done) => {
                chai.request(server)
                    .get('/users/1234/matches')
                    .end((err, res) => {
                        res.should.be.an('object');
                        done();
                     });
            });
        });
        describe("GET /users/:id/matches/:match_id", () => {
            it("should return a 200 response", (done) => {
                 chai.request(server)
                     .get('/users/1234/matches/12345')
                     .end((err, res) => {
                         res.should.have.status(200);
                         done();
                      });
             });
             it("should return an object", (done) => {
                chai.request(server)
                    .get('/users/1234/matches/12345')
                    .end((err, res) => {
                        res.should.be.an('object');
                        done();
                     });
            });
        });
    });
});