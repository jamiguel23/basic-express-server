'use strict';

const express = require('express');
const app = express();
const logger = require('./middleware/logger.js');
const notFound = require('./error-handlers/404.js');
const serverError = require('./error-handlers/500.js');


app.use(logger);

app.get('/', (req, res, next) => {
  res.status(200).send('home route hit');
});


app.get('/test', (req,res) => {
  res.status(200).send('testing route hit');
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
