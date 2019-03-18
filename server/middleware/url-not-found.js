'use strict';
module.exports = urlNotFound;

var path = require('path');

function urlNotFound() {
  return function raiseUrlNotFoundError(req, res, next) {
    res.sendFile(path.resolve(__dirname , '../../client/index.html'));
    // next();
  };
}
