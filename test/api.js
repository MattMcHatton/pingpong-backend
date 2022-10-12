import chai from 'chai';
import chaiHttp from 'chai-http';
import { after } from 'mocha';
import server from '../dist/server.js';

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Base API route", () => {
    describe("GET /", () => {
        after(async () => {
            server.close();
          });
        it("should return a 200 response", (done) => {
             chai.request(server)
                 .get('/')
                 .end((err, res) => {
                     res.should.have.status(200);
                     done();
                  });
         });
    });
});