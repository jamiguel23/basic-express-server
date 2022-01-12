'use strict';

const server = require('../lib/server.js');
const supertest = require('supertest');
const request = supertest(server.app);

let testName = {
  name: 'taylor',
};

const emptyName = {
  name: '',
};

describe('testing server 404 for bad route', () => {

  // 404 on bad route
  it('should respond with 404 for a bad route', async () => {
    const response = await request.get('/sour');
    expect(response.status).toEqual(404);
  });

});

describe('testing server 404 for bad method', () => {

  // 404 on bad method
  it('should respond with 404 for a bad method', async () => {
    const response = await request.put('/sour');
    expect(response.status).toEqual(404);
  });

});

describe('testing 500 no name in query string', () => {

  it('should respond with 500 if no name in query', async () => {

    const response = await request.get('/person').query(emptyName);
    expect(response.status).toBe(500);
  });
});

describe('testing 200 if there is name in query string', () => {

  it('should respond with 200 if there is name in query string', async () => {


    const response = await request.get('/person').query(testName);

    expect(response.status).toBe(200);
  });
});

describe('given an name in the query string, the output object is correct', () => {



  it('should respond with correct output', async () => {
    const response = await request.get('/person').query(testName);
    expect(typeof response.body).toBe('object');
  });
});
