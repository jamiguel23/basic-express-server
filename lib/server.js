'use strict';

const express = require('express');
const app = express();
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const notFound = require('./error-handlers/404.js');
const serverError = require('./error-handlers/500.js');


app.use(logger);

app.get('/', (req, res, next) => {
  res.status(200).send('home route hit');
});



app.get('/person', validator, (req, res) => {


  const person = {
    name: req.query.name,
  };
  res.status(200).json(person);


});



// server 500 catch
app.use(serverError);

//error handler catch 404
app.use(notFound);


module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log('Server on port:' + port);
    });
  },
  app,
};
