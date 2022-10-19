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

    describe("GET /match", () => {
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

    describe("GET /user", () => {
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
});