'use strict';

const server = require('./lib/server.js');



server.start(process.env.PORT || 3000);
