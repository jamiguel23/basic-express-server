'use strict';

const server = require('../lib/server.js');
const supertest = require('supertest');
const request = supertest(server.app);

describe('testing logger', () =>{
  it('should respond with 404 for a bad route', async () => {
    const response = await request.get('/sour');
    expect(response.status).toEqual(404);
  });
});
