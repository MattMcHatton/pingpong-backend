import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../dist/server.js';

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Base API route", () => {
    describe("GET /", () => {
        it("should return a 200 response", (done) => {
             chai.request(app)
                 .get('/')
                 .end((err, res) => {
                     res.should.have.status(200);
                     done();
                  });
         });
    });
});