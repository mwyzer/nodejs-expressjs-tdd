const request = require('supertest');
const app = require('./app');

describe('Todos API', () => {
    it('GET /todos ---> array todos', () => {
        return request(app)
            .get('/todos')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response``))
    });

    it('GET /todos ---> array todos', () => { });

    it('GET /todos/id ---> specific todo by ID', () => { });

    it('GET /todos/id ---> 404 if not found', () => { });

    it('POST /todos ---> created todo', () => { });

    it('GET /todos ---> validates request body', () => { });

});