'use strict';

const server = require('../lib/server.js');
const supertest = require('supertest');
const request = supertest(server.app);

xdescribe('testing logger', () =>{
  it('should respond with correct output', async () => {
    const response = await request.get('/person?name=playa');
    expect(typeof response.body).toBe('object');
  });
});
