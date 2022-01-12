'use strict';


function validator( req, res, next) {

  let name = req.query.name;
  if (!name) {
    console.log('no name');
    next();
  } else {
    next();
  }
}

module.exports = validator;
