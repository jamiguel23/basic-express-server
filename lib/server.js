'use strict';

const express = require('express');
const app = express();

app.use((req,res, next) => {
  console.log(req.method);
  next();
});

app.get('/', (req,res) => {
  res.status(200).send('home route hit');
});


app.get('/test', (req,res) => {
  res.status(200).send('testing route hit');
});

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log('Server on port:' + port);
    });
  },
  app,
};
