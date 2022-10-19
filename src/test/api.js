import chai from 'chai';
import chaiHttp from 'chai-http';
import chaiSubset from 'chai-subset';
import { after } from 'mocha';
import server from '../../dist/server.js';

// Configure chai
chai.use(chaiHttp);
chai.use(chaiSubset);
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

    describe("Users Endpoints", () => {
        let test_id = ''
        describe("POST /users", () => {
            it("should create a new user", (done) => {
                 chai.request(server)
                     .post('/users')
                     .set('content-type', 'application/json')
                     .send({name: 'test name', email: 'test@test.com'})
                     .end((err, res) => { 
                        res.should.have.status(201);
                         res.body.should.have.property('id')
                         res.body.should.have.property('created_at')
                         res.body.should.have.property('updated_at')
                         res.body.should.containSubset({
                            name: 'test name',
                            email: 'test@test.com',
                         });
                         test_id = res.body.id
                         done();
                      });
             });
        });
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
                     .get(`/users/${test_id}`)
                     .end((err, res) => {
                         res.should.have.status(200);
                         done();
                      });
             });
             it("should return an object", (done) => {
                chai.request(server)
                    .get(`/users/${test_id}`)
                    .end((err, res) => {
                        res.should.be.an('object');
                        done();
                     });
            });
        });
        describe("GET /users/:id/matches", () => {
            it("should return a 200 response", (done) => {
                 chai.request(server)
                     .get(`/users/${test_id}/matches`)
                     .end((err, res) => {
                         res.should.have.status(200);
                         done();
                      });
             });
             it("should return an object", (done) => {
                chai.request(server)
                    .get(`/users/${test_id}/matches`)
                    .end((err, res) => {
                        res.should.be.an('object');
                        done();
                     });
            });
        });
        describe("GET /users/:id/matches/:match_id", () => {
            it("should return a 200 response", (done) => {
                 chai.request(server)
                     .get(`/users/${test_id}/matches/12345`)
                     .end((err, res) => {
                         res.should.have.status(200);
                         done();
                      });
             });
             it("should return an object", (done) => {
                chai.request(server)
                    .get(`/users/${test_id}/matches/12345`)
                    .end((err, res) => {
                        res.should.be.an('object');
                        done();
                     });
            });
        });
        describe("DELETE /users", () => {
            it("should return a 200 response", (done) => {
                 chai.request(server)
                     .delete('/users')
                     .set('content-type', 'application/json')
                     .send({id: `${test_id}`})
                     .end((err, res) => {
                         res.should.have.status(200);
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

    
});