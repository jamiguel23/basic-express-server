'use strict';


const validator = require('../lib/middleware/validator.js');


xdescribe('validator', () => {
  it('should reject requests with no name ', () => {

    let req = { query: {} };
    let res = { };
  
    // spy on next method
    let next = jest.fn();
  
    validator(req, res, next);

    // Has to match validator error message
    expect(next).toHaveBeenCalledWith('no name');

  });
});
