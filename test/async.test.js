const appMethods = require('../business/app methods');
const request = require("supertest");
const assert = require('assert');


//var app = require("../business/render engine").appConfig.app;
const app = require("../app").app;
const supertest = request.agent(app.listen())

describe('Async tests', function(){
    it('test async script, multiply two numbers', function(done){
        let expectResult = 12;
        appMethods.multiplyAsync(4, 3, function(result){
            assert.equal(result, expectResult)
            done();
        })
    })
})
describe('routing check', function(){
    it('main page', function(done){
        supertest
            .get('/')
            .expect(200, done)
    })
    it('test page', (done)=>{
        supertest
            .get('/test')
            .expect(200, 'Test page')
            .end(done)
    })
    it('error page', (done) => {
        supertest
            .get('/error')
            .expect(404, 'NotFound')
            .end(done)
    })
    it('get JSON users', (done) => {
        supertest
            .get('/api/quiz')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(done)
    })
    it('post JSON users', (done) => {
        supertest
            .post('/api/quiz')
            .send([{id:1, answerValue: ['test']}, {id:2, answerValue: ['test']},{id:3, answerValue: ['test']}])
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            .end(done)
    })
})
